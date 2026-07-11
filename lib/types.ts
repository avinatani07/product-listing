export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export type FetchProductsResult = {
  products: Product[];
  /** True when the live API failed and local JSON was used instead */
  usedFallback: boolean;
};
