import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 const toggleDropdown = (menu) => {
  setDropdownOpen((prev) => (prev === menu ? null : menu));
};
  
  return (
    <>
      <nav className="px-7 py-5 flex  ">
        <div className="container flex justify-between items-center">
          <div className="flex gap-4">
            <div>
              <img src={logo} className="w-full h-16 rounded-md px-10" alt="Logo" />
            </div>
            
          </div>
          <div className="hidden md:flex md:gap-4 items-center ">

            <div className="relative">
              <button  className="text-white hover:text-gray-300 text-xl">
                Superminds
              </button>
              
            </div>
            <div className="relative">
              <button  className="text-white hover:text-gray-300 text-xl">
                Creativeminds
              </button>
              
            </div>
            <div className="relative">
              <button  className="text-white hover:text-gray-300 text-xl">
                Masterminds
              </button>
              
            </div>
            <div className="relative">
              <button  className="text-white hover:text-gray-300 text-xl">
                Uniqueminds
              </button>
              
            </div>

            <div className="">
              <button onClick={() => toggleDropdown('pages')} className="text-white hover:text-gray-300 text-xl">
                More<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdownOpen === 'pages' && (
                <div className=" absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
                  
                  <div className="">
                    <button onClick={() => toggleDropdown('home1')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                      Home<i className="fa fa-caret-down p-2"></i>
                    </button>
                    {dropdownOpen === 'home1' && (
                      <div className="  mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-30">
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home Style 1</a>
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home Style 2</a>
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home Style 3</a>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button onClick={() => toggleDropdown('instructor')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                      Instructor<i className="fa fa-caret-down p-2"></i>
                    </button>
                    {dropdownOpen === 'instructor' && (
                      <div className="absolute left-full top-0 mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Instructor</a>
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Instructor profile</a>
                        
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button onClick={() => toggleDropdown('blog')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                      Blog<i className="fa fa-caret-down p-2"></i>
                    </button>
                    {dropdownOpen === 'blog' && (
                      <div className="absolute left-full top-0 mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Course Grid</a>
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Course List</a>
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Course Details</a>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button onClick={() => toggleDropdown('courses')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                      Courses<i className="fa fa-caret-down p-2"></i>
                    </button>
                    {dropdownOpen === 'courses' && (
                      <div className="absolute left-full top-0 mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog Sidebar</a>
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog Grid</a>
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog Masonry</a>
                        <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog Details</a>
                      </div>
                    )}
                  </div>
                 
                </div>
              )}
            </div>

            <div className="relative">
              <input type="search" placeholder="Search Courses" className="bg-white border-2 rounded-full px-3 py-3 pl-10" />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 106.32 13.906l4.387 4.386a1 1 0 01-1.414 1.415l-4.386-4.387A8 8 0 1010 2zM4 10a6 6 0 1111.5 3.134A8.038 8.038 0 0010 16a8.038 8.038 0 00-4.5-2.866A6 6 0 014 10z" clipRule="evenodd"></path>
              </svg>
            </div>

            
            

            <div className="flex gap-2" id='navicons'>
              <i className="fa-solid fa-user  px-3 py-3 rounded-full text-white hover:bg-orange-600 hover:border-orange-600 "></i>
              <i className="fa-solid fa-bag-shopping px-3  hover:bg-orange-600 py-3 rounded-full hover:border-orange-600 text-white "></i>
            </div>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="relative">
              <button onClick={() => toggleDropdown('home')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
                Home<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdownOpen === 'home' && (
                <div className="bg-gray-800">
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Home Style 1</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Home Style 2</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Home Style 3</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('pages')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
                Pages<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdownOpen === 'pages' && (
                <div className="bg-gray-800">
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">About</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Contact</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Checkout</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">FAQ</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Sign In</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Register</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('instructor')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
                Instructor<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdownOpen === 'instructor' && (
                <div className="bg-gray-800">
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Instructor</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Instructor Profile</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('courses')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
                Courses<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdownOpen === 'courses' && (
                <div className="bg-gray-800">
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Course Grid</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Course List</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Course Details</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('blog')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
                Blog<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdownOpen === 'blog' && (
                <div className="bg-gray-800">
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Blog Sidebar</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Blog Grid</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Blog Masonry</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Blog Details</a>
                </div>
              )}
            </div>
                      </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;