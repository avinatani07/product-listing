type EmptyStateProps = {
  query: string;
  onClear: () => void;
};

export default function EmptyState({ query, onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-6 py-14 text-center dark:border-zinc-700 dark:bg-zinc-900/50">
      <p className="text-base font-medium text-zinc-800 dark:text-zinc-100">
        No products match &ldquo;{query}&rdquo;
      </p>
      <p className="mt-2 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
        Try a different keyword, or clear the search to see the full catalog.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-5 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        Clear search
      </button>
    </div>
  );
}
