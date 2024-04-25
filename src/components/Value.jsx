import data from "../data/ValueData";
const Value = () => {
  return (
    <section className=" font-BeVietnamPro  text-DarkGrayishBlue text-[16px] lg:flex  ">
      <div className="my-10 text-center lg:pl-[7.5rem] ">
        <h2 className=" text-[2.5rem] font-bold text-center lg:text-left   text-DarkBlue py-6">
          What's different about Manage?
        </h2>
        <p className=" px-11 leading-[1.8] lg:text-left lg:pl-0 lg:pr-2  ">
          Manage provides all functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className=" lg:px-36 lg:mt-16 ">
        {data.map((item) => (
          <div key={item.id}>
            <div className=" flex items-center relative ">
              <div className=" w-20 h-12  rounded-3xl  absolute bg-BrightRed text-VeryPaleRed py-3 lg:h-10 px-7 lg:py-[0.6rem] ml-4 lg:relative lg:ml-10 ">
                {item.id}
              </div>
              <div className=" text-DarkBlue font-bold text-lg bg-VeryPaleRed h-12 w-full ml-9 text-center pl-11 py-3 lg:bg-transparent lg:w-[%] lg:pl-0 ">
                <h3 className=" whitespace-nowrap px-4 lg:text-left lg:pl-3 ">{item.header}</h3>
              </div>
            </div>
            <p className=" px-5 py-5 mb-8 leading-[2] lg:ml-[9rem] lg:py-1 ">
              {item.context}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Value;
