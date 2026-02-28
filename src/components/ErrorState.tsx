import { countriesApi } from '../services/countriesApi'

interface ErrorStateProps {
  message: string
}

export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8 text-center">
      <div className="text-6xl mb-4">😢</div>
      <p className="text-red-600 font-medium">{message}</p>
      <p className="text-gray-500 text-sm mt-2">
        Try: {countriesApi.getSuggestions().join(', ')}
      </p>
    </div>
  )
}