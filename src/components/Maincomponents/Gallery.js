import React from 'react';
import { Helmet } from 'react-helmet';

const Gallery = () => {
  const images = [
    { src: process.env.PUBLIC_URL + "/images/30.JPG", alt: "Fine dining atmosphere" },
    { src: process.env.PUBLIC_URL + "/images/23.JPG", alt: "Prime steak cuts" },
    { src: process.env.PUBLIC_URL + "/images/24.JPG", alt: "Elegant table setting" },
    { src: process.env.PUBLIC_URL + "/images/22.JPG", alt: "Decadent desserts" },
    { src: process.env.PUBLIC_URL + "/images/6.JPG", alt: "Delicious entrees" },
    { src: process.env.PUBLIC_URL + "/images/25.JPG", alt: "Crafted cocktails" },
    { src: process.env.PUBLIC_URL + "/images/19.JPG", alt: "Sophisticated ambiance" },
    { src: process.env.PUBLIC_URL + "/images/14.JPG", alt: "Memorable dining experience" },
    { src: process.env.PUBLIC_URL + "/images/18.JPG", alt: "Signature dishes" },
    { src: process.env.PUBLIC_URL + "/images/15.jpg", alt: "Exquisite flavors" },
    { src: process.env.PUBLIC_URL + "/images/21.JPG", alt: "Elegant interiors" },
    { src: process.env.PUBLIC_URL + "/images/30.JPG", alt: "Luxury dining setting" },
    { src: process.env.PUBLIC_URL + "/images/24.JPG", alt: "Creative plating" },
    { src: process.env.PUBLIC_URL + "/images/3.jpg", alt: "Fine dining excellence" },
    { src: process.env.PUBLIC_URL + "/images/5.jpg", alt: "Culinary artistry" },
    { src: process.env.PUBLIC_URL + "/images/11.JPG", alt: "Perfectly prepared dishes" },
    { src: process.env.PUBLIC_URL + "/images/23.JPG", alt: "Upscale steakhouse ambiance" },
    { src: process.env.PUBLIC_URL + "/images/7.JPG", alt: "Cozy dining environment" },
    { src: process.env.PUBLIC_URL + "/images/29.JPG", alt: "Celebratory meals" },
    { src: process.env.PUBLIC_URL + "/images/12.JPG", alt: "Gourmet meals" },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <Helmet>
        <meta
          name="description"
          content="Indulge in a visual feast at our upscale steakhouse restaurant gallery. Explore a collection of exquisite images showcasing the elegant ambiance, succulent cuts of prime steak, decadent desserts, and handcrafted cocktails. Immerse yourself in the luxury and sophistication of our fine dining experience. Your culinary journey awaits at Khaya Nyama Wombles."
        />
      </Helmet>
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-0">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-48 transition-transform transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
