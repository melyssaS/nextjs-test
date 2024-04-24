"use client";
import { useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ProductForm from "@/components/ProductForm";
import PrimaryButton from "@/components/PrimaryButton";
import { useProducts } from "@/hooks/useProducts";

export default function HomePage() {
  const { products, loadProducts, deleteProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <Link href="/?modal=true">
        <PrimaryButton name="Add Product" />
      </Link>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg m-4">
        {products.map((product, index) => (
          <ProductCard
            product={product}
            key={index}
            deleteProducts={deleteProducts}
          />
        ))}
      </div>
    </div>
  );
}
