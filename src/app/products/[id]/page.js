"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProductDetail from "@/components/ProductDetail";
import { useProducts } from "@/hooks/useProducts";

export default function Product() {
  const params = useParams();
  const { getProductById, selectedProduct } = useProducts();

  useEffect(() => {
    getProductById(params?.id);
  }, []);

  return (
    <div className="flex  flex-col  border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
      </div>
      <ProductDetail product={selectedProduct} />
    </div>
  );
}
