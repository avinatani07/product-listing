/**
 * Centralized API configuration.
 * All API base URLs and endpoint builders live here.
 */

const API_BASE_URL = "https://fakestoreapi.com";

export const apiConfig = {
  baseUrl: API_BASE_URL,
  endpoints: {
    /** Fetch all products */
    products: `${API_BASE_URL}/products`,
    /** Fetch a single product by ID */
    product: (id: number) => `${API_BASE_URL}/products/${id}`,
    /** Fetch all categories */
    categories: `${API_BASE_URL}/products/categories`,
    /** Fetch products by category */
    productsByCategory: (category: string) =>
      `${API_BASE_URL}/products/category/${category}`,
  },
} as const;
