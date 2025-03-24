import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AmazonPay from "../assets/Images/AmazonPay.jpg";
import Recharge from "../assets/Images/Recharge.jpg";
import Rewards from "../assets/Images/Rewards.jpg";
import payBills from "../assets/Images/payBills.jpg";
import Fashion129 from "../assets/Images/Fashion129.png";
import Electronics from "../assets/Images/Electronics.jpg";
import HomeEssen from "../assets/Images/HomeEssen.jpg";
import sellAllDeals from "../assets/Images/seeAllDeals.jpg";

export default function OfferSlider({ Offers }) {
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
    <div className="relative w-full mx-auto group">
      {/* Gradient Overlay (Fades to gray at bottom 10%) */}
      <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-b from-transparent to-gray-300 pointer-events-none"></div>

      {/* Left Button */}
      <button
        className="lg:visible invisible cursor-pointer absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-70 transition-opacity duration-1000 bg-gray-300 shadow-md rounded-full p-2"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={35} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="cursor-pointer flex overflow-x-scroll scroll-smooth no-scrollbar relative"
      >
        {/* First Card Section */}
        <div className="min-w-[42%] grid grid-cols-2 gap-4 text-center bg-white p-3 rounded-md mx-2">
          <div>
            <img className="h-[50px] mx-auto" src={AmazonPay} alt="Amazon Pay" />
            <p className="text-[10px] font-medium">Amazon Pay</p>
          </div>
          <div>
            <img className="h-[50px] mx-auto" src={Recharge} alt="Recharge" />
            <p className="text-[10px] font-medium">Recharge</p>
          </div>
          <div>
            <img className="h-[50px] mx-auto" src={Rewards} alt="Rewards" />
            <p className="text-[10px] font-medium">Rewards</p>
          </div>
          <div>
            <img className="h-[50px] mx-auto" src={payBills} alt="Pay Bills" />
            <p className="text-[10px] font-medium">Pay Bills</p>
          </div>
        </div>

        {/* Second Card Section */}
        <div className="min-w-[42%] grid grid-cols-2 gap-4 text-center bg-white p-3 rounded-md">
          <div>
            <img className="h-[50px] mx-auto" src={Fashion129} alt="Fashion" />
            <p className="text-[10px] font-medium">Fashion</p>
          </div>
          <div>
            <img className="h-[50px] mx-auto" src={Electronics} alt="Electronics" />
            <p className="text-[10px] font-medium">Electronics</p>
          </div>
          <div>
            <img className="h-[50px] mx-auto" src={HomeEssen} alt="Home essentials" />
            <p className="text-[10px] font-medium">Home Essentials</p>
          </div>
          <div>
            <img className="h-[50px] mx-auto" src={sellAllDeals} alt="See all deals" />
            <p className="text-[10px] font-medium">See all deals</p>
          </div>
        </div>

        {/* Dynamic Offers */}
        {Offers.map((product, index) => (
          <div key={index} className="flex flex-col items-center min-w-[140px] w-[140px] snap-center mx-1">
            <img src={product.image} alt="Offer" className="h-[180px] w-[140px] rounded-md" />
          </div>
        ))}
      </div>

      {/* Right Button */}
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
  );
}
