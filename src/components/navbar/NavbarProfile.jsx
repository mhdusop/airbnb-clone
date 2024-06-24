import { useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { FaBars, FaUser } from "react-icons/fa";

export const NavbarProfile = () =>{
   const [dropdownOpen, setDropdownOpen] = useState(false);
   return (
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         <div className="flex items-center space-x-4 mx-4">
            <a href="#" className="text-sm font-normal">Jadikan rumah Anda Airbnb</a>
            <BsGlobe2 />
         </div>
         <div className="relative">
            <button 
               onClick={() => setDropdownOpen(!dropdownOpen)} 
               className="flex items-center space-x-2 focus:outline-none border hover:shadow-lg ease-out duration-300 rounded-full px-3 py-2"
            >
               <FaBars className="me-3" />
               <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                  <FaUser className="text-white"/>
               </div>
            </button>
            {dropdownOpen && (
               <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                  <a href="#" className="block px-4 text-sm py-2 text-gray-700 hover:bg-gray-100">Daftar</a>
                  <a href="#" className="block px-4 text-sm py-2 text-gray-700 hover:bg-gray-100">Masuk</a>
                  <a href="#" className="block px-4 text-sm py-2 text-gray-700 hover:bg-gray-100">Jadikan rumah Anda Airbnb</a>
                  <a href="#" className="block px-4 text-sm py-2 text-gray-700 hover:bg-gray-100">Pusat Bantuan</a>
               </div>
            )}
         </div>
    </div>
);
}