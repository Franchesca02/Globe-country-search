import type { Country } from '../components/types'

const BASE_URL = 'https://restcountries.com/v3.1'

export const countriesApi = {
  searchCountry: async (name: string): Promise<Country> => {
    const response = await fetch(`${BASE_URL}/name/${name.toLowerCase().trim()}?fullText=true`)
    
    if (!response.ok) {
      throw new Error('Country not found')
    }
    
    const data = await response.json()
    return data[0] 
  },

  searchByCode: async (code: string): Promise<Country> => {
    const response = await fetch(`${BASE_URL}/alpha/${code}`)
    const data = await response.json()
    return data
  },

  getSuggestions: (): string[] => {
    return ['Canada', 'Brazil', 'Japan', 'France', 'Australia', 'Ghana']
  },

  getPopularCountries: (): string[] => {
    return ['United States', 'United Kingdom', 'Germany', 'India', 'China', 'Nigeria']
  }
}