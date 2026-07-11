function SkeletonCard() {
  return (
    <div className="overflow-hidden border border-hairline bg-white" aria-hidden>
      <div className="aspect-square animate-pulse bg-ivory" />
      <div className="space-y-3 border-t border-hairline p-5">
        <div className="h-4 w-4/5 animate-pulse rounded bg-ivory" />
        <div className="h-4 w-1/3 animate-pulse rounded bg-ivory" />
        <div className="h-3 w-full animate-pulse rounded bg-ivory" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-ivory" />
      </div>
    </div>
  );
}

export default function LoadingState() {
  return (
    <div role="status" aria-live="polite" aria-label="Loading products">
      <p className="mb-4 text-center text-xs uppercase tracking-[0.2em] text-ink/50">
        Loading products…
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
