import { NavbarMenu } from "./NavbarMenu";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarProfile } from "./NavbarProfile";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-30 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavbarLogo />
          <NavbarMenu />
          <NavbarProfile />
        </div>
      </nav>
    </>
  );
};
