import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { LuMinus, LuPlus } from "react-icons/lu";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const calculateSubtotal = (): number => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCreateOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = user?.id;

    if (!userId) {
      toast.error("User ID not found. Please log in.");
      return;
    }

    const orderData = {
      userId,
      items: cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        thumbnail: item.thumbnail,
        quantity: item.quantity,
      })),
      total: calculateSubtotal() + 4.99,
    };

    try {
      await axios.post(
        "http://localhost:5000/api/orders/createOrder",
        orderData
      );
      toast.success("Order Created, You Are Being Redirected");
      dispatch(clearCart());
      setTimeout(() => {
        navigate("/orders");
      }, 2000);
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Error While Creating Order");
    }
  };

  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3 h-96 overflow-y-scroll">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-700">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900 ">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      Price: {item.price.toFixed(2)} £
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="cursor-pointer rounded-l bg-gray-100 py-2 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        <LuMinus size={16} />
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        value={item.quantity}
                        readOnly
                      />
                      <span
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="cursor-pointer rounded-r bg-gray-100 py-2 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        <LuPlus size={16} />
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-bold ">
                        Price: {(item.price * item.quantity).toFixed(2)} £
                      </p>
                      <svg
                        onClick={() => dispatch(removeFromCart(item.id))}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length !== 0 && (
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">
                {calculateSubtotal().toFixed(2)} £
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">4.99 £</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <p className="mb-1 text-lg font-bold">
                {(calculateSubtotal() + 4.99).toFixed(2)} £
              </p>
            </div>
            <button
              onClick={handleCreateOrder}
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            >
              Check out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
