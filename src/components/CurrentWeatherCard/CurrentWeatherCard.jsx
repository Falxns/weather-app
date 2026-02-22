import { useState, useEffect } from 'react'
import { getWeatherByCurrentPosition } from '../../api/weatherApi'
import { getWeatherInfo, getWindDirection } from '../../utils/weatherCodes'
import { useTemperature } from '../../context/TemperatureContext'
import { useLanguage } from '../../context/LanguageContext'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

export default function CurrentWeatherCard() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { convertTemp, unitSymbol } = useTemperature()
  const { t } = useLanguage()

  useEffect(() => {
    async function fetchCurrentLocation() {
      try {
        setLoading(true)
        const data = await getWeatherByCurrentPosition()
        setWeather(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchCurrentLocation()
  }, [])

  if (loading) {
    return (
      <div className="glass-card p-4 animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white/20" />
          <div className="space-y-2">
            <div className="h-4 w-32 bg-white/20 rounded" />
            <div className="h-8 w-20 bg-white/20 rounded" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="glass-card p-4">
        <div className="flex items-center gap-3 text-white/70">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{t('enableLocation')}</span>
        </div>
      </div>
    )
  }

  if (!weather) return null

  const { descriptionKey } = getWeatherInfo(weather.current.weatherCode)

  return (
    <div className="glass-card p-4 md:p-6">
      <div className="flex items-center gap-4 md:gap-6">
        <WeatherIcon code={weather.current.weatherCode} size="xl" />
        <div className="flex-1">
          <div className="flex items-center gap-2 text-white/80 mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium">{weather.city}, {weather.country}</span>
          </div>
          <div className="text-4xl md:text-5xl font-bold text-white text-shadow-lg">
            {convertTemp(weather.current.temperature)}{unitSymbol}
          </div>
          <p className="text-white/80 mt-1">{t(descriptionKey)}</p>
        </div>
        <div className="hidden md:flex flex-col gap-2 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span>{t('humidity')}: {weather.current.humidity}%</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>{t('wind')}: {getWindDirection(weather.current.windDirection)} {Math.round(weather.current.windSpeed)} km/h</span>
          </div>
        </div>
      </div>
    </div>
  )
}
