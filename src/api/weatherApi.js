const GEO_API = 'https://geocoding-api.open-meteo.com/v1/search'
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast'

export async function searchCity(query) {
  const response = await fetch(`${GEO_API}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`)
  const data = await response.json()
  
  if (!data.results || data.results.length === 0) {
    throw new Error(`City "${query}" not found`)
  }
  
  return data.results.map(result => ({
    id: `${result.latitude}-${result.longitude}`,
    name: result.name,
    country: result.country,
    admin1: result.admin1,
    latitude: result.latitude,
    longitude: result.longitude,
  }))
}

export async function getWeatherByCoords(latitude, longitude) {
  const params = new URLSearchParams({
    latitude: latitude.toString(),
    longitude: longitude.toString(),
    current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m,surface_pressure',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    timezone: 'auto',
    forecast_days: '6',
  })
  
  const response = await fetch(`${WEATHER_API}?${params}`)
  const data = await response.json()
  
  if (data.error) {
    throw new Error(data.reason || 'Failed to fetch weather data')
  }
  
  return {
    current: {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      weatherCode: data.current.weather_code,
      windSpeed: data.current.wind_speed_10m,
      windDirection: data.current.wind_direction_10m,
      pressure: data.current.surface_pressure,
    },
    daily: data.daily.time.map((date, index) => ({
      date,
      weatherCode: data.daily.weather_code[index],
      tempMax: data.daily.temperature_2m_max[index],
      tempMin: data.daily.temperature_2m_min[index],
    })),
    units: {
      temperature: data.current_units.temperature_2m,
      windSpeed: data.current_units.wind_speed_10m,
      pressure: data.current_units.surface_pressure,
    },
  }
}

export async function getWeatherByCity(query) {
  const cities = await searchCity(query)
  const city = cities[0]
  const weather = await getWeatherByCoords(city.latitude, city.longitude)
  
  return {
    id: `${city.latitude}-${city.longitude}-${Date.now()}`,
    city: city.name,
    country: city.country,
    admin1: city.admin1,
    latitude: city.latitude,
    longitude: city.longitude,
    ...weather,
  }
}

export function getWeatherByCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'))
      return
    }
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords
          const weather = await getWeatherByCoords(latitude, longitude)
          
          const geoResponse = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          )
          const geoData = await geoResponse.json()
          
          resolve({
            id: `${latitude}-${longitude}-${Date.now()}`,
            city: geoData.address?.city || geoData.address?.town || geoData.address?.village || 'Current Location',
            country: geoData.address?.country || '',
            latitude,
            longitude,
            ...weather,
          })
        } catch (error) {
          reject(error)
        }
      },
      (error) => {
        reject(new Error(`Geolocation error: ${error.message}`))
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    )
  })
}
