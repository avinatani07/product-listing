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
      className="flex flex-col items-center justify-center rounded-xl border border-red-200 bg-red-50 px-6 py-12 text-center dark:border-red-900/50 dark:bg-red-950/30"
    >
      <p className="text-base font-medium text-red-800 dark:text-red-200">
        {message}
      </p>
      <p className="mt-2 max-w-md text-sm text-red-700/80 dark:text-red-300/80">
        Check your connection and try again. If the problem continues, the
        product API may be temporarily unavailable.
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-6 rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-600 dark:hover:bg-red-500"
      >
        Try again
      </button>
    </div>
  );
}
