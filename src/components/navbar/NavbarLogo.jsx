import AirBnbLogo from "./../../assets/logo/airbnb-logo.png";

export const NavbarLogo = () => {
  return (
    <a
      href="https://flowbite.com/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <img src={AirBnbLogo} className="h-8" alt="Flowbite Logo" />
    </a>
  );
};
