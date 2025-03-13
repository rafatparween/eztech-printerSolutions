import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CartContext } from './CartContext';
import { printerProducts } from './productData';

const PrinterProductList = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div className="mt-20 p-5 flex justify-center items-center flex-col">
      <h1 className="text-teal-600 text-6xl font-bold">Our Products</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {printerProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full p-10 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-lg font-semibold text-orange-500">
                {product.price}
              </p>
              <Link
                to={`/productdetail/${product.id}`}
                className="text-blue-700 font-semibold underline text-lg"
              >
                Know More
              </Link>
              <br />
              <button
                className="bg-teal-600 px-2 py-1 rounded text-white shadow hover:bg-teal-500"
                onClick={() => {
                  if (isInCart(product.id)) {
                    alert(`Product "${product.name}" is already in the cart!`);
                  } else {
                    addToCart(product);
                  }
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PrinterProductList;
