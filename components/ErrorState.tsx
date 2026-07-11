type ErrorStateProps = {
  message?: string;
  onRetry: () => void;
};

export default function ErrorState({
  message = "Something went wrong while loading products.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center border border-hairline bg-ivory px-6 py-14 text-center"
    >
      <p className="font-serif text-xl font-medium text-ink">{message}</p>
      <p className="mt-3 max-w-md text-sm text-ink/60">
        Check your connection and try again. If the problem continues, the
        product API may be temporarily unavailable.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 bg-green-deep px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition hover:bg-green-deep/90 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      >
        Try again
      </button>
    </div>
  );
}
