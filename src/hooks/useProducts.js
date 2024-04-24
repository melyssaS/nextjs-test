"use client";

import { useState, createContext, useContext } from "react";
import { useLocalStorage } from "./useLocaStorage";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });

  async function loadProducts() {
    const res = await fetch("/api/products");
    const data = await res.json();

    setProducts(data);
  }
  async function getProductById(id) {
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    setSelectedProduct(data);
  }

  async function createProduct(newProduct) {
    const res = await fetch("api/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    setProducts([...products, data]);
  }

  async function updateProducts(id, updatedProduct) {
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({ ...updatedProduct, id: id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    setProducts([
      ...products.map((product) =>
        product.id === id ? { ...product, ...updatedProduct } : product
      ),
      setSelectedProduct(updatedProduct),
    ]);
  }

  async function deleteProducts(id) {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
      redirect: "follow",
    });
    const data = await res.json();
    setProducts([...products.filter((product) => product.id !== id)]);
  }
  return (
    <ProductsContext.Provider
      value={{
        loadProducts,
        createProduct,
        updateProducts,
        deleteProducts,
        getProductById,
        selectedProduct,
        setSelectedProduct,
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
