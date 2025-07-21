import React from 'react';

const TextImageSection = () => {
  return (
    <div className="about-section flex flex-col md:flex-row justify-between items-center gap-8 p-6 md:p-12">
      {/* Left Side */}
      <div className="left-side w-full md:w-1/2 space-y-6">
        <div className="text-content">
          <h2 className="text-2xl font-bold underline mb-4">Who Are We</h2>
          <p className="text-lg text-gray-700">
            Wombles is a restaurant renowned as a fine-dining steakhouse in Harare, Zimbabwe.
            Its fascinating and colorful history of local and international culinary excellence,
            stretching back almost four decades, has made it a household name in the city.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            It is a fine dining restaurant and features an excellent menu and wine list, with prices
            commensurate with expectations from an A-list venue. At the core of the menu is a steakhouse heart,
            but with a wide selection of other dishes, including vegetarian options—making it both varied
            and interesting to folk looking for non-beef content.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
        <img
          src={process.env.PUBLIC_URL + "/images/5.jpg"}
          alt="Wombles Khaya Nyama"
          className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto"
        />
         <img
  src={process.env.PUBLIC_URL + "/images/4.jpg"}
  alt="Wombles Khaya Nyama"
  className="rounded-lg shadow-lg w-full h-auto max-w-md mx-auto block md:hidden"
/>

        </div>
      </div>

      {/* Right Side */}
      <div className="right-side w-full md:w-1/2">
  <img
    src={process.env.PUBLIC_URL + "/images/4.jpg"}
    alt="Wombles Khaya Nyama"
    className="rounded-lg shadow-lg w-full h-auto max-w-xs mx-auto"
  />
</div>

    </div>
  );
};

export default TextImageSection;
