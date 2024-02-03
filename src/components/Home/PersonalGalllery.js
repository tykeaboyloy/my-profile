import Image from "next/image";
import PropTypes from "prop-types";
const PersonalGalery = ({ images }) => {
  const imageClass = "rounded-2xl p-2 transform w-44 sm:w-64 object-cover";
  return (
    <div className="flex overflow-hidden py-5 space-x-5 md:space-x-12 sm:-mx-8  justify-center md:-mx-12 bg-transparent">
      {images.map((img, index) => {
        return (
          <Image
            key={index}
            alt="Personal Gallery"
            className={`${imageClass} ${
              (index + 1) % 2 == 0 ? "-rotate-3" : "rotate-3"
            }`}
            src={img}
          />
        );
      })}
      <div className=" relative bg-[#212121] w-full h-full"></div>
    </div>
  );
};

PersonalGalery.propTypes = {
  images: PropTypes.array,
};

export default PersonalGalery;
