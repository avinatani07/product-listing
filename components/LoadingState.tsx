function SkeletonCard() {
  return (
    <div
      className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
      aria-hidden
    >
      <div className="aspect-square animate-pulse bg-zinc-100 dark:bg-zinc-800" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-4/5 animate-pulse rounded bg-zinc-100 dark:bg-zinc-800" />
        <div className="h-4 w-1/3 animate-pulse rounded bg-zinc-100 dark:bg-zinc-800" />
        <div className="h-3 w-full animate-pulse rounded bg-zinc-100 dark:bg-zinc-800" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-zinc-100 dark:bg-zinc-800" />
      </div>
    </div>
  );
}

export default function LoadingState() {
  return (
    <div role="status" aria-live="polite" aria-label="Loading products">
      <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
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
