import type { Country } from './types'

interface CountryCardProps {
  country: Country
}

// Continent color mapping
const continentColors: Record<string, string> = {
  'Africa': 'bg-orange-500',
  'Asia': 'bg-red-500',
  'Europe': 'bg-blue-500',
  'North America': 'bg-green-500',
  'South America': 'bg-yellow-600',
  'Oceania': 'bg-purple-500',
  'Antarctica': 'bg-gray-400',
}

export function CountryCard({ country }: CountryCardProps) {
  // Format population with commas
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat().format(num)
  }

  // Get currency list - now used below
  const getCurrencies = (): string => {
    if (!country.currencies) return 'N/A'
    return Object.values(country.currencies)
      .map(c => `${c.name} (${c.symbol})`)
      .join(', ')
  }

  // Get language list - now used below
  const getLanguages = (): string => {
    if (!country.languages) return 'N/A'
    return Object.values(country.languages).join(', ')
  }

  // Get continent color
  const getContinentColor = (): string => {
    const continent = country.continents[0]
    return continentColors[continent] || 'bg-gray-500'
  }

  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 transform transition hover:scale-105">
      
      {/* Header with Flag and Name */}
      <div className="flex items-center gap-4 mb-6">
        <img 
          src={country.flags.svg} 
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="w-20 h-12 object-cover rounded-lg shadow-md border"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {country.name.common}
          </h2>
          <p className="text-sm text-gray-500">
            {country.name.official}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${getContinentColor()}`}>
          {country.continents[0]}
        </span>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-xl">
          <div className="text-sm text-gray-500">Capital</div>
          <div className="font-bold truncate">
            {country.capital?.[0] || 'N/A'}
          </div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-xl">
          <div className="text-sm text-gray-500">Region</div>
          <div className="font-bold">{country.region}</div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-3 bg-blue-50 rounded-xl">
          <div className="text-xs text-blue-600 mb-1">Population</div>
          <div className="font-bold text-lg">{formatNumber(country.population)}</div>
        </div>
        <div className="p-3 bg-green-50 rounded-xl">
          <div className="text-xs text-green-600 mb-1">Area (km²)</div>
          <div className="font-bold text-lg">{formatNumber(country.area)}</div>
        </div>
      </div>

      {/* Languages - NOW USING getLanguages() */}
      {country.languages && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Languages</h3>
          <p className="text-gray-700">{getLanguages()}</p>
        </div>
      )}

      {/* Currencies - NOW USING getCurrencies() */}
      {country.currencies && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Currencies</h3>
          <p className="text-gray-700">{getCurrencies()}</p>
        </div>
      )}

      {/* Additional Info */}
      <div className="border-t pt-4 mt-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Timezone</span>
          <span className="font-medium">{country.timezones[0]}</span>
        </div>
        {country.subregion && (
          <div className="flex justify-between text-sm mt-1">
            <span className="text-gray-500">Subregion</span>
            <span className="font-medium">{country.subregion}</span>
          </div>
        )}
      </div>

      {/* Map Link */}
      <a 
        href={country.maps.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block text-center py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
      >
        View on Google Maps 🗺️
      </a>
    </div>
  )
}