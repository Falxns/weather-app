import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const LanguageContext = createContext(null)

const translations = {
  en: {
    appTitle: 'Weather App',
    searchPlaceholder: 'Search city...',
    addCity: 'Add city',
    noCitiesTitle: 'No cities added yet',
    noCitiesDescription: 'Search for a city above to start tracking its weather. You can add multiple cities to compare conditions.',
    enableLocation: 'Enable location access for local weather',
    location: 'Location',
    humidity: 'Humidity',
    wind: 'Wind',
    pressure: 'Pressure',
    forecast: '5-Day Forecast',
    today: 'Today',
    tomorrow: 'Tomorrow',
    remove: 'Remove',
    poweredBy: 'Powered by',
    github: 'GitHub',
    // Weather descriptions
    clearSky: 'Clear sky',
    mainlyClear: 'Mainly clear',
    partlyCloudy: 'Partly cloudy',
    overcast: 'Overcast',
    fog: 'Fog',
    depositingRimeFog: 'Depositing rime fog',
    lightDrizzle: 'Light drizzle',
    moderateDrizzle: 'Moderate drizzle',
    denseDrizzle: 'Dense drizzle',
    lightFreezingDrizzle: 'Light freezing drizzle',
    denseFreezingDrizzle: 'Dense freezing drizzle',
    slightRain: 'Slight rain',
    moderateRain: 'Moderate rain',
    heavyRain: 'Heavy rain',
    lightFreezingRain: 'Light freezing rain',
    heavyFreezingRain: 'Heavy freezing rain',
    slightSnow: 'Slight snow',
    moderateSnow: 'Moderate snow',
    heavySnow: 'Heavy snow',
    snowGrains: 'Snow grains',
    slightRainShowers: 'Slight rain showers',
    moderateRainShowers: 'Moderate rain showers',
    violentRainShowers: 'Violent rain showers',
    slightSnowShowers: 'Slight snow showers',
    heavySnowShowers: 'Heavy snow showers',
    thunderstorm: 'Thunderstorm',
    thunderstormSlightHail: 'Thunderstorm with slight hail',
    thunderstormHeavyHail: 'Thunderstorm with heavy hail',
    unknown: 'Unknown',
    // Days
    mon: 'Mon',
    tue: 'Tue',
    wed: 'Wed',
    thu: 'Thu',
    fri: 'Fri',
    sat: 'Sat',
    sun: 'Sun',
  },
  ru: {
    appTitle: 'Погода',
    searchPlaceholder: 'Поиск города...',
    addCity: 'Добавить город',
    noCitiesTitle: 'Города ещё не добавлены',
    noCitiesDescription: 'Найдите город выше, чтобы начать отслеживать погоду. Вы можете добавить несколько городов для сравнения.',
    enableLocation: 'Разрешите доступ к местоположению для местной погоды',
    location: 'Местоположение',
    humidity: 'Влажность',
    wind: 'Ветер',
    pressure: 'Давление',
    forecast: 'Прогноз на 5 дней',
    today: 'Сегодня',
    tomorrow: 'Завтра',
    remove: 'Удалить',
    poweredBy: 'Работает на',
    github: 'GitHub',
    // Weather descriptions
    clearSky: 'Ясно',
    mainlyClear: 'Преимущественно ясно',
    partlyCloudy: 'Переменная облачность',
    overcast: 'Пасмурно',
    fog: 'Туман',
    depositingRimeFog: 'Изморозь',
    lightDrizzle: 'Лёгкая морось',
    moderateDrizzle: 'Умеренная морось',
    denseDrizzle: 'Сильная морось',
    lightFreezingDrizzle: 'Лёгкая ледяная морось',
    denseFreezingDrizzle: 'Сильная ледяная морось',
    slightRain: 'Небольшой дождь',
    moderateRain: 'Умеренный дождь',
    heavyRain: 'Сильный дождь',
    lightFreezingRain: 'Лёгкий ледяной дождь',
    heavyFreezingRain: 'Сильный ледяной дождь',
    slightSnow: 'Небольшой снег',
    moderateSnow: 'Умеренный снег',
    heavySnow: 'Сильный снег',
    snowGrains: 'Снежная крупа',
    slightRainShowers: 'Небольшой ливень',
    moderateRainShowers: 'Умеренный ливень',
    violentRainShowers: 'Сильный ливень',
    slightSnowShowers: 'Небольшой снегопад',
    heavySnowShowers: 'Сильный снегопад',
    thunderstorm: 'Гроза',
    thunderstormSlightHail: 'Гроза с небольшим градом',
    thunderstormHeavyHail: 'Гроза с сильным градом',
    unknown: 'Неизвестно',
    // Days
    mon: 'Пн',
    tue: 'Вт',
    wed: 'Ср',
    thu: 'Чт',
    fri: 'Пт',
    sat: 'Сб',
    sun: 'Вс',
  },
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('weather-app-language', 'en')

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
