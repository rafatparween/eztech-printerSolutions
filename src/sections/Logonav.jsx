
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for mobile menu

const Chatlink = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="chat-now text-lg sm:text-2xl text-[#1c85c1] cursor-pointer relative inline-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <i className="fas fa-phone-square-alt mr-2" aria-hidden="true"></i>
      <span className="text-[18px] sm:text-[24px]">Chat Now</span>
      <div
        className={`absolute bottom-[-5px] right-0 h-[4px] bg-[#1c85c1] transition-all duration-300 ease-in-out ${
          hover ? 'w-full' : 'w-0'
        }`}
      ></div>
    </div>
  );
};

const Logonav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full">
      <div className="max-w-[90.33%] xl:max-w-[1265px] mx-auto flex items-center justify-between py-4">
        
        {/* Logo on the left */}
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center">
            <img
              src="/hplogo.png"
              alt="HP Logo"
              width={53}
              height={53}
              className="w-[53px] h-[53px]"
            />
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Chatlink />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <Chatlink />
        </div>
      )}
    </nav>
  );
};

export default Logonav;





