import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3 py-2 rounded-xl
                 bg-white/20 dark:bg-white/10 
                 border border-white/30 dark:border-white/20
                 transition-all duration-200 hover:bg-white/30 dark:hover:bg-white/20
                 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label={`Switch to ${language === 'en' ? 'Russian' : 'English'}`}
    >
      <span className={`text-sm font-medium transition-opacity ${language === 'en' ? 'text-white' : 'text-white/50'}`}>
        EN
      </span>
      <span className="text-white/30">/</span>
      <span className={`text-sm font-medium transition-opacity ${language === 'ru' ? 'text-white' : 'text-white/50'}`}>
        RU
      </span>
    </button>
  )
}
