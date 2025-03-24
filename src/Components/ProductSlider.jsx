import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductSlider({ products }) {
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
        className="cursor-pointer flex gap-6 overflow-x-scroll scroll-smooth p-4 no-scrollbar"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center min-w-[50px] snap-center">
            <img src={product.image} alt={product.name} />
            <p className="mt-2 text-xs font-medium">{product.name}</p>
          </div>
        ))}
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
  );
}
