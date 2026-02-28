export function LoadingSkeleton() {
  return (
    <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-6 animate-pulse">
      <div className="flex justify-between items-start mb-6">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="h-8 bg-gray-200 rounded w-20"></div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="w-48 h-48 bg-gray-200 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  )
}