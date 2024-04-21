import logo from "../assets/images/logo.svg";
import hambuger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
const Header = () => {
  return (
    <header className="flex justify-between  px-4 py-6 h-[3rem] relative md:px-8 lg:px-[7.5rem] lg:py-12 whitespace-nowrap">
      <img src={logo} className="h-[1.5rem]" alt="logo" />
      <div>
        <nav className=" bg-white w-[30rem] hidde shadow-md text-DarkBlue absolute left-0 top-16 h-[20rem] z-10  md:hidde lg:w-0 lg:top-0 lg:left-[13rem]  ">
          <ul className=" flex flex-col px-[9rem] py-[2rem] text-[18px] font-semibold leading-[3] md:px-[11rem]  lg:flex-row lg:gap-10 ">
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Community</li>
          </ul>
        </nav>
        <img src={hambuger} className=" cursor-pointer lg:hidden" />
      </div>
      <div className="hidden lg:block w-36 bg-BrightRed h-10 mx-auto px-[1.8rem] py-[0.55rem] rounded-[23px] text-[16px] text-VeryPaleRed font-semibold my-4 shadow-lg cursor-pointer lg:absolute lg:right-32 lg:top-6 shadow-BrightRed">
        Get Started
      </div>
    </header>
  );
};

export default Header;
