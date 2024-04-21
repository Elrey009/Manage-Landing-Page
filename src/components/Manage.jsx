import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Value from "./Value";
import data from "../data/ValueData";
import Testimonial from "./Testimonials";
import Simplify from "./Simplify";

const Manage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Value data={data} />
      <Testimonial />
      <Simplify/>
      <Footer />
    </div>
  );
};

export default Manage;
