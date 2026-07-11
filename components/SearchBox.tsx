type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  resultCount?: number;
  totalCount?: number;
};

export default function SearchBox({
  value,
  onChange,
  resultCount,
  totalCount,
}: SearchBoxProps) {
  return (
    <div className="w-full max-w-xl">
      <label htmlFor="product-search" className="sr-only">
        Search products by title
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400"
          aria-hidden
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <input
          id="product-search"
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search products by title…"
          autoComplete="off"
          className="w-full rounded-lg border border-zinc-300 bg-white py-2.5 pl-10 pr-4 text-sm text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        />
      </div>
      {typeof resultCount === "number" && typeof totalCount === "number" && (
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400" aria-live="polite">
          Showing {resultCount} of {totalCount} products
        </p>
      )}
    </div>
  );
}
