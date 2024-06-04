// import React, { useState } from 'react';
// import './Navbar.css';
// import logo from './logo1.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//  const toggleDropdown = (menu) => {
//   setDropdownOpen((prev) => (prev === menu ? null : menu));
// };
  
//   return (
//     <>
//       <nav className="px-7 py-5 flex  ">
//         <div className="container flex gap-3  items-center">
          
//             <div>
//               <img src={logo} className="w-full h-8 md:h-16 rounded-md md:px-10 " alt="Logo" />
//             </div>
          
//           <div className="hidden md:flex md:gap-3 items-center ">

            
//             <div className="relative group text-white hover:text-yellow-300 font-semibold text-xl">
//   SuperMinds
//   <div className="absolute hidden font-normal text-lg group-hover:block text-black bg-semi-transparent w-[400px] p-4 mt-2 rounded shadow-2xl">
//     <span className=' font-semibold'>For Undergraduates:</span>
//     <br/>
//     Embark on your academic journey with UltraAura, where we provide a diverse range of undergraduate programs tailored to equip you with the knowledge and skills necessary for success. Our interactive courses and experienced faculty ensure you gain a solid foundation and practical insights to excel in your chosen field.
//   </div>
// </div>

// <div className="relative group text-white hover:text-yellow-300 font-semibold text-xl">
//   UniqueMinds
//   <div className="absolute hidden font-normal text-lg group-hover:block text-black bg-semi-transparent w-[400px] p-4 mt-2 rounded shadow-2xl">
//     <span className=' font-semibold'>For Graduates:</span>
//   <br/>
//   Advance your expertise and career prospects with UltraAura's graduate programs. Designed for in-depth learning and professional growth, our courses offer advanced theories, practical applications, and research opportunities, all guided by industry-leading experts. Elevate your qualifications and open doors to new career opportunities.
//   </div>
// </div>
// <div className="relative group text-white hover:text-yellow-300 font-semibold text-xl">
//   MasterMinds
//   <div className="absolute hidden font-normal text-lg group-hover:block text-black bg-semi-transparent w-[400px] p-4 mt-2 rounded shadow-2xl">
//     <span className=' font-semibold'>For Professionals:</span>
//   <br/>
//   Stay competitive in today’s fast-paced job market with UltraAura’s professional development courses. Our flexible, career-oriented programs are designed to fit your busy schedule, allowing you to upgrade your skills, acquire new certifications, and stay ahead in your field without compromising your work-life balance.  </div>
// </div>
// <div className="relative group text-white hover:text-yellow-300 font-semibold text-xl">
//   CreativeMinds
//   <div className="absolute hidden font-normal text-lg group-hover:block text-black bg-semi-transparent w-[400px] p-4 mt-2 rounded shadow-2xl">
//     <span className=' font-semibold'>For Home Services:</span>
//   <br/>
//   Master your trade with UltraAura’s specialized courses for home services professionals. Whether you're an electrician, plumber, or other skilled tradesperson, our practical training and certification programs are crafted to enhance your expertise, ensure compliance with industry standards, and boost your career growth in the home services sector.  </div>
// </div>

            

//             <div className="relative">
//               <input type="search" placeholder="Search Courses" className="bg-white border-2 rounded-full px-3 py-3 pl-10" />
//               <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M10 2a8 8 0 106.32 13.906l4.387 4.386a1 1 0 01-1.414 1.415l-4.386-4.387A8 8 0 1010 2zM4 10a6 6 0 1111.5 3.134A8.038 8.038 0 0010 16a8.038 8.038 0 00-4.5-2.866A6 6 0 014 10z" clipRule="evenodd"></path>
//               </svg>
//             </div>

            
            

//             <div className="flex gap-2" id='navicons'>
//               <i className="fa-solid fa-user  px-3 py-3 rounded-full text-white hover:bg-orange-600 hover:border-orange-600 "></i>
//               <i className="fa-solid fa-bag-shopping px-3  hover:bg-orange-600 py-3 rounded-full hover:border-orange-600 text-white "></i>
//             </div>
//           </div>
//           <button className="md:hidden" onClick={toggleMenu}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
//             </svg>
//           </button>

//           <div className="hidden md:block">
//               <button onClick={() => toggleDropdown('pages')} className="text-white hover:text-yellow-300 text-xl font-semibold">
//                 More<i className="fa fa-caret-down p-2"></i>
//               </button>
//               {dropdownOpen === 'pages' && (
//                 <div className=" absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
                  
//                   <div className="">
//                     <button onClick={() => toggleDropdown('home1')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
//                       Home<i className="fa fa-caret-down p-2"></i>
//                     </button>
//                     {dropdownOpen === 'home1' && (
//                       <div className="  mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-30">
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home Style 1</a>
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home Style 2</a>
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home Style 3</a>
//                       </div>
//                     )}
//                   </div>
//                   <div className="relative">
//                     <button onClick={() => toggleDropdown('instructor')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
//                       Instructor<i className="fa fa-caret-down p-2"></i>
//                     </button>
//                     {dropdownOpen === 'instructor' && (
//                       <div className="absolute left-full top-0 mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Instructor</a>
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Instructor profile</a>
                        
//                       </div>
//                     )}
//                   </div>
//                   <div className="relative">
//                     <button onClick={() => toggleDropdown('blog')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
//                       Blog<i className="fa fa-caret-down p-2"></i>
//                     </button>
//                     {dropdownOpen === 'blog' && (
//                       <div className="absolute left-full top-0 mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Course Grid</a>
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Course List</a>
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Course Details</a>
//                       </div>
//                     )}
//                   </div>
//                   <div className="relative">
//                     <button onClick={() => toggleDropdown('courses')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
//                       Courses<i className="fa fa-caret-down p-2"></i>
//                     </button>
//                     {dropdownOpen === 'courses' && (
//                       <div className="absolute left-full top-0 mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog Sidebar</a>
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog Grid</a>
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog Masonry</a>
//                         <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog Details</a>
//                       </div>
//                     )}
//                   </div>
                 
//                 </div>
//               )}
//             </div>
//         </div>
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="relative">
//               <button onClick={() => toggleDropdown('home')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
//                 Home<i className="fa fa-caret-down p-2"></i>
//               </button>
//               {dropdownOpen === 'home' && (
//                 <div className="bg-gray-800">
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Home Style 1</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Home Style 2</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Home Style 3</a>
//                 </div>
//               )}
//             </div>
//             <div className="relative">
//               <button onClick={() => toggleDropdown('pages')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
//                 Pages<i className="fa fa-caret-down p-2"></i>
//               </button>
//               {dropdownOpen === 'pages' && (
//                 <div className="bg-gray-800">
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">About</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Contact</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Checkout</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">FAQ</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Sign In</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Register</a>
//                 </div>
//               )}
//             </div>
//             <div className="relative">
//               <button onClick={() => toggleDropdown('instructor')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
//                 Instructor<i className="fa fa-caret-down p-2"></i>
//               </button>
//               {dropdownOpen === 'instructor' && (
//                 <div className="bg-gray-800">
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Instructor</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Instructor Profile</a>
//                 </div>
//               )}
//             </div>
//             <div className="relative">
//               <button onClick={() => toggleDropdown('courses')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
//                 Courses<i className="fa fa-caret-down p-2"></i>
//               </button>
//               {dropdownOpen === 'courses' && (
//                 <div className="bg-gray-800">
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Course Grid</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Course List</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Course Details</a>
//                 </div>
//               )}
//             </div>
//             <div className="relative">
//               <button onClick={() => toggleDropdown('blog')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
//                 Blog<i className="fa fa-caret-down p-2"></i>
//               </button>
//               {dropdownOpen === 'blog' && (
//                 <div className="bg-gray-800">
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Blog Sidebar</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Blog Grid</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Blog Masonry</a>
//                   <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Blog Details</a>
//                 </div>
//               )}
//             </div>
//                       </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    level1: null,
    level2: null,
    level3: null,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu, level) => {
    setDropdowns((prev) => ({
      ...prev,
      [level]: prev[level] === menu ? null : menu,
    }));
  };

  return (
    <>
      <nav className="px-7 py-5 flex">
        <div className="container flex gap-3 items-center justify-between">
          <div>
            <img src={logo} className="w-full h-8 md:h-16 rounded-md md:px-10" alt="Logo" />
          </div>
          <div className="hidden md:flex md:gap-3 items-center">
            <div className="relative group text-white hover:text-yellow-300 font-semibold text-xl">
              SuperMinds
              <div className="absolute hidden font-normal text-lg group-hover:block text-black bg-semi-transparent w-[400px] p-4 mt-2 rounded shadow-2xl">
                <span className="font-semibold">For Undergraduates:</span>
                <br />
                Embark on your academic journey with UltraAura, where we provide a diverse range of undergraduate programs tailored to equip you with the knowledge and skills necessary for success. Our interactive courses and experienced faculty ensure you gain a solid foundation and practical insights to excel in your chosen field.
              </div>
            </div>
            <div className="relative group text-white hover:text-yellow-300 font-semibold text-xl">
              UniqueMinds
              <div className="absolute hidden font-normal text-lg group-hover:block text-black bg-semi-transparent w-[400px] p-4 mt-2 rounded shadow-2xl">
                <span className="font-semibold">For Graduates:</span>
                <br />
                Advance your expertise and career prospects with UltraAura's graduate programs. Designed for in-depth learning and professional growth, our courses offer advanced theories, practical applications, and research opportunities, all guided by industry-leading experts. Elevate your qualifications and open doors to new career opportunities.
              </div>
            </div>
            <div className="relative group text-white hover:text-yellow-300 font-semibold text-xl">
              MasterMinds
              <div className="absolute hidden font-normal text-lg group-hover:block text-black bg-semi-transparent w-[400px] p-4 mt-2 rounded shadow-2xl">
                <span className="font-semibold">For Professionals:</span>
                <br />
                Stay competitive in today’s fast-paced job market with UltraAura’s professional development courses. Our flexible, career-oriented programs are designed to fit your busy schedule, allowing you to upgrade your skills, acquire new certifications, and stay ahead in your field without compromising your work-life balance.
              </div>
            </div>
            <div className="relative group text-white hover:text-yellow-300 font-semibold text-xl">
              CreativeMinds
              <div className="absolute hidden font-normal text-lg group-hover:block text-black bg-semi-transparent w-[400px] p-4 mt-2 rounded shadow-2xl">
                <span className="font-semibold">For Home Services:</span>
                <br />
                Master your trade with UltraAura’s specialized courses for home services professionals. Whether you're an electrician, plumber, or other skilled tradesperson, our practical training and certification programs are crafted to enhance your expertise, ensure compliance with industry standards, and boost your career growth in the home services sector.
              </div>
            </div>

            <div className="relative">
              <input type="search" placeholder="Search Courses" className="bg-white border-2 rounded-full px-3 py-3 pl-10" />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 2a8 8 0 106.32 13.906l4.387 4.386a1 1 0 01-1.414 1.415l-4.386-4.387A8 8 0 1010 2zM4 10a6 6 0 1111.5 3.134A8.038 8.038 0 0010 16a8.038 8.038 0 00-4.5-2.866A6 6 0 014 10z" clipRule="evenodd"></path>
              </svg>
            </div>

            <div className="flex gap-2" id="navicons">
              <i className="fa-solid fa-user px-3 py-3 rounded-full text-white hover:bg-orange-600 hover:border-orange-600"></i>
              <i className="fa-solid fa-bag-shopping px-3 hover:bg-orange-600 py-3 rounded-full hover:border-orange-600 text-white"></i>
            </div>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
          <div className="hidden md:block relative">
        <button onClick={() => toggleDropdown('pages', 'level1')} className="text-white hover:text-yellow-300 text-xl font-semibold">
          More<i className="fa fa-caret-down p-2"></i>
        </button>
        {dropdowns.level1 === 'pages' && (
          <div className="absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
            <div>
              <button onClick={() => toggleDropdown('home1', 'level2')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                Home<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdowns.level2 === 'home1' && (
                <div className="mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-30">
                  <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home Style 1</a>
                  <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home Style 2</a>
                  <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home Style 3</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('instructor', 'level2')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                Instructor<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdowns.level2 === 'instructor' && (
                <div className=" mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
                  <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Instructor</a>
                  <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Instructor profile</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('blog', 'level2')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
               Course<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdowns.level2 === 'blog' && (
                <div className="mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
                  <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Course Grid</a>
                  <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Course List</a>
                  <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Course Details</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('courses', 'level2')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                Blog<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdowns.level2 === 'courses' && (
                <div className="mt-0 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
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
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col justify-between ">
            <div className="relative">
              <button onClick={() => toggleDropdown('home', 'level1')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
                Home<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdowns.level1 === 'home' && (
                <div className="bg-gray-800">
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Home Style 1</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Home Style 2</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Home Style 3</a>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button onClick={() => toggleDropdown('instructor', 'level1')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
                Instructor<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdowns.level1 === 'instructor' && (
                <div className="bg-gray-800">
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Instructor</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Instructor Profile</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('courses', 'level1')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
                Courses<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdowns.level1 === 'courses' && (
                <div className="bg-gray-800">
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Course Grid</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Course List</a>
                  <a href="/" className="block px-4 py-2 text-white hover:bg-blue-700">Course Details</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('blog', 'level1')} className="block text-white hover:bg-blue-700 p-2 w-full text-left">
                Blog<i className="fa fa-caret-down p-2"></i>
              </button>
              {dropdowns.level1 === 'blog' && (
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