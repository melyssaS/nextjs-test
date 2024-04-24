"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FormField from "./FormField";
import PrimaryButton from "./PrimaryButton";
import { useProducts } from "@/hooks/useProducts";

const ProductForm = () => {
  const params = useParams();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });

  const { createProduct, selectedProduct, updateProducts } = useProducts();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params?.id) {
      updateProducts(params?.id, formData);
    } else {
      createProduct(formData);
    }
  };

  useEffect(() => {
    setFormData(selectedProduct);
  }, [selectedProduct]);

  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <div className="flex flex-wrap">
        <FormField
          id="name"
          label="Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <FormField
          id="price"
          label="Price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />
        <FormField
          id="image"
          label="Image"
          type="text"
          value={formData.image}
          onChange={handleChange}
        />
        <FormField
          id="stock"
          label="Stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
        />
      </div>
      <PrimaryButton name="Add Product" />
    </form>
  );
};

export default ProductForm;
