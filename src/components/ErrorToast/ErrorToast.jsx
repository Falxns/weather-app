import { useEffect } from 'react'
import { useCities } from '../../context/CitiesContext'

export default function ErrorToast() {
  const { error, clearError } = useCities()

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, clearError])

  if (!error) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl 
                      bg-red-500/90 backdrop-blur-sm border border-red-400/50
                      shadow-lg shadow-red-500/20">
        <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-white text-sm font-medium">{error}</span>
        <button
          onClick={clearError}
          className="ml-2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Dismiss error"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
