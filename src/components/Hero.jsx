import heroImg from "../assets/images/hero-img.png";
const Hero = () => {
  return (
    <section className=" font-BeVietnamPro text-[16px] flex flex-col gap-8 mt-10 lg:flex-row-reverse lg:mx-[5rem] lg:py-6">
      <div className=" px-6  md:mx-[12rem] lg:mx-0  lg:mr-20 ">
        <img src={heroImg} className="w-[25rem] lg:mr-28 lg:w-[40rem]" />
      </div>
      <div>
        <div className="flex flex-col gap-4 lg: ">
          <h2 className="font-bold text-4xl text-center lg:ml-11 lg:text-left lg:pr-[12rem] text-DarkBlue">
            Bring everyone together to build better products.
          </h2>
          <p className=" lg:pr-[13rem] lg:text-left text-DarkGrayishBlue text-center px-[3rem] ">
            Manage makes it simple for software teams to play day-day tasks
            while keeping the larger team goals in view.
          </p>
        </div>
        <div className=" w-36 bg-BrightRed h-12 mx-auto px-[1.9rem] py-[0.77rem] rounded-[23px] text-VeryPaleRed  my-4 shadow-lg lg:cursor-pointer whitespace-nowrap shadow-BrightRed mt-8 lg:ml-11 lg:mt-12">
          Get Started
        </div>
      </div>
    </section>
  );
};

export default Hero;
