export const weatherDescriptionKeys = {
  0: 'clearSky',
  1: 'mainlyClear',
  2: 'partlyCloudy',
  3: 'overcast',
  45: 'fog',
  48: 'depositingRimeFog',
  51: 'lightDrizzle',
  53: 'moderateDrizzle',
  55: 'denseDrizzle',
  56: 'lightFreezingDrizzle',
  57: 'denseFreezingDrizzle',
  61: 'slightRain',
  63: 'moderateRain',
  65: 'heavyRain',
  66: 'lightFreezingRain',
  67: 'heavyFreezingRain',
  71: 'slightSnow',
  73: 'moderateSnow',
  75: 'heavySnow',
  77: 'snowGrains',
  80: 'slightRainShowers',
  81: 'moderateRainShowers',
  82: 'violentRainShowers',
  85: 'slightSnowShowers',
  86: 'heavySnowShowers',
  95: 'thunderstorm',
  96: 'thunderstormSlightHail',
  99: 'thunderstormHeavyHail',
}

export const weatherIcons = {
  0: { icon: 'sun', color: 'text-yellow-400' },
  1: { icon: 'sun', color: 'text-yellow-400' },
  2: { icon: 'cloud-sun', color: 'text-gray-300' },
  3: { icon: 'cloud', color: 'text-gray-400' },
  45: { icon: 'smog', color: 'text-gray-400' },
  48: { icon: 'smog', color: 'text-gray-400' },
  51: { icon: 'cloud-drizzle', color: 'text-blue-300' },
  53: { icon: 'cloud-drizzle', color: 'text-blue-400' },
  55: { icon: 'cloud-drizzle', color: 'text-blue-500' },
  56: { icon: 'cloud-drizzle', color: 'text-cyan-400' },
  57: { icon: 'cloud-drizzle', color: 'text-cyan-500' },
  61: { icon: 'cloud-rain', color: 'text-blue-400' },
  63: { icon: 'cloud-rain', color: 'text-blue-500' },
  65: { icon: 'cloud-rain', color: 'text-blue-600' },
  66: { icon: 'cloud-rain', color: 'text-cyan-400' },
  67: { icon: 'cloud-rain', color: 'text-cyan-500' },
  71: { icon: 'snowflake', color: 'text-blue-200' },
  73: { icon: 'snowflake', color: 'text-blue-300' },
  75: { icon: 'snowflake', color: 'text-white' },
  77: { icon: 'snowflake', color: 'text-gray-200' },
  80: { icon: 'cloud-showers', color: 'text-blue-400' },
  81: { icon: 'cloud-showers', color: 'text-blue-500' },
  82: { icon: 'cloud-showers', color: 'text-blue-600' },
  85: { icon: 'snowflake', color: 'text-blue-200' },
  86: { icon: 'snowflake', color: 'text-white' },
  95: { icon: 'bolt', color: 'text-yellow-500' },
  96: { icon: 'bolt', color: 'text-yellow-400' },
  99: { icon: 'bolt', color: 'text-yellow-300' },
}

export function getWeatherInfo(code) {
  return {
    descriptionKey: weatherDescriptionKeys[code] || 'unknown',
    ...(weatherIcons[code] || { icon: 'question', color: 'text-gray-400' }),
  }
}

export function getWindDirection(degrees) {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  const index = Math.round(degrees / 22.5) % 16
  return directions[index]
}

export function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

export function getDayKey(dateString) {
  const date = new Date(dateString)
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  
  if (date.toDateString() === today.toDateString()) {
    return 'today'
  }
  if (date.toDateString() === tomorrow.toDateString()) {
    return 'tomorrow'
  }
  
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  return days[date.getDay()]
}
