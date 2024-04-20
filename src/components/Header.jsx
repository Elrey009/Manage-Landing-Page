import logo from "../assets/images/logo.svg";
import hambuger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
const Header = () => {
  return (
    <header className="flex justify-between  px-4 py-6 h-[3rem] relative md:px-8">
      <img src={logo} className="h-[1.5rem]" alt="logo" />
      <div>
        <nav className=" bg-white w-[30rem] hidden  text-DarkBlue absolute left-0 top-16 h-[20rem] z-10  md:hidden ">
          <ul className=" flex flex-col px-[9rem] py-[2rem] text-[18px] font-bold leading-[3] md:px-[11rem] cursor-pointer ">
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </nav>
        <img src={hambuger} className=" cursor-pointer lg:hidden" />
      </div>
      <div className="hidden w-36 bg-BrightRed h-12 mx-auto px-[1.8rem] py-[0.75rem] rounded-[23px] text-[16px] text-VeryPaleRed font-semibold my-4 shadow-lg shadow-BrightRed">
        Get Started
      </div>
    </header>
  );
};

export default Header;
