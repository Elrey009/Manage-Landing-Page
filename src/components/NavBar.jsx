import hambuger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
