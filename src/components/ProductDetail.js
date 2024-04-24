import { getImage } from "@/utils/image";
const ProductDetail = ({ product }) => {
  const getImage = () => {
    return product.image !== undefined && product.image !== ""
      ? product.image
      : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363";
  };

  return (
    <>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={getImage()}
          alt={product.name}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${product.price}</span>
        <span className="font-medium text-md">{product.name}</span>
      </p>
    </>
  );
};

export default ProductDetail;
