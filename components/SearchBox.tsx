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
          className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gold-muted"
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
          className="w-full border border-hairline bg-white py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </div>
      {typeof resultCount === "number" && typeof totalCount === "number" && (
        <p
          className="mt-3 text-xs uppercase tracking-[0.2em] text-ink/50"
          aria-live="polite"
        >
          Showing {resultCount} of {totalCount} products
        </p>
      )}
    </div>
  );
}
