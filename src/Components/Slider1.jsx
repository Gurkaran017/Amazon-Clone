import React, { useState, useEffect, useRef } from "react";
import slider1Img1 from "../assets/Images/slider1Img1.jpg";
import slider1Img2 from "../assets/Images/slider1Img2.jpg";
import slider1Img3 from "../assets/Images/slider1Img3.jpg";
import slider1Img4 from "../assets/Images/slider1Img4.jpg";
import slider1Img5 from "../assets/Images/slider1Img5.jpg";

const images = [slider1Img1, slider1Img2, slider1Img3, slider1Img4, slider1Img5];

const Slider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(true);
  const touchStartX = useRef(null);
  const sliderRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    if (!isSliding) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isSliding, currentIndex]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSliding(false); // Stop auto-slide when user interacts
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // Swipe Left (Next Slide)
      nextSlide();
    } else if (diff < -50) {
      // Swipe Right (Previous Slide)
      prevSlide();
    }

    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image Slider with Smooth Transition */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
      <div key={index} className="relative w-full h-[350px] flex-shrink-0">
        <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full" />
        {/* Fading Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-gray-100 to-gray-200 opacity-90"></div>
      </div>
    ))}
      </div>

      {/* Dots Indicator Inside Image */}
      <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 border border-gray-700 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider1;
