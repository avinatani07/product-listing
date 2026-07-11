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
    <article className="group flex h-full flex-col overflow-hidden border border-hairline bg-white transition-colors duration-300 hover:border-gold">
      <div className="relative aspect-square bg-white p-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 border-t border-hairline p-5">
        <h2 className="line-clamp-2 font-serif text-lg font-semibold leading-snug text-ink">
          {product.title}
        </h2>

        <p className="text-sm font-medium uppercase tracking-[0.15em] text-green-deep">
          {formatPrice(product.price)}
        </p>

        <p className="line-clamp-3 text-sm leading-relaxed text-ink/55">
          {product.description}
        </p>
      </div>
    </article>
  );
}
