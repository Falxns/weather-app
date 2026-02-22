import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TemperatureContext = createContext(null)

export function TemperatureProvider({ children }) {
  const [isFahrenheit, setIsFahrenheit] = useLocalStorage('weather-app-unit', false)

  const toggleUnit = () => setIsFahrenheit(prev => !prev)

  const convertTemp = (celsius) => {
    if (isFahrenheit) {
      return Math.round((celsius * 9/5) + 32)
    }
    return Math.round(celsius)
  }

  const unitSymbol = isFahrenheit ? '°F' : '°C'

  return (
    <TemperatureContext.Provider value={{ 
      isFahrenheit, 
      toggleUnit, 
      convertTemp,
      unitSymbol 
    }}>
      {children}
    </TemperatureContext.Provider>
  )
}

export function useTemperature() {
  const context = useContext(TemperatureContext)
  if (!context) {
    throw new Error('useTemperature must be used within a TemperatureProvider')
  }
  return context
}
