const Value = (props) => {
  return (
    <section className=" font-BeVietnamPro  text-DarkGrayishBlue text-[16px] ">
      <div className="my-10 text-center ">
        <h2 className=" text-[2.5rem] font-bold text-center text-DarkBlue py-6">
          What's different about Manage?
        </h2>
        <p className=" px-11 leading-[1.8] ">
          Manage provides all functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div className="">
        {props.data.map((item) => (
          <div key={item.id}>
            <span className=" w-12 bg-BrightRed text-VeryPaleRed text-center">
              {item.id}
            </span>
            <div className="">
              <h3>{item.header}</h3>
            </div>

            <p className="">{item.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Value;
