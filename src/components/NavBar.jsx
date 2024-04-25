import { useState } from "react";
import { Link } from "react-router-dom";
import hambugerIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";

const NavBar = () => {
  const [isHidden, setIsHidden] = useState(false);

  function toggleIsHidden() {
    setIsHidden(!isHidden);
  }
  return (
    <div>
      <nav
        className={`${
          isHidden ? "" : "hidden"
        }  bg-white w-[30rem]  shadow-md text-DarkBlue absolute left-0 top-16 h-[20rem] z-10 md:left-8 md: hover:text-DarkGrayishBluew-[50rem] md:top-16  lg:block lg:w-0 lg:top-0 lg:left-[13rem]`}
      >
        <ul className=" flex flex-col px-[9rem] py-[2rem]  md:text-center text-[18px] font-semibold leading-[3] md:px-[11rem]  lg:flex-row lg:gap-10 ">
          <Link to={"#"}>
            {" "}
            <li className="cursor-pointer hover:text-DarkGrayishBlue">Pricing</li>
          </Link>

          <Link to={"#"}>
            <li className="cursor-pointer hover:text-DarkGrayishBlue">Product</li>
          </Link>

          <Link to={"#"}>
            {" "}
            <li className="cursor-pointer hover:text-DarkGrayishBlue">About Us</li>
          </Link>

          <Link to={"#"}>
            <li className="cursor-pointer hover:text-DarkGrayishBlue">Careers</li>
          </Link>

          <Link to={"#"}>
            {" "}
            <li className="cursor-pointer hover:text-DarkGrayishBlue">Community</li>
          </Link>
        </ul>
      </nav>
      <button onClick={toggleIsHidden}>
        <img
          src={isHidden ? closeIcon : hambugerIcon}
          className=" cursor-pointer lg:hidden"
        />
      </button>
    </div>
  );
};

export default NavBar;
