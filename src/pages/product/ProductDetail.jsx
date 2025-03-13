import React from 'react';
import { useParams } from 'react-router-dom';
import { printerProducts } from './productData';

const ProductDetail = () => {
  const { productID } = useParams();
  const singleProductDetail = printerProducts.find(
    (product) => product.id === parseInt(productID),
  );

  if (!singleProductDetail) {
    return <div className="mt-20">Product not found</div>;
  }

  const { name, price, keyFeatures, imageUrl } = singleProductDetail;

  return (
    <div className="mt-20 max-w-5xl mx-auto flex  justify-center gap-8 p-10">
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        <img src={imageUrl} alt={name} className="rounded-lg shadow-lg" />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <p className="text-lg font-semibold text-orange-500 ">{price}</p>
        <p className="text-gray-600 text-lg  mb-4 ">
          Quantity: {singleProductDetail.quantity}
        </p>
        <ul className="list-disc list-inside ">
          {keyFeatures.map((feature, index) => (
            <li key={index} className="text-base">
              {feature}
            </li>
          ))}
        </ul>

        <button className="bg-teal-600 px-2 py-1 rounded text-white  shadow hover:bg-teal-500">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
