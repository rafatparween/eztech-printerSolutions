import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="mt-20 p-5 bg-gray-100 flex">
      <div className="w-3/4 pr-8">
        <h1 className="text-3xl font-bold mb-5">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-lg font-semibold text-orange-500">
                    Price: {item.price} x {item.quantity}
                  </p>
                  <div className="mt-2">
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-1/2 bg-teal-100 rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Billing Information</h2>
        <form className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">Name:</label>
            <input
              type="text"
              className="border-2 border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">Email:</label>
            <input
              type="email"
              className="border-2 border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">Address:</label>
            <input
              type="text"
              className="border-2 border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">City:</label>
            <input
              type="text"
              className="border-2 border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-gray-700">Zip Code:</label>
            <input
              type="text"
              className="border-2 border-gray-300 px-3 py-1 rounded-md w-full focus:outline-none focus:border-teal-500"
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-500 focus:outline-none"
            >
              Submit Order
            </button>
          </div>
        </form>
        <div className="mt-4">
          <p className="text-xl font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
