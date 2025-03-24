import React from "react";
import specs1 from "../assets/Images/specs1.jpg";
import specs2 from "../assets/Images/specs2.jpg";
import specs3 from "../assets/Images/specs3.jpg";
import specs4 from "../assets/Images/specs4.jpg";
import specs5 from "../assets/Images/specs5.jpg";
import specs6 from "../assets/Images/specs6.jpg";
import specs7 from "../assets/Images/specs7.jpg";
import specs8 from "../assets/Images/specs8.jpg";
import specs9 from "../assets/Images/specs9.jpg";
import red1 from "../assets/Images/red1.jpg";
import red2 from "../assets/Images/red2.jpg";
import red3 from "../assets/Images/red3.jpg";
import red4 from "../assets/Images/red4.jpg";
import red5 from "../assets/Images/red5.jpg";
import red6 from "../assets/Images/red6.jpg";
import red7 from "../assets/Images/red7.jpg";
import red8 from "../assets/Images/red8.jpg";
import white1 from "../assets/Images/white1.jpg";
import white2 from "../assets/Images/white2.jpg";
import white3 from "../assets/Images/white3.jpg";
import white4 from "../assets/Images/white4.jpg";
import white5 from "../assets/Images/white5.jpg";
import white6 from "../assets/Images/white6.jpg";
import white7 from "../assets/Images/white7.jpg";
import white8 from "../assets/Images/white8.jpg";
import white9 from "../assets/Images/white9.jpg";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import product1 from "../assets/Images/product1.jpg";
import product2 from "../assets/Images/product2.jpg";
import product3 from "../assets/Images/product3.jpg";
import product4 from "../assets/Images/product4.jpg";
import product5 from "../assets/Images/product5.jpg";
import product6 from "../assets/Images/product6.jpg";
import product7 from "../assets/Images/product7.jpg";
import product8 from "../assets/Images/product8.jpg";
import product9 from "../assets/Images/product9.jpg";
import product10 from "../assets/Images/product10.jpg";

const Base = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -200 : 200, // Adjust scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div>
        <div className="bg-white mb-1">
          <div className="flex justify-center">
            <h1 className="font-semibold text-lg w-11/12 p-1">
              Under ₹350 | Bestselling eyewear from Small Businesses
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4 m-3">
              <img src={specs1} />
              <img src={specs2} />
              <img src={specs3} />
              <img src={specs4} />
              <img src={specs5} />
              <img src={specs6} />
              <img src={specs7} />
              <img src={specs8} />
              <img src={specs9} />
            </div>
          </div>
          <button className="text-blue-500  mx-3">See More</button>
        </div>

        <div className="bg-white mb-1">
          <div className="flex justify-center">
            <h1 className="font-semibold text-lg w-11/12 p-1">
              Curated stores for you
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 m-3">
              <div>
                <img src={red1} />
                <p>Women's westenwear | Starting ₹99 </p>
              </div>
              <div>
                <img src={red2} />
                <p>Men's t-shirt | Starting ₹99 </p>
              </div>
              <div>
                <img src={red3} />
                <p>Home decor | Starting ₹79 </p>
              </div>
              <div>
                <img src={red4} />
                <p>Mobile accessories | Starting ₹99 </p>
              </div>
              <div>
                <img src={red5} />
                <p>Kitchen essentials | Starting ₹299 </p>
              </div>
              <div>
                <img src={red6} />
                <p>Kids' wear | Starting ₹79 </p>
              </div>
              <div>
                <img src={red7} />
                <p>Watches, handbags & more | Starting ₹99 </p>
              </div>
              <div>
                <img src={red8} />
                <p>Plush toys | Starting ₹99 </p>
              </div>
            </div>
          </div>
          <button className="text-blue-500 mx-3">See More</button>
        </div>

        <div className="bg-white mb-1">
          <div className="flex justify-center">
            <h1 className="font-semibold text-lg w-11/12 p-1">
              Up to 60% off | Curated kitchen products | Amazon Launchpad
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4 m-3">
              <img src={white1} />
              <img src={white2} />
              <img src={white3} />
              <img src={white4} />
              <img src={white5} />
              <img src={white6} />
              <img src={white7} />
              <img src={white8} />
              <img src={white9} />
            </div>
          </div>
          <button className="text-blue-500  mx-3">See More</button>
        </div>

        <div className="bg-white mb-1">
          <div className="flex justify-center">
            <h1 className="font-semibold text-lg w-11/12 p-1">
              Discover products for you
            </h1>
          </div>

          <div className="relative w-full mx-auto group bg-white">
            {/* Left Button (Hidden by Default, Visible on Hover) */}
            <button
              className="lg:visible invisible cursor-pointer absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-1000 bg-gray-300 shadow-md rounded-full p-2"
              onClick={() => scroll("left")}
            >
              <ChevronLeft size={35} />
            </button>

            {/* Slider */}
            <div
              ref={sliderRef}
              className="cursor-pointer flex gap-6 overflow-x-scroll scroll-smooth px-4 py-2 no-scrollbar"
              style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE/Edge
              }}
            >
              <div className="flex space-x-2 text-sm min-w-max">
                <button className="px-3 py-1 border border-gray-300 rounded-lg flex">
                  Categories
                  <MdKeyboardArrowDown className="mt-[3px] text-lg" />
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg">
                  Under ₹500
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg">
                  ₹500-₹1,000
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg">
                  ₹1000 - ₹2,000
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg">
                  ₹2,000 and above
                </button>
              </div>
            </div>

            {/* Right Button (Hidden by Default, Visible on Hover) */}
            <button
              className="lg:visible invisible cursor-pointer absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-1000 bg-gray-300 shadow-md rounded-full p-2"
              onClick={() => scroll("right")}
            >
              <ChevronRight size={35} />
            </button>

            {/* Hide scrollbar for WebKit browsers (Chrome, Safari) */}
            <style>
              {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
            </style>
          </div>

          <div className="flex justify-center bg-gray-50">
            <div className="grid text-[13px]  grid-cols-2 gap-4 m-3">
              <div>
                <img src={product1} />
                <p>Honest Amish - PURE - Fragran‥</p>
                <p >
                  <span className="text-lg font-[450]">₹1,898</span> &nbsp;
                  <span className="text-gray-500 text-md line-through">
                    ₹5,199
                  </span> &nbsp;
                  <span className="text-red-600 text-md">-63%</span>
                </p>
              </div>
              <div>
                <img src={product2} />
                <p>Ugaoo Indoor Plants for Home‥</p>
                <p >
                  <span className="text-lg font-[450]">₹1,299</span> &nbsp;
                  <span className="text-gray-500 text-md line-through">
                    ₹1,499
                  </span> &nbsp;
                  <span className="text-red-600 text-md">-13%</span>
                </p>
              </div>
              <div>
                <img src={product3} />
                <p>Voltas Mega 70 Desert Air Cool‥</p>
                <p >
                  <span className="text-lg font-[450]">₹13,990</span> &nbsp;
                  <span className="text-gray-500 text-md line-through">
                    ₹16,990
                  </span> &nbsp;
                  <span className="text-red-600 text-md">-15%</span>
                </p>
              </div>
              <div>
                <img src={product4} />
                <p>Sparx mens SF0014G Navygrey‥</p>
                <p >
                  <span className="text-lg font-[450]">₹279</span> &nbsp;
                  <span className="text-gray-500 text-md line-through">
                    ₹399
                  </span> &nbsp;
                  <span className="text-red-600 text-md">-30%</span>
                </p>
              </div>
              <div>
                <img src={product5} />
                <p>Yogabar Wholegrain Breakfast‥</p>
                <p >
                  <span className="text-lg font-[450]">₹349</span> &nbsp;
                  <span className="text-gray-500 text-md line-through">
                    ₹499
                  </span> &nbsp;
                  <span className="text-red-600 text-md">-30%</span>
                </p>
              </div>
              <div>
                <img src={product6} />
                <p>Portronics Toad 27 Wireless Mo‥ </p>
                <p >
                  <span className="text-lg font-[450]">₹449</span> &nbsp;
                  <span className="text-gray-500 text-md line-through">
                    ₹499
                  </span> &nbsp;
                  <span className="text-red-600 text-md">-10%</span>
                </p>
              </div>
              <div>
                <img src={product7} />
                <p>Vaseline Moisturizing Gel, Coco‥</p>
                <p >
                  <span className="text-lg font-[450]">₹255</span> &nbsp;
                  <span className="text-gray-500 text-md line-through">
                    ₹794
                  </span> &nbsp;
                  <span className="text-red-600 text-md">-68%</span>
                </p>
              </div>
              <div>
                <img src={product8} />
                <p>Fairy Dolls Girl's Cocktail Maxi‥</p>
                <p >
                  <span className="text-lg font-[450]">₹10,350</span> &nbsp;
                  <span className="text-gray-500 text-md line-through">
                    ₹14,999
                  </span> &nbsp;
                  <span className="text-red-600 text-md">-31%</span>
                </p>
              </div>
              <div>
                <img src={product9} />
                <p>DEEANNE LONDON Women's B‥ </p>
                <p >
                  <span className="text-lg font-[450]">₹1,499</span> &nbsp;
                  <span className="text-gray-500 text-md line-through">
                    ₹1,899
                  </span> &nbsp;
                  <span className="text-red-600 text-md">-23%</span>
                </p>
              </div>
              <div>
                <img src={product10} />
                <p>beyerdynamic Dt 770 Pro 250‥</p>
                <p >
                  <span className="text-lg font-[450]">₹4,037</span> &nbsp;
                  <span className="text-gray-500 text-md line-through">
                    ₹11,350
                  </span> &nbsp;
                  <span className="text-red-600 text-md">-64%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Base;
