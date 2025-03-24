import React from "react";
import cart from "../assets/Images/cart.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="bg-white">
        <div className="w-full flex justify-center">
          <img className=" w-6/12" src={cart} />
        </div>
        <div className="flex justify-center">
          <h1 className="text-2xl font-semibold">Your Amazon Cart is empty</h1>
        </div>
        <div className="flex justify-center">
          <p className="text-sm - text-blue-700 font-medium">
            Shop today’s deals
          </p>
        </div>
        <div className="flex justify-center ">
          <Link to="/signIn">
            <button className="bg-[#ffd814] w-[95vw] rounded-full p-3 mt-5">
              Sign in to your account
            </button>
          </Link>
        </div>
        <div className="flex justify-center ">
          <Link to="/signIn">
          <button className="border  border-black w-[95vw] rounded-full p-3 mt-2">
            Sign up now
          </button>
          </Link>
        </div>

        <div className="min-h-10 bg-gray-200 mt-4"></div>
        <div className="flex justify-center ">
          <button className="bg-[#ffd814] w-[95vw] rounded-full p-3 mt-5">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
