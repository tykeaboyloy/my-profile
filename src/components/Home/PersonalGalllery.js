"use client";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

const PersonalGalery = ({ images }) => {
  const scrollRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageClass =
    "rounded-2xl p-2 transform w-44 sm:w-64 min-w-[176px] sm:min-w-[256px] h-56 sm:h-80 object-cover group relative";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 4; // Adjust this value as needed
      setIsLoaded(true);
    }
  }, []);
  return (
    <div
      ref={scrollRef}
      className={`flex overflow-x-scroll py-5 space-x-5 md:space-x-12 sm:-mx-8 md:-mx-14 my-3 bg-transparent justify-start ${
        isLoaded ? "" : "invisible"
      }`}
    >
      {images.map((img, index) => (
        <div className="group relative" key={index}>
          <div
            className={`${imageClass} ${
              (index + 1) % 2 == 0 ? "-rotate-3" : "rotate-3"
            } group-hover:blur-sm`}
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="text-center font-bold hidden group-hover:flex absolute inset-0 bg-opacity-50 text-white items-center justify-center p-1">
            {img.desc}
          </div>
        </div>
      ))}
    </div>
  );
};

PersonalGalery.propTypes = {
  images: PropTypes.array,
};

export default PersonalGalery;
