import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuLevel, setMenuLevel] = useState("main");
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [desktopWineOpen, setDesktopWineOpen] = useState(false);

  const closeAll = () => {
    setMenuLevel("main");
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col p-4 md:flex-row bg-[#526534] justify-between items-center text-white">
        <div className="mb-2 md:mb-0">
          <p>
            <i className="fa-solid fa-location-dot"></i>{" "}
            158 Enterprise Road, Highlands, Harare, Zimbabwe
          </p>
        </div>
        <div className="flex space-x-4 mb-2 md:mb-0">
          <a href="tel:(024)2497768" className="hover:underline">
            <p>
              <i className="fa-solid fa-phone"></i> (024) 2497768
            </p>
          </a>
          <a href="tel:+263772336224" className="hover:underline">
            <p>
              <i className="fa-solid fa-phone"></i> 0772 336 224
            </p>
          </a>
        </div>
        <div className="mb-2 md:mb-0">
          <a href="mailto:bookings@khayanyama.com" className="hover:underline">
            <p>
              <i className="fa-regular fa-envelope"></i>{" "}
              bookings@khayanyama.com
            </p>
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <img
          src="/images/logo.jpg"
          alt="Logo"
          className="h-20 w-auto object-contain"
        />
      </div>

      <nav className="bg-[#526534] text-white relative z-50">
        {/* desktop */}
        <ul className="hidden md:flex container mx-auto justify-center space-x-6 p-4">
          <li>
            <Link to="/" className="uppercase hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="uppercase hover:text-gray-300">
              About
            </Link>
          </li>
          <li className="relative">
            <li
              onClick={() => {
                setDesktopMenuOpen(!desktopMenuOpen);
                if (!desktopMenuOpen) setDesktopWineOpen(false);
              }}
              className="flex items-center uppercase hover:text-gray-300"
            >
              Menu{" "}
              {desktopMenuOpen ? (
                <ChevronUp size={16} className="ml-1" />
              ) : (
                <ChevronDown size={16} className="ml-1" />
              )}
            </li>
            {desktopMenuOpen && (
              <ul className="absolute bg-[#526534] top-full left-0 mt-1 w-48 z-50">
                {["Starters","Salads","Mains","Desserts","Cocktails"].map((item) => (
                  <li key={item} className="p-1">
                    <Link
                      to={`/${item}`}
                      className="block uppercase py-1 hover:bg-white hover:text-[#526534]"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <li className="relative p-1">
                  <li
                    onClick={() => setDesktopWineOpen(!desktopWineOpen)}
                    className="flex items-center w-full text-left uppercase py-1 hover:bg-white hover:text-[#526534]"
                  >
                    Wine{" "}
                    {desktopWineOpen ? (
                      <ChevronUp size={16} className="ml-1" />
                    ) : (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </li>
                  {desktopWineOpen && (
                    <ul className="absolute bg-[#526534] top-full left-0 mt-1 w-48">
                      {["Red","White","Methode","Imported"].map((w) => (
                        <li key={w} className="p-1">
                          <Link
                            to={`/${w}`}
                            className="block uppercase py-1 hover:bg-white hover:text-[#526534]"
                          >
                            {w}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="p-1">
                  <Link
                    to="/Barmenu"
                    className="block uppercase py-1 hover:bg-white hover:text-[#526534]"
                  >
                    Bar Menu
                  </Link>
                </li>
                <li className="p-1">
                  <Link
                    to="/Contact"
                    className="block uppercase py-1 hover:bg-white hover:text-[#526534]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/Contact" className="uppercase hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* mobile */}
<div className="md:hidden bg-[#526534] w-full h-16 relative">
  <button
    className="p-4 py-2"
    onClick={() => {
      setIsMenuOpen(!isMenuOpen);
      if (!isMenuOpen) setMenuLevel("main");
    }}
  >
    {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
  </button>

  <div
    className={`fixed top-0 left-0 h-full w-64 bg-[#526534] transform transition-transform duration-300 z-40 ${
      isMenuOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
            {menuLevel === "main" && (
              <ul className="pt-16 space-y-2 px-4">
                <li>
                  <Link to="/" onClick={closeAll} className="uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" onClick={closeAll} className="uppercase">
                    About
                  </Link>
                </li>
                <li>
                  <li
                    onClick={() => setMenuLevel("sub")}
                    className="uppercase w-full text-left"
                  >
                    Menu
                  </li>
                </li>
                <li>
                  <Link to="/Contact" onClick={closeAll} className="uppercase">
                    Contact
                  </Link>
                </li>
              </ul>
            )}

            {menuLevel === "sub" && (
              <div className="pt-16 px-4">
                <button
                  className="flex items-center mb-2"
                  onClick={() => setMenuLevel("main")}
                >
                  <ArrowLeft size={20} />
                  <span className="ml-2">Back</span>
                </button>
                <ul className="space-y-2">
                  {["Starters","Salads","Mains","Desserts","Cocktails"].map((item) => (
                    <li key={item}>
                      <Link
                        to={`/${item}`}
                        onClick={closeAll}
                        className="uppercase block"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <li
                      onClick={() => setMenuLevel("wine")}
                      className="uppercase w-full text-left"
                    >
                      Wine
                    </li>
                  </li>
                  <li>
                    <Link to="/Barmenu" onClick={closeAll} className="uppercase block">
                      Bar Menu
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {menuLevel === "wine" && (
              <div className="pt-16 px-4">
                <button
                  className="flex items-center mb-2"
                  onClick={() => setMenuLevel("sub")}
                >
                  <ArrowLeft size={20} />
                  <span className="ml-2">Back</span>
                </button>
                <ul className="space-y-2">
                  {["Red","White","Methode","Imported"].map((w) => (
                    <li key={w}>
                      <Link
                        to={`/${w}`}
                        onClick={closeAll}
                        className="uppercase block"
                      >
                        {w}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="absolute bottom-4 w-full flex flex-col items-center">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="h-12 w-auto mb-1"
              />
              <span className="text-xl font-thin font-handwriting text-opacity-75"> Khaya Nyama Wombles</span>


            </div>
          </div>

          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-30"
              onClick={closeAll}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
