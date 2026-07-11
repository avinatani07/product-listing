import Image from "next/image";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-square bg-zinc-50 p-4 dark:bg-zinc-800/60">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-contain p-2"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="line-clamp-2 text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-50">
          {product.title}
        </h2>

        <p className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
          {formatPrice(product.price)}
        </p>

        <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {product.description}
        </p>
      </div>
    </article>
  );
}
