type EmptyStateProps = {
  query: string;
  onClear: () => void;
};

export default function EmptyState({ query, onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed border-gold-muted/50 bg-ivory px-6 py-16 text-center">
      <p className="font-serif text-xl font-medium text-ink">
        No products match &ldquo;{query}&rdquo;
      </p>
      <p className="mt-3 max-w-sm text-sm text-ink/60">
        Try a different keyword, or clear the search to see the full catalog.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-6 border border-gold bg-white px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-ink transition hover:bg-gold/10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      >
        Clear search
      </button>
    </div>
  );
}
