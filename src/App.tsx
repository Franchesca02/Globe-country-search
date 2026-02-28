/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { countriesApi } from './services/countriesApi'
import { SearchBar } from './components/SearchBar'
import { CountryCard } from './components/CountryCard'
import { LoadingSkeleton } from './components/LoadingSkeleton'
import { ErrorState } from './components/ErrorState'
import type { Country } from './components/types'

function App() {
  const [country, setCountry] = useState<Country | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  const handleSearch = async (searchTerm: string) => {
    setLoading(true)
    setError('')
    setCountry(null)

    try {
      const data = await countriesApi.searchCountry(searchTerm)
      setCountry(data)
      
      
      setRecentSearches(prev => {
        const newSearches = [searchTerm, ...prev.filter(s => s !== searchTerm)]
        return newSearches.slice(0, 5)
      })
      
    } catch (err) {
      setError('Country not found. Try "Canada", "Brazil", or "Japan"')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-blue-600 p-4">
      <div className="max-w-2xl mx-auto">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
            GlobeExplorer 🌍
          </h1>
          <p className="text-white/90">
            Discover countries and their cultures
          </p>
        </div>

        
        <SearchBar 
          onSearch={handleSearch}
          recentSearches={recentSearches}
          loading={loading}
          placeholder="Enter country name (e.g., Canada)"
        />

        
        {loading && <LoadingSkeleton />}
        
        {error && !loading && <ErrorState message={error} />}
        
        {country && !loading && <CountryCard country={country} />}

        
        <div className="text-center mt-4 text-white/80 text-sm">
          Powered by REST Countries • {new Date().getFullYear()}
        </div>
          <div className="text-center mt-6 text-white/80 text-sm">
          <p>© Ify 2026</p>
        </div>
      </div>
    </div>
  )
}

export default App