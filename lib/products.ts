import type { FetchProductsResult, Product } from "@/lib/types";
import fallbackProducts from "@/data/products.json";

const API_URL = "https://fakestoreapi.com/products";

function isProductArray(data: unknown): data is Product[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        item &&
        typeof item === "object" &&
        typeof (item as Product).id === "number" &&
        typeof (item as Product).title === "string" &&
        typeof (item as Product).price === "number" &&
        typeof (item as Product).description === "string" &&
        typeof (item as Product).image === "string"
    )
  );
}

/**
 * Fetches products from the Fake Store API.
 * Falls back to a local JSON snapshot if the network request fails.
 */
export async function fetchProducts(): Promise<FetchProductsResult> {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data: unknown = await response.json();

    if (!isProductArray(data)) {
      throw new Error("API returned unexpected data shape");
    }

    return { products: data, usedFallback: false };
  } catch (error) {
    console.warn(
      "Fake Store API unavailable, using local JSON fallback.",
      error
    );

    const products = fallbackProducts as Product[];

    if (!products.length) {
      throw new Error("Unable to load products from API or local fallback.");
    }

    return { products, usedFallback: true };
  }
}
