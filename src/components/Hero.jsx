import heroImg from "../assets/images/hero-img.png";
const Hero = () => {
  return (
    <section className=" font-BeVietnamPro text-[16px] flex flex-col gap-8 mt-10 ">
      <div className=" px-6">
        <img src={heroImg} className="w-[25rem] " />
      </div>
      <div>
        <div className="flex flex-col gap-4 ">
          <h2 className="font-bold text-4xl text-center text-DarkBlue">
            Bring everyone together to build better products.
          </h2>
          <p className=" text-DarkGrayishBlue text-center px-[3rem] ">
            Manage makes it simple for software teams to play day-day tasks
            while keeping the team larger goals in view.
          </p>
        </div>
        <div className=" w-36 bg-BrightRed h-12 mx-auto px-[1.6rem] py-[0.75rem] rounded-[23px] text-VeryPaleRed  my-4 shadow-lg lg:cusor-pointer whitespace-nowrap shadow-BrightRed mt-8">
          Get Started
        </div>
      </div>
    </section>
  );
};

export default Hero;
