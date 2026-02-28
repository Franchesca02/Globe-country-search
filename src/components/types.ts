export interface Country {
  name: {
    common: string
    official: string
  }
  capital?: string[]
  region: string
  subregion?: string
  population: number
  area: number
  flags: {
    png: string
    svg: string
    alt?: string
  }
  currencies?: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  languages?: {
    [key: string]: string
  }
  timezones: string[]
  continents: string[]
  borders?: string[]
  maps: {
    googleMaps: string
  }
}

export interface CountryState {
  data: Country | null
  loading: boolean
  error: string
}