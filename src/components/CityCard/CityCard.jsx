import { useTemperature } from '../../context/TemperatureContext'
import { useCities } from '../../context/CitiesContext'
import { useLanguage } from '../../context/LanguageContext'
import { getWeatherInfo, getWindDirection } from '../../utils/weatherCodes'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import Forecast from '../Forecast/Forecast'

export default function CityCard({ city }) {
  const { convertTemp, unitSymbol } = useTemperature()
  const { removeCity } = useCities()
  const { t } = useLanguage()

  const { descriptionKey } = getWeatherInfo(city.current.weatherCode)

  const handleRemove = () => {
    removeCity(city.id)
  }

  return (
    <div className="weather-card animate-fade-in relative group">
      <button
        onClick={handleRemove}
        className="absolute top-3 right-3 w-8 h-8 rounded-full 
                   bg-white/10 hover:bg-red-500/80 
                   flex items-center justify-center
                   opacity-0 group-hover:opacity-100 transition-all duration-200
                   focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label={`${t('remove')} ${city.city}`}
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex items-start gap-4">
        <WeatherIcon code={city.current.weatherCode} size="lg" className="flex-shrink-0" />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-bold text-white truncate">{city.city}</h3>
            {city.country && (
              <span className="text-sm text-white/60">{city.country}</span>
            )}
          </div>
          
          <div className="text-3xl font-bold text-white text-shadow mb-1">
            {convertTemp(city.current.temperature)}{unitSymbol}
          </div>
          
          <p className="text-white/70 text-sm">{t(descriptionKey)}</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-white/50 mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-xs">{t('humidity')}</span>
          </div>
          <p className="text-white font-medium">{city.current.humidity}%</p>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-white/50 mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="text-xs">{t('wind')}</span>
          </div>
          <p className="text-white font-medium text-sm">
            {getWindDirection(city.current.windDirection)} {Math.round(city.current.windSpeed)} km/h
          </p>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-white/50 mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-xs">{t('pressure')}</span>
          </div>
          <p className="text-white font-medium text-sm">{Math.round(city.current.pressure)} hPa</p>
        </div>
      </div>

      <Forecast daily={city.daily} />
    </div>
  )
}
