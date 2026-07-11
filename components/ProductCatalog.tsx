"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchProducts } from "@/lib/products";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";
import SearchBox from "@/components/SearchBox";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import EmptyState from "@/components/EmptyState";

type Status = "loading" | "success" | "error";

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [usedFallback, setUsedFallback] = useState(false);
  const [query, setQuery] = useState("");

  const loadProducts = useCallback(async () => {
    setStatus("loading");
    setErrorMessage(undefined);

    try {
      const result = await fetchProducts();
      setProducts(result.products);
      setUsedFallback(result.usedFallback);
      setStatus("success");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to load products right now.";
      setErrorMessage(message);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return products;
    return products.filter((p) => p.title.toLowerCase().includes(trimmed));
  }, [products, query]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-10 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
          The House Catalog
        </p>
        <h1 className="mt-3 font-serif text-4xl font-medium tracking-wide text-ink sm:text-5xl">
          The Collection
        </h1>
        <div className="mx-auto mt-4 h-px w-16 bg-gold" aria-hidden />
        <p className="mt-4 text-sm text-ink/60">
          Browse products from the Fake Store API. Search filters titles on
          this page.
        </p>
      </header>

      {status === "loading" && <LoadingState />}

      {status === "error" && (
        <ErrorState message={errorMessage} onRetry={loadProducts} />
      )}

      {status === "success" && (
        <>
          <div className="mb-8 flex flex-col items-center text-center">
            <SearchBox
              value={query}
              onChange={setQuery}
              resultCount={filtered.length}
              totalCount={products.length}
            />
            {usedFallback && (
              <p className="mt-2 text-xs text-gold-muted">
                Live API was unavailable — showing a local data snapshot.
              </p>
            )}
          </div>

          {filtered.length === 0 ? (
            <EmptyState query={query.trim()} onClear={() => setQuery("")} />
          ) : (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <li key={product.id} className="min-w-0">
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
