import { createContext, useContext, useCallback, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { getWeatherByCity, getWeatherByCoords } from '../api/weatherApi'

const CitiesContext = createContext(null)

export function CitiesProvider({ children }) {
  const [cities, setCities] = useLocalStorage('weather-app-cities', [])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const addCity = useCallback(async (query) => {
    setLoading(true)
    setError(null)
    
    try {
      const weatherData = await getWeatherByCity(query)
      
      const exists = cities.some(
        city => city.latitude === weatherData.latitude && city.longitude === weatherData.longitude
      )
      
      if (exists) {
        setError(`${weatherData.city} is already in your list`)
        return null
      }
      
      setCities(prev => [weatherData, ...prev])
      return weatherData
    } catch (err) {
      setError(err.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [cities, setCities])

  const removeCity = useCallback((cityId) => {
    setCities(prev => prev.filter(city => city.id !== cityId))
  }, [setCities])

  const refreshCity = useCallback(async (cityId) => {
    const city = cities.find(c => c.id === cityId)
    if (!city) return

    try {
      const weatherData = await getWeatherByCoords(city.latitude, city.longitude)
      setCities(prev => prev.map(c => 
        c.id === cityId 
          ? { ...c, ...weatherData, id: cityId }
          : c
      ))
    } catch (err) {
      console.error('Failed to refresh city:', err)
    }
  }, [cities, setCities])

  const refreshAllCities = useCallback(async () => {
    setLoading(true)
    try {
      const updatedCities = await Promise.all(
        cities.map(async (city) => {
          try {
            const weatherData = await getWeatherByCoords(city.latitude, city.longitude)
            return { ...city, ...weatherData }
          } catch {
            return city
          }
        })
      )
      setCities(updatedCities)
    } finally {
      setLoading(false)
    }
  }, [cities, setCities])

  const clearError = useCallback(() => setError(null), [])

  return (
    <CitiesContext.Provider value={{ 
      cities, 
      loading, 
      error, 
      addCity, 
      removeCity, 
      refreshCity,
      refreshAllCities,
      clearError 
    }}>
      {children}
    </CitiesContext.Provider>
  )
}

export function useCities() {
  const context = useContext(CitiesContext)
  if (!context) {
    throw new Error('useCities must be used within a CitiesProvider')
  }
  return context
}
