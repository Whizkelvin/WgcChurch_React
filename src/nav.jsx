import React, { useState } from 'react';
import { TfiAlignRight } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "./assets/logo.png"


const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Messages' },
    { id: 3, text: 'Services' },
    { id: 4, text: 'Anouncement' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className=' flex justify-between items-center h-24 w-full mx-auto px-4 text-black sticky top-0 z-50 bg-blue-200'>
      {/* Logo */}
      <img className='h-16' src={Logo} alt="" />

      {/* Desktop Navigation */}
      <ul className='hidden lg:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 font-bold text-xl hover:bg-red-600 rounded-xl m-2 cursor-pointer duration-300 hover:text-white '
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block lg:hidden text-black'>
        {nav ? <IoCloseSharp  size={30} /> : <TfiAlignRight  size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-r-blue-900 bg-white ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='p-4 font-bold text-center'>Beautiful Church - Beautiful People</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-blue-300 duration-300 hover:text-black cursor-pointer border-black'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;