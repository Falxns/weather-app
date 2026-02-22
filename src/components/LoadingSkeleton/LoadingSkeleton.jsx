export function CardSkeleton() {
  return (
    <div className="weather-card animate-pulse">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-full bg-white/20 flex-shrink-0" />
        <div className="flex-1 space-y-3">
          <div className="h-5 w-32 bg-white/20 rounded" />
          <div className="h-8 w-24 bg-white/20 rounded" />
          <div className="h-4 w-20 bg-white/20 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/10">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="h-3 w-16 bg-white/20 rounded" />
            <div className="h-5 w-12 bg-white/20 rounded" />
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="h-3 w-24 bg-white/20 rounded mb-3" />
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 min-w-[80px]">
              <div className="h-3 w-10 bg-white/20 rounded" />
              <div className="w-6 h-6 rounded-full bg-white/20" />
              <div className="h-3 w-12 bg-white/20 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeaderSkeleton() {
  return (
    <div className="glass-card p-4 md:p-6 animate-pulse">
      <div className="flex items-center gap-4 md:gap-6">
        <div className="w-24 h-24 rounded-full bg-white/20" />
        <div className="flex-1 space-y-3">
          <div className="h-4 w-40 bg-white/20 rounded" />
          <div className="h-12 w-28 bg-white/20 rounded" />
          <div className="h-4 w-24 bg-white/20 rounded" />
        </div>
      </div>
    </div>
  )
}
