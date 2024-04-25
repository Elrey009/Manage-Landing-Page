import footerLogo from "../assets/images/logo-white.svg";
import facebook from "../assets/images/icon-facebook.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" relative bg-VeryDarkBlue  md:flex-row flex flex-col text-VaryLightGray justify-center items-center pt-8">
      <div className=" md:top-10  md:right-[2rem] lg:top-12 md:absolute lg:right-[10rem] flex gap-2">
        <input
          type="text"
          placeholder="Updates in your inbox"
          className="w-[15rem] py-2 pl-5 rounded-3xl focus:outline-none focus:border-transparent text-black "
        />
        <div className="bg-BrightRed w-[5rem] py-[0.5rem] rounded-[1.5rem] text-center font-semibold   lg:hover:opacity-[0.7] text-VaryLightGray cursor-pointer">
          Go
        </div>
      </div>
      <nav className="flex gap-24 text-VaryLightGray py-8 lg:gap-36 lg:mr-28 md:gap-20 md:mr-24 md:mb-4">
        <ul>
          <Link to="#">
            <li className="lg:hover:text-BrightRed cursor-pointer">Home</li>
          </Link>

          <Link to="#">
            <li className="lg:hover:text-BrightRed cursor-pointer">Pricing</li>
          </Link>

          <Link to="#">
            <li className="lg:hover:text-BrightRed cursor-pointer">Products</li>
          </Link>

          <Link to="#">
            <li className="lg:hover:text-BrightRed cursor-pointer">About Us</li>
          </Link>
        </ul>
        <ul>
          <Link to="#">
            <li className="lg:hover:text-BrightRed cursor-pointer">Careers</li>
          </Link>
          <Link to="#">
            <li className="lg:hover:text-BrightRed cursor-pointer">
              Community
            </li>
          </Link>
          <Link to="#">
            <li className="lg:hover:text-BrightRed cursor-pointer">
              Privacy Policy
            </li>
          </Link>
        </ul>
      </nav>

      <div className=" flex flex-col md:absolute md:left-8 lg:left-28 md:flex-col-reverse ">
        <div className="flex gap-[2.5rem] md:gap-[0.5rem] mb-7">
          <Link to="#" key="facebook">
            <img
              src={facebook}
              className="w-[1.8rem] rounded-md cursor-pointer lg:hover:bg-BrightRed"
              alt="facebook "
            />
          </Link>
          <Link to="#" key="youtube">
            <img
              src={youtube}
              className="w-[1.8rem]  rounded-md cursor-pointer lg:hover:bg-BrightRed"
              alt="youtube"
            />
          </Link>

          <Link to="#" key="twitter">
            <img
              src={twitter}
              className="w-[1.8rem] rounded-md cursor-pointer lg:hover:bg-BrightRed "
              alt="twitter"
            />
          </Link>

          <Link to="#" key="pinterest">
            <img
              src={pinterest}
              className="w-[1.8rem] rounded-md cursor-pointer lg:hover:bg-BrightRed "
              alt="pinterest "
            />
          </Link>

          <Link to="#" key="instagram">
            <img
              src={instagram}
              className="w-[1.8rem] rounded-md cursor-pointer  lg:hover:bg-BrightRed"
              alt="instgram"
            />
          </Link>
        </div>
        <img
          src={footerLogo}
          className="my-6 w-[10rem] md:mb-12 mx-auto "
          alt="logo"
        />
      </div>

      <p className="py-5 md:top-[6.5rem] md:absolute lg:right-[10rem] md:right-[5rem] opacity-[0.5]">
        Copyright 2020.All rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
