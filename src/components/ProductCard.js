import Link from "next/link";

import { XCircleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product, deleteProducts }) => {
  const getImage = () => {
    return product.image !== undefined && product.image !== ""
      ? product.image
      : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363";
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <Link href={`products/${product.id}/?modal=true`}>
          <button
            type="button"
            className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"
          >
            Editar
          </button>
        </Link>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={getImage()}
          alt="headphones"
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => deleteProducts(product.id)}
        >
          <XCircleIcon className="h-6 w-6 text-black"></XCircleIcon>
        </div>
      </figure>
      <p className="flex justify-between">
        <Link href={`products/${product.id}`}>
          <InformationCircleIcon className="h-6 w-6 text-black"></InformationCircleIcon>
        </Link>
        <span className="text-sm font-light">{product.name}</span>
        <span className="text-lg font-medium">${product.price}</span>
      </p>
    </div>
  );
};
export default ProductCard;
