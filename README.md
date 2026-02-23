# Weather App

[![Deploy to GitHub Pages](https://github.com/Falxns/weather-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/Falxns/weather-app/actions/workflows/deploy.yml)

**[Live Demo](https://falxns.github.io/weather-app/)**

A modern, responsive weather application built with React 18 and Vite. Track weather conditions for multiple cities with a beautiful glassmorphism UI.

## Features

- **Current Location Weather** - Automatically detects your location and displays local weather
- **Multi-City Dashboard** - Search and track weather for multiple cities simultaneously
- **5-Day Forecast** - View upcoming weather predictions for each tracked city
- **Dark/Light Mode** - Toggle between themes with system preference detection
- **Temperature Units** - Switch between Celsius and Fahrenheit
- **Multi-Language Support** - English and Russian translations
- **Persistent Storage** - Your cities, preferences, and language are saved to localStorage
- **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- **No API Key Required** - Uses the free Open-Meteo API

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling with custom theme
- **Open-Meteo API** - Free weather data (no API key needed)
- **Context API** - State management for theme, temperature units, and cities

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Falxns/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Project Structure

```
src/
├── api/
│   └── weatherApi.js         # Open-Meteo API integration
├── components/
│   ├── CityCard/             # Weather card for tracked cities
│   ├── CurrentWeatherCard/   # Current location weather display
│   ├── DarkModeToggle/       # Theme switcher
│   ├── ErrorToast/           # Error notification
│   ├── Footer/               # App footer
│   ├── Forecast/             # 5-day forecast component
│   ├── Header/               # App header with search
│   ├── LoadingSkeleton/      # Loading state placeholders
│   ├── Main/                 # City cards grid
│   ├── SearchBar/            # City search input
│   ├── TemperatureToggle/    # °C/°F switcher
│   └── WeatherIcon/          # SVG weather icons
├── context/
│   ├── CitiesContext.jsx     # Cities state management
│   ├── LanguageContext.jsx   # i18n with EN/RU translations
│   ├── TemperatureContext.jsx # Temperature unit state
│   └── ThemeContext.jsx      # Dark mode state
├── hooks/
│   └── useLocalStorage.js    # localStorage persistence hook
├── utils/
│   └── weatherCodes.js       # WMO weather code mappings
├── App.jsx                   # Root component
├── index.css                 # Tailwind imports & custom styles
└── index.jsx                 # Entry point
```

## API

This app uses the [Open-Meteo API](https://open-meteo.com/), which is:
- **Free** - No API key required
- **Open Source** - Community-driven
- **Reliable** - High uptime and accuracy

## License

MIT

## Author

Built with ❤️ for learning and portfolio purposes.
