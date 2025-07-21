import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = [
    { src: process.env.PUBLIC_URL + "/images/1.JPG", alt: "1" },
    { src: process.env.PUBLIC_URL + "/images/20.JPG", alt: "2" },
    { src: process.env.PUBLIC_URL + "/images/22.JPG", alt: "3" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Render the current image */}
      <img
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        className="w-full h-[70vh] lg:h-[80vh] object-cover transition-opacity duration-5000 ease-in-out"
      />

      {/* Navigation buttons */}
      <button
        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-4 lg:p-5 rounded-full hover:bg-black/70 transition-all"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-4 lg:p-5 rounded-full hover:bg-black/70 transition-all"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
