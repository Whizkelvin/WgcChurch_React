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
    { id: '#Home', text: 'Home' },
    { id: '#Messages', text: 'Messages' },
    { id: '#Services', text: 'Services' },
    { id: '#Anouncement', text: 'Anouncement' },
    { id: '#Contact', text: 'Contact' },
  ];

  return (
    <div className=' flex justify-between items-center h-[75px] w-full mx-auto px-4 text-black sticky top-0 z-50 bg-blue-200'>
      {/* Logo */}
     <a href="#Home"> <img  className='h-24' src={Logo} alt="" /></a>

      {/* Desktop Navigation */}
      <ul className='hidden lg:flex'>
        {navItems.map(item => (<a href={item.id}>
          <li
            key={item.id}
            className='p-4 font-bold text-xl hover:bg-red-600 hover:duration-500 hover:ease-in-out   rounded-xl m-2 cursor-pointer duration-300 hover:text-white '
          >
            {item.text}
          </li></a>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block lg:hidden text-black mr-4'>
        {nav ? <IoCloseSharp  size={30} /> : <TfiAlignRight  size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav ? 'absolute top-16 left-0  bg-blue-200  w-full lg:hidden' : ' hidden'
            
        } onClick={handleNav}
      >
        {/* Mobile Logo */}
        <h1 className='p-4 font-bold font-serif text-center text-lg text-red-600'>Beautiful Church - Beautiful People</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => ( <a href={item.id}>
          <li
            key={item.id}
            className='p-4 font-semibold border-b  hover:bg-blue-300 duration-300 hover:text-black cursor-pointer border-black text-center mb-3'
          >
            {item.text}
          </li></a>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;