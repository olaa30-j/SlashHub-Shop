"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductSliderProps {
  image: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ image }) => {
  const [sliderImages, setSliderImages] = useState<string[]>([image]); // Initialize with the first image
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);  // To track if we're on the client-side
  const mainSliderRef = useRef<Slider>(null);
  const thumbnailSliderRef = useRef<Slider>(null);

  // Initialize slider images only after the component mounts
  useEffect(() => {
    setIsClient(true);  // Set to true after the component has mounted
    const images = [
      image,
      "https://img.freepik.com/free-photo/handmade-yellow-purple-paper-shirt-isolated-white-background_23-2148125225.jpg",
      "https://img.freepik.com/free-photo/top-view-hoodie-with-tablet-beside_23-2148528029.jpg",
      "https://img.freepik.com/free-photo/hoodie-laptop-with-joystick_23-2148528057.jpg",
    ];
    setSliderImages(images);  // Update state once mounted
  }, [image]);

  // Only render component if we're on the client
  if (!isClient) {
    return null;
  }

  const mainSliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    afterChange: (index: number) => setCurrentIndex(index),
  };

  const thumbnailSliderSettings = {
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0",
    speed: 500,
    dots: false,
    afterChange: (index: number) => setCurrentIndex(index),
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    mainSliderRef.current?.slickGoTo(index);
    thumbnailSliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="mx-auto p-6">
      {/* Main Image Slider */}
      <div className="mb-8 w-full">
        <Slider ref={mainSliderRef} {...mainSliderSettings}>
          {sliderImages.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Product image ${index + 1}`}
                className="w-full bg-bannerColor h-[50vh] rounded-lg block px-[60px]"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnail Image Slider */}
      <div className="max-w-2xl mx-auto">
        <Slider ref={thumbnailSliderRef} {...thumbnailSliderSettings}>
          {sliderImages.map((img, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={`w-full px-2 cursor-pointer transition-all duration-300 ${
                currentIndex === index ? "scale-100 opacity-100" : "scale-90 opacity-60"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-[20vh] rounded-md border-2 ${
                  currentIndex === index ? "border-mainColor" : "border-transparent"
                }`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
