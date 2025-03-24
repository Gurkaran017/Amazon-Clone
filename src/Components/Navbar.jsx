import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import amazon from "../assets/Images/amazon1.png";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaHomeSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({isCartOpen, setCartIsOpen}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <>
      <div className="bg-[#232f3e] relative">
        <div className="flex justify-between px-5 py-2 text-white">
          <div className="flex items-center space-x-3 ">
            <RxHamburgerMenu
              onClick={() => setIsOpen(true)}
              className="mb-2 text-2xl"
            />
            <img src={amazon} className="h-[40px] w-[75px] object-cover" />
          </div>
          <div className="flex items-center space-x-2 ">
            <Link to="/signIn">
              <button className="flex items-center">
                <p className="text-sm font-medium">Sign in</p>
                <RiArrowDropRightLine />{" "}
                <MdOutlinePersonOutline className="text-3xl" />
              </button>
            </Link>
            <div>
              <IoCartOutline
              onClick={() => setCartIsOpen((prev)=>!prev)}
              className="text-[28px]" />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-[95vw]">
            <input
              className="w-full px-3 py-[10px] pr-12 rounded-lg"
              placeholder="Search Amazon.in"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#febd69] p-[10px] rounded-lg">
              <IoSearchSharp className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="text-white mb-3">
          <ul className="flex space-x-4 items-end mx-4">
            <li>
              <p className="text-xs">Shop by</p>
              <p className="text-sm font-medium">Category</p>
            </li>
            <li className="text-sm font-medium">Deals</li>
            <li className="text-sm font-medium">Sell</li>
          </ul>
        </div>
        <div className="text-white flex bg-[#37475a]">
          <button
            onClick={() => setIsLocationPopupOpen(true)}
            className="p-3 flex space-x-2"
          >
            <GrLocation className="text-xl" />
            <p className="text-[13px] font-medium flex">
              Delivering to Chandigarh 140603 - Update location
              <MdKeyboardArrowDown className="mt-[3px] text-lg" />
            </p>
          </button>
        </div>

        {/* Sidebar and Overlay */}
        {isOpen && (
          <>
            {/* Dark Overlay */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="text-white z-50 absolute top-10 left-[88vw]">
              <IoClose
                className=" text-4xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Sidebar */}
            <div className="fixed top-0 left-0 w-10/12 sm:w-[300px] h-full bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out overflow-y-auto">
              {/* Header */}

              <div className="bg-[#232f3e] relative">
                <Link to="/signIn">
                <div className="flex items-center justify-end text-gray-200 p-3">
                  <p className="text-sm font-medium">Sign in</p>
                  <RiArrowDropRightLine />{" "}
                  <MdOutlinePersonOutline className="text-3xl" />
                </div>
                </Link>
                <div className="text-gray-200 p-3 pl-5 ">
                  <h1 className="text-xl font-bold">Browse</h1>
                  <h1 className="text-3xl mt-[-8px] font-medium">Amazon</h1>
                </div>
              </div>

              {/* Sidebar Content */}
              <div>
                <div className="flex justify-between text-xl text p-4">
                  <h1 className="font-bold text-gray-700">Amazon Home</h1>
                  <LiaHomeSolid />
                </div>
                <hr className="border-2" />

                <div className=" text p-4">
                  <h1 className="font-bold text-xl py-2 text-gray-700">
                    Trending
                  </h1>
                  <ul className="mt-4 space-y-4 text-gray-700 font-medium">
                    <li>Bestsellers</li>
                    <li>New Releases</li>
                    <li>Movers and Shakers</li>
                  </ul>
                </div>
                <hr />

                <div className=" text p-4">
                  <h1 className="font-bold text-xl py-2 text-gray-700">
                    Top Categories for You
                  </h1>
                  <ul className="mt-4 space-y-4 text-gray-700 font-medium">
                    <li>Mobiles</li>
                    <li>Computers</li>
                    <li>Books</li>
                    <li>Amazon Fashion</li>
                    <li>See All Categories</li>
                  </ul>
                </div>
                <hr />

                <div className=" text p-4">
                  <h1 className="font-bold text-xl py-2 text-gray-700">
                    Programs & Features
                  </h1>
                  <ul className="mt-4 space-y-4 text-gray-700 font-medium">
                    <li>Today's Deals</li>
                    <li>Amazon Bazaar</li>
                    <li>Amazon Business</li>
                    <li>Amazon Pay</li>
                    <li>Amazon Launchpad</li>
                    <li>Handloom and Handicrafts</li>
                    <li>Amazon Saheli</li>
                    <li>Amazon Custom</li>
                    <li>Try Prime</li>
                    <li>Buy more, Save more</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {isLocationPopupOpen && (
          <>
            {/* Dark Overlay */}
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={() => setIsLocationPopupOpen(false)}
            ></div>

            {/* Popup Box */}
            <div className="fixed bottom-0 left-0 w-full bg-white p-4 z-50 rounded-t-lg shadow-lg">
              <h2 className="text-lg font-bold text-gray-700">
                Choose your location
              </h2>
              <p className="text-xs font-medium text-gray-600">
                Select a delivery location to see product availability and
                delivery options
              </p>
              <Link to="/signIn">
              <button className="w-full  mt-4 p-3 bg-[#ffd814] rounded-full text-gray-700 font-medium">
                Sign in to see your addresses
              </button>
              </Link>
              <p className="text-blue-500 mt-3 cursor-pointer flex items-center font-medium text-sm">
                <IoLocationSharp className="mr-2 text-base" />
                Enter an Indian pincode
              </p>
              <p className="text-blue-500 mt-1 cursor-pointer font-medium text-sm">
                Use my current location
              </p>
              <IoClose
                className="absolute top-2 right-2 text-2xl cursor-pointer"
                onClick={() => setIsLocationPopupOpen(false)}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
