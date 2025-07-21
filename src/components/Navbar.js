import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header and logo */}
      <header className="bg-[#526534] text-white w-full z-40 flex flex-col sm:flex-row justify-between items-center px-4 py-4 sm:py-6">
  <div className="address text-center sm:text-left">
    <p className="text-sm sm:text-base"><i className="fa-solid fa-location-dot"></i> 158 Enterprise road, Highlands, {' '} Harare</p>
  </div>
  <div className="number text-center sm:text-left">
    <p className="text-sm sm:text-base"><a href="tel:0242497768"><i className="fas fa-phone"></i> (024) 2497768</a></p>
    <p className="text-sm sm:text-base"><a href="tel:+263772336224"><i className="fas fa-phone"></i> +263 772 336 224</a></p>
  </div>

  <div className="email text-center sm:text-left">
    <p className="text-sm sm:text-base"><a href="mailto:bookings@khayanyama.com" className="hover:underline">
      <i className="fas fa-envelope"></i> bookings@khayanyama.com
    </a></p>
  </div>


  
</header>

<div className="flex justify-center items-center p-0 m-0">
  <div className="flex justify-center items-center w-[25%] p-0 m-0">
    <img
      src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
      alt="Wombles Khaya Nyama Wombles Harare"
      className="block h-auto max-h-[100px] object-contain align-bottom"
    />
  </div>
</div>




      {/* Navbar */}
      <motion.nav

className={`text-white w-full bg-[#526534] shadow-md z-50 h-16 transition-all duration-300 ${
  isScrolled ? 'fixed top-0 left-0 w-full' : 'relative -top-0'
}`}// Adjusted for scrolling
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >

        
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-6">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/About" className="hover:text-gray-300">About</Link>
            <Menu 
              menuButton={
                <MenuButton className="hover:text-gray-300 underline focus:outline-none">
                  Menu
                </MenuButton>
              }
              transition
            >
              <MenuItem>
                <Link to="/Starters" className="hover:text-gray-700">Starters</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Salads" className="hover:text-gray-700">Salads</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Mains" className="hover:text-gray-700">Main</Link>
              </MenuItem>
              <SubMenu label="Wine">
                <MenuItem>
                  <Link to="/Red" className="hover:text-gray-700">Red Wine</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/White" className="hover:text-gray-700">White Wine</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/Methode" className="hover:text-gray-700">MÉTHODE CAP CLASSIQUE</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/Imported" className="hover:text-gray-700">Imported Wine</Link>
                </MenuItem>
              </SubMenu>
              <MenuItem>
                <Link to="/Desserts" className="hover:text-gray-700">Dessert</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Cocktails" className="hover:text-gray-700">Cocktails</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/Barmenu" className="hover:text-gray-700">Bar Menu</Link>
              </MenuItem>
            </Menu>
            <Link to="/Contact" className="hover:text-gray-300">Contact</Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex  items-center">

          <p className="text-xl -mt-6">
            <a href="https://www.facebook.com/wombleszimbabwe/" className="text-white hover:text-[#526534] hover:bg-[#fff] flex items-center justify-center">
              <i className="fab fa-facebook text-2xl mr-4 "></i> 
            </a>
          </p>
          <p className="text-xl -mt-6">
            <a href="https://www.instagram.com/wombles_zimbabwe/?hl=en" className="text-white hover:text-[#526534] hover:bg-[#fff] flex items-center justify-center ">
              <i className="fab fa-instagram text-2xl mr-4"></i> 
            </a>
          </p>
          
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          
        </div>

        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-[#526534]  py-0 text-black shadow-lg w-full fixed left-0 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
           <Link to="/" className="block px-6 text-lg py-3 hover:bg-gray-300">Home</Link>
<Link to="/About" className="block px-6 py-3 text-lg hover:bg-gray-300">About</Link>
<Menu
  menuButton={
    <MenuButton className="block px-6 py-3 hover:bg-gray-300 w-full">
      Menu
    </MenuButton>
  }
  transition
>


  <MenuItem>
    <Link to="/Starters" className="block px-6 py-3 hover:text-[#526534]">Starters</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/Salads" className="block px-6 py-3 hover:text-gray-700">Salads</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/Mains" className="block px-6 py-3 hover:text-gray-700">Main</Link>
  </MenuItem>
  <SubMenu label="Wine">
    <MenuItem>
      <Link to="/Red" className="block px-6 py-3 hover:text-gray-700">Red Wine</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/White" className="block px-6 py-3 hover:text-gray-700">White Wine</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/Methode" className="block px-6 py-3 hover:text-gray-700">MÉTHODE CAP CLASSIQUE</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/Imported" className="block px-6 py-3 hover:text-gray-700">Imported Wine</Link>
    </MenuItem>
  </SubMenu>
  <MenuItem>
    <Link to="/Desserts" className="block px-6 py-3 hover:text-gray-700">Dessert</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/Cocktails" className="block px-6 py-3 hover:text-gray-700">Cocktails</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/Barmenu" className="block px-6 py-3 hover:text-gray-700">Bar Menu</Link>
  </MenuItem>
</Menu>
<Link to="/Contact" className="block px-6 py-3 text-lg hover:bg-gray-300">Contact</Link>

          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
