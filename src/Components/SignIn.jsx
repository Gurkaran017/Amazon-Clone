import React from "react";
import amazon from "../assets/Images/amazon1.png";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import Twemoji from "react-twemoji";

const SignIn = () => {
  return (
    <>
      <div>
        <div className="bg-[#232f3e] ">
          <div className="pt-2 px-4">
            <img src={amazon} className="h-[40px] w-[75px] object-cover " />
          </div>
        </div>
        <div className="p-3 space-y-3">
          <h1 className="text-lg font-semibold">Sign in or create account</h1>
          <div>
            <h1 className="font-medium">Enter mobile number or email</h1>
            <div>
              <input className="border border-gray-500 w-[95vw] p-2 mt-1 rounded-md" />
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="bg-[#ffd814] w-[95vw] rounded-full p-3 mt-5">
              Continue
            </button>
          </div>
        </div>
        <div className="text-[13px] p-3">
          <p>
            By continuing, you agree to Amazon's{" "}
            <span className="text-blue-700 underline">Conditions Of Use</span>{" "}
            and <span className="text-blue-700 underline">Privacy Notice</span>{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <hr className="border-t border-gray-400 my-4 w-11/12" />
        </div>
        <div className="p-3 mb-7">
            <h1 className="font-medium py-1">Buying for work?</h1>
            <p  className="text-blue-700 font-medium text-[14px] ">Shop on Amazon Business</p>
        </div>
        <div className="bg-[#0d141e] ">
          <div className="flex justify-center space-x-5 p-5 text-gray-300">
            <h1 className="flex items-center">
              <HiOutlineGlobeAlt /> &nbsp; English
            </h1>
            <h1 className="flex items-center">
              <Twemoji options={{ className: "w-4 h-4 inline" }}>
                🇮🇳 <span>&nbsp;India</span>
              </Twemoji>
            </h1>
          </div>
          <div className="space-y-2 pb-10">
            <div className="flex justify-center">
              <div className="font-medium text-[12px] text-gray-400 flex space-x-3">
                <h1>Conditions of use</h1>
                <h1>Privacy Notice</h1>
                <h1>Internet Based Adds</h1>
              </div>
            </div>
            <div className="font-medium text-[10px] text-gray-400 flex justify-center">
              <h1>© 1996-2025, Amazon.com, Inc. and its affiliates</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
