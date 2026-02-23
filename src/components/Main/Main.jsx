import { useCities } from '../../context/CitiesContext'
import { useLanguage } from '../../context/LanguageContext'
import CityCard from '../CityCard/CityCard'

export default function Main() {
  const { cities } = useCities()
  const { t } = useLanguage()

  if (cities.length === 0) {
    return (
      <main className="flex-1 px-4 py-8 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-12 text-center">
            <svg 
              className="w-24 h-24 mx-auto mb-6 text-white/30" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            <h2 className="text-2xl font-bold text-white mb-2">{t('noCitiesTitle')}</h2>
            <p className="text-white/60 max-w-md mx-auto">
              {t('noCitiesDescription')}
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-1 px-4 py-8 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </main>
  )
}
