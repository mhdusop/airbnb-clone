import { FaSearch } from "react-icons/fa";

export const NavbarMenu = () => {
   return(
      <div className="items-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <div className="flex items-center border rounded-full p-1 shadow-md hover:shadow-lg ease-out duration-300 ml-48">
            <input type="text" placeholder="Ke mana saja" className="flex-1 text-sm text-center py-2 text-gray-700 placeholder:text-slate-800 bg-transparent focus:outline-none" />
            <span className="border-l h-6"></span>
            <input type="text" placeholder="Minggu mana pun" className="flex-1 text-sm text-center py-2 text-gray-700 placeholder:text-slate-800 bg-transparent focus:outline-none" />
            <span className="border-l h-6"></span>
            <input type="text" placeholder="Tambahkan Tamu" className="flex-1 text-sm text-center py-2 text-gray-700 bg-transparent focus:outline-none" />
            <span className="border-l h-6"></span>
            <button className="flex items-center justify-center w-8 h-8 mx-2 bg-red-500 text-white rounded-full focus:outline-none">
               <FaSearch className="h-3 w-3"/>
            </button>
         </div>
      </div>
   )
}