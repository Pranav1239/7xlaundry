"use client";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "https://images.unsplash.com/photo-1674471361339-8289b8346cb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://example.com/image1"
    },
    {
      src: "https://images.unsplash.com/photo-1710294772664-8c6b057ce7b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://example.com/image2"
    }
  ];

  useEffect(
    () => {
      const interval = setInterval(() => {
        setCurrentIndex(
          prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)
        );
      }, 5000);

      return () => clearInterval(interval);
    },
    [images.length]
  );

  return (
    <div className="relative">
      <div className="h-[70vh]" />
      {images.map((image, index) =>
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index ===
          currentIndex
            ? "opacity-100"
            : "opacity-0"}`}
        >
          <a href={image.link}>
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Slider;
