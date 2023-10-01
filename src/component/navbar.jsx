import React, { useEffect } from 'react';
import  { useState } from 'react';

import { FaBars, FaSun, FaMoon } from 'react-icons/fa'; 

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };




  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDarkMode(theme === "dark");
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]("dark");
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    document.documentElement.classList[newTheme === "dark" ? "add" : "remove"]("dark");
    setDarkMode(newTheme === "dark");
  };



  
    return (
        <>
               <header className=' hidden md:flex justify-around p-5  w-full fixed top-0 left-0 bg-white z-50 dark:bg-slate-500    items-center drop-shadow-2xl '>
        <h1 className='text-2xl text-blue-500 dark:text-white dark:hover:text-gray-300 '>karem Mahmoud</h1>
            <ul className='flex items-center justify-between'>
                <li className='mr-10 dark:text-white dark:hover:text-gray-300 text-blue-500 text-xl  hover:text-blue-800'><a href="#about"> about me</a></li>
                <li className='mr-10 dark:text-white dark:hover:text-gray-300 text-blue-500 text-xl  hover:text-blue-800'><a href="#services">services</a> </li>
                <li className='mr-10 dark:text-white dark:hover:text-gray-300 text-blue-500 text-xl  hover:text-blue-800'><a href="#projects">projects</a> </li>
                <li className='mr-10 dark:text-white dark:hover:text-gray-300 text-blue-500 text-xl  hover:text-blue-800'><a href="#contact">contact</a> </li>
                <li className='mr-10 text-xl cursor-pointer ' onClick={toggleDarkMode}>
            {darkMode ? <FaSun size={22} color='gold' /> : <FaMoon size={22} color='balck' />}
          </li>
            </ul>
        </header>
        <nav className=' w-full fixed top-0 left-0 bg-white dark:bg-slate-500 z-50'>
    <header className='md:hidden flex justify-between p-5    items-center drop-shadow-2xl relative'>
      <h1 className='text-2xl dark:text-white dark:hover:text-gray-300  text-blue-500'>karem Mahmoud</h1>
      <p className='cursor-pointer ' onClick={toggleMenu}>
        <FaBars className='text-blue-500 dark:text-white dark:hover:text-gray-300' size={22} />
      </p>
      {showMenu &&(
         <ul className="absolute bottom-[-270px] flex flex-col justify-center items-start  left-0 w-full dark:bg-slate-600 bg-blue-600 p-5  z-50" >
         <li className='mt-5 text-white text-xl hover:scale-[1.1] hover:text-blue-800'><a href="#about">about me</a></li>
         <li className='mt-5 text-white text-xl hover:scale-[1.1] hover:text-blue-800'><a href="#services">services</a></li>
         <li className='mt-5 text-white text-xl hover:scale-[1.1] hover:text-blue-800'><a href="#projects">projects</a></li>
         <li className='mt-5 text-white text-xl hover:scale-[1.1] hover:text-blue-800'><a href="#contact">contact</a></li>
         <li className='mr-10 mt-5  text-xl hover:scale-105 cursor-pointer' onClick={toggleDarkMode}>
         {darkMode ? <FaSun size={22} color='gold' /> : <FaMoon size={22} color='balck' />}
          </li>
       </ul>
      )}
     
    </header>
    </nav>
        </>
    );
}

export default Navbar;