import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-[#526534] py-10">
      <div className="container mx-auto text-[#fff] flex flex-wrap justify-center lg:justify-between">
        {/* Logo and Socials Section */}
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0 text-center lg:text-left">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.jpg"}
            alt="Khaya Nyama Logo"
            className="max-w-[200px] mx-auto lg:mx-0 h-auto"
          />
          <p className="text-xl mt-4">
            <a href="https://www.facebook.com/wombleszimbabwe/" className="text-white flex items-center justify-center lg:justify-start">
              <i className="fab fa-facebook text-2xl mr-2"></i> KHAYA NYAMA WOMBLES
            </a>
          </p>
          <p className="text-xl mt-2">
            <a href="https://www.instagram.com/wombles_zimbabwe/?hl=en" className="text-white flex items-center justify-center lg:justify-start">
              <i className="fab fa-instagram text-2xl mr-2"></i> wombles_zimbabwe
            </a>
          </p>
        </div>

        {/* Description and Socials Text */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 mt-7 text-xl text-center lg:text-left">
          <div className="socials" id="socials">
            <p className="mb-4">
              Wombles is a beautiful and sophisticated restaurant that offers a unique dining experience centered around a warm, welcoming community atmosphere.
            </p>
            <p>Connect with us on our social platforms</p>
          </div>
        </div>

        {/* Address Section */}
        <div className="w-full lg:w-1/3 mt-7 text-xl text-center lg:text-left">
          <div className="add" id="add">
            <h1 className="text-2xl font-bold">Address</h1>
            <p className="mt-2"><i className="fas fa-location-dot"></i> 158 Enterprise road, Highlands, Harare, Zimbabwe</p>
            <p><i className="fas fa-phone"></i> (024) 2497768</p>
            <p><i className="fas fa-phone"></i> 0772 336 224</p>
            <p><i className="far fa-envelope"></i> bookings@khayanyama.com</p>
          </div>
        </div>
      </div>

      {/* Line and Copyright Section */}
      <div className="border-t border-white my-8"></div>
      <p className="copyright-text text-center text-white text-sm mt-4">
        Khaya Nyama Wombles &copy; 2024 Websites by Patty
      </p>
    </footer>
  );
};

export default Footer;
