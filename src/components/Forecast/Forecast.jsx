import { useTemperature } from '../../context/TemperatureContext'
import { useLanguage } from '../../context/LanguageContext'
import { getDayKey } from '../../utils/weatherCodes'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

export default function Forecast({ daily }) {
  const { convertTemp } = useTemperature()
  const { t } = useLanguage()

  if (!daily || daily.length === 0) return null

  const forecast = daily.slice(1, 6)

  return (
    <div className="mt-4 pt-4 border-t border-white/10">
      <h4 className="text-sm font-medium text-white/60 mb-3">{t('forecast')}</h4>
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
        {forecast.map((day) => (
          <div 
            key={day.date}
            className="flex-shrink-0 flex flex-col items-center gap-1 p-3 rounded-xl
                       bg-white/5 hover:bg-white/10 transition-colors min-w-[80px]"
          >
            <span className="text-xs font-medium text-white/70">
              {t(getDayKey(day.date))}
            </span>
            <WeatherIcon code={day.weatherCode} size="sm" />
            <div className="flex items-center gap-1 text-xs">
              <span className="text-white font-medium">
                {convertTemp(day.tempMax)}°
              </span>
              <span className="text-white/50">
                {convertTemp(day.tempMin)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
