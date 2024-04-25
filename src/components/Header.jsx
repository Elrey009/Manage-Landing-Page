import logo from "../assets/images/logo.svg";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex justify-between  px-6 py-10 h-[3rem] relative md:px-8 lg:px-[7.5rem] lg:py-12 whitespace-nowrap">
      <img src={logo} className="h-[1.5rem]" alt="logo" />
      <NavBar />
      <div className="hidden lg:block w-36 bg-BrightRed h-12 mx-auto px-[1.8rem] py-[0.77rem] rounded-[23px] text-[16px] text-VeryPaleRed font-semibold my-4 shadow-lg cursor-pointer lg:absolute lg:right-32 lg:top-6 shadow-BrightRed hover:opacity-[0.7]">
        Get Started
      </div>
    </header>
  );
};

export default Header;
