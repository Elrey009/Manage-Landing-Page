import testData from "../data/TestimonialData";

const Testimonial = () => {
  return (
    <section>
      <h2>What they've said</h2>
      <div>
        {testData.map((item) => (
          <div key={item.name}>
            <div>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-36 bg-BrightRed h-12 mx-auto px-[1.9rem] py-[0.77rem] rounded-[23px] text-VeryPaleRed  my-4 shadow-lg lg:cursor-pointer whitespace-nowrap shadow-BrightRed mt-8 lg:ml-11 lg:mt-12">
        Get Started
      </div>
    </section>
  );
};

export default Testimonial;
