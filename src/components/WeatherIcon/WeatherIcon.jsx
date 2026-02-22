import { getWeatherInfo } from '../../utils/weatherCodes'

const iconPaths = {
  sun: (
    <g>
      <circle cx="12" cy="12" r="5" fill="currentColor" />
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
    </g>
  ),
  cloud: (
    <path 
      fill="currentColor" 
      d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" 
    />
  ),
  'cloud-sun': (
    <g>
      <path fill="currentColor" opacity="0.5" d="M12 2v2M4.93 4.93l1.41 1.41M2 12h2M4.93 19.07l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="10" r="4" fill="currentColor" opacity="0.5" />
      <path fill="currentColor" d="M17.5 19H9a5 5 0 1 1 .5-9.96A6 6 0 0 1 17.5 15a3.5 3.5 0 0 1 0 7z" />
    </g>
  ),
  'cloud-drizzle': (
    <g>
      <path fill="currentColor" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" opacity="0.8" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <line x1="8" y1="19" x2="8" y2="21" />
        <line x1="12" y1="19" x2="12" y2="21" />
        <line x1="16" y1="19" x2="16" y2="21" />
      </g>
    </g>
  ),
  'cloud-rain': (
    <g>
      <path fill="currentColor" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" opacity="0.8" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="8" y1="19" x2="8" y2="23" />
        <line x1="12" y1="17" x2="12" y2="23" />
        <line x1="16" y1="19" x2="16" y2="23" />
      </g>
    </g>
  ),
  'cloud-showers': (
    <g>
      <path fill="currentColor" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" opacity="0.7" />
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="7" y1="18" x2="6" y2="23" />
        <line x1="11" y1="17" x2="10" y2="23" />
        <line x1="15" y1="18" x2="14" y2="23" />
        <line x1="19" y1="17" x2="18" y2="22" />
      </g>
    </g>
  ),
  snowflake: (
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
    </g>
  ),
  smog: (
    <g>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6">
        <line x1="3" y1="8" x2="21" y2="8" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="4" y1="16" x2="20" y2="16" />
        <line x1="6" y1="20" x2="18" y2="20" />
      </g>
    </g>
  ),
  bolt: (
    <g>
      <path fill="currentColor" opacity="0.6" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      <polygon fill="currentColor" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </g>
  ),
  question: (
    <g>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </g>
  ),
}

export default function WeatherIcon({ code, size = 'md', className = '' }) {
  const { icon, color } = getWeatherInfo(code)
  
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }
  
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={`${sizeClasses[size]} ${color} ${className} drop-shadow-lg`}
      aria-label={icon}
    >
      {iconPaths[icon] || iconPaths.question}
    </svg>
  )
}
