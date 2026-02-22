import { useTemperature } from '../../context/TemperatureContext'

export default function TemperatureToggle() {
  const { isFahrenheit, toggleUnit } = useTemperature()

  return (
    <button
      onClick={toggleUnit}
      className="flex items-center gap-2 px-3 py-2 rounded-xl
                 bg-white/20 dark:bg-white/10 
                 border border-white/30 dark:border-white/20
                 transition-all duration-200 hover:bg-white/30 dark:hover:bg-white/20
                 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label={`Switch to ${isFahrenheit ? 'Celsius' : 'Fahrenheit'}`}
    >
      <span className={`text-sm font-medium transition-opacity ${!isFahrenheit ? 'text-white' : 'text-white/50'}`}>
        °C
      </span>
      <div className="w-8 h-5 rounded-full bg-white/20 relative">
        <div
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-200 
                      ${isFahrenheit ? 'left-3.5' : 'left-0.5'}`}
        />
      </div>
      <span className={`text-sm font-medium transition-opacity ${isFahrenheit ? 'text-white' : 'text-white/50'}`}>
        °F
      </span>
    </button>
  )
}
