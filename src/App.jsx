import { ThemeProvider } from './context/ThemeContext'
import { CitiesProvider } from './context/CitiesContext'
import { TemperatureProvider } from './context/TemperatureContext'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import ErrorToast from './components/ErrorToast/ErrorToast'

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <TemperatureProvider>
          <CitiesProvider>
            <div className="min-h-screen flex flex-col bg-gradient-light dark:bg-gradient-dark transition-colors duration-500">
              <Header />
              <Main />
              <Footer />
              <ErrorToast />
            </div>
          </CitiesProvider>
        </TemperatureProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}
