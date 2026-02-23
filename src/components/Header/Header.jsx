import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard'
import SearchBar from '../SearchBar/SearchBar'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import TemperatureToggle from '../TemperatureToggle/TemperatureToggle'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import { useLanguage } from '../../context/LanguageContext'

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="w-full px-4 py-6 md:px-8 md:py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" opacity="0" />
              <circle cx="12" cy="12" r="5" opacity="0.9" />
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
            <h1 className="text-2xl md:text-3xl font-bold text-white text-shadow">
              {t('appTitle')}
            </h1>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <LanguageToggle />
            <TemperatureToggle />
            <DarkModeToggle />
          </div>
        </div>
        
        <CurrentWeatherCard />
        
        <div className="flex justify-center">
          <SearchBar />
        </div>
      </div>
    </header>
  )
}
