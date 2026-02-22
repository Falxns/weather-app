import { useState } from 'react'
import { useCities } from '../../context/CitiesContext'
import { useLanguage } from '../../context/LanguageContext'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const { addCity, loading } = useCities()
  const { t } = useLanguage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (query.trim() && !loading) {
      const result = await addCity(query.trim())
      if (result) {
        setQuery('')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className="input-search pr-10"
          disabled={loading}
        />
        <svg 
          className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path strokeWidth="2" strokeLinecap="round" d="m21 21-4.35-4.35" />
        </svg>
      </div>
      <button
        type="submit"
        disabled={loading || !query.trim()}
        className="btn-primary flex items-center justify-center w-12 h-12 rounded-xl
                   disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label={t('addCity')}
      >
        {loading ? (
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        )}
      </button>
    </form>
  )
}
