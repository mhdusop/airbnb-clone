import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export const FooterCopyright = () => {
  return (
    <div className="px-16 py-6 bg-gray-100 md:flex md:items-center md:justify-between">
      <div className="flex">
        <span className="text-sm text-gray-700 sm:text-center">
          © 2024 <a href="https://flowbite.com/">Airbnb</a>, Inc.
          <span>∙</span>
          <a href="#" className="hover:underline mx-2">
            Privasi
          </a>
          <span>∙</span>
          <a href="#" className="hover:underline mx-2">
            Ketentuan
          </a>
          <span>∙</span>
          <a href="#" className="hover:underline mx-2">
            Peta Situs
          </a>
        </span>
      </div>
      <div className="flex mt-4 sm:justify-center text-sm text-gray-700 md:mt-0 space-x-5 rtl:space-x-reverse">
        <a href="#" className="hover:underline mx-2">
          Bahasa Indonesia (ID)
        </a>
        <a href="#" className="hover:underline mx-2">
          Rp IDR
        </a>
        <FaFacebookSquare className="text-xl" />
        <FaTwitterSquare className="text-xl" />
        <FaInstagramSquare className="text-xl" />
      </div>
    </div>
  );
};
