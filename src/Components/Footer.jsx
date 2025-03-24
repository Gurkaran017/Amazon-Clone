import React from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const Footer = ({scrollToTop}) => {
  return (
    <>
      <div>
        <div className="flex justify-center bg-[#37475a] text-white p-2">
          <button
          onClick={scrollToTop}
          >
            <p className="flex justify-center">
              <MdOutlineArrowDropUp />
            </p>
            <p className="text-xs font-semibold">TOP OF PAGE</p>
          </button>
        </div>
        <div className="text-[14px] font-medium text-gray-200 bg-[#232f3e] flex p-5">
          <div className="w-1/2 space-y-2">
            <h1>Your Amazon.in</h1>
            <h1>Amazon Pay</h1>
            <h1>Your Lists</h1>
            <h1>Your Recently Viewed Items</h1>
            <h1>Recalls and Product Safety Alerts</h1>
            <h1>Customer Services</h1>
          </div>
          <div className="w-1/2 space-y-2">
            <h1>Your Orders</h1>
            <h1>Amazon App Download</h1>
            <h1>Your Account</h1>
            <h1>Return</h1>
            <h1>Sell</h1>
          </div>
        </div>
        <div className="bg-[#0d141e] ">
          <div className="flex justify-center p-10 text-gray-300">
            <h1 className="flex items-center">
              <HiOutlineGlobeAlt /> &nbsp; English
            </h1>
          </div>
          <div className="space-y-2 pb-10">
            <div className="flex justify-center">
              <h1 className="font-medium text-gray-300">
                Already a account? Sign In
              </h1>
            </div>
            <div className="flex justify-center">
            <div className="font-medium text-[12px] text-gray-400 flex space-x-3">
              <h1>Conditions of use</h1>
              <h1>Privacy Notice</h1>
              <h1>Internet Based Adds</h1>
            </div >
            </div>
            <div className="font-medium text-[10px] text-gray-400 flex justify-center"><h1>© 1996-2025, Amazon.com, Inc. and its affiliates</h1></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
