/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void
  recentSearches: string[]
  loading: boolean
  placeholder?: string
}

export function SearchBar({ onSearch, recentSearches, loading, placeholder = "Search..." }: SearchBarProps) {
  const [search, setSearch] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!search.trim()) return
    onSearch(search)
    setSearch('')
  }

  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 mb-6">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter country name"
          className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? '🔍' : 'Search'}
        </button>
      </form>

      {recentSearches.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-500 mr-2">Recent:</span>
          {recentSearches.map((name) => (
            <button
              key={name}
              onClick={() => onSearch(name)}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}