const Value = (props) => {
  return (
    <section>
      <div>
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>

      <div>
        {props.data.map((item) => (
          <div key={item.id}>
            <span className=" w-12 bg-BrightRed text-VeryPaleRed text-center">
              {item.id}
            </span>
            <div>
              <h3>{item.header}</h3>
            </div>

            <p>{item.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Value;
