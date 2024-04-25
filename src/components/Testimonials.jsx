import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Virtual } from "swiper/modules";
import "swiper/css/virtual";
// import Swiper from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { A11y, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import testData from "../data/TestimonialData";
import Button from "./Button";
import { useState, useEffect } from "react";

const Testimonial = () => {
  const [revPerPage, setRevPerPage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700 && window.innerWidth < 1000) {
        setRevPerPage(2);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [revPerPage]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setRevPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 0 && window.innerWidth < 780) {
      setRevPerPage(1);
    } else if (window.innerWidth > 700 && window.innerWidth < 1000) {
      setRevPerPage(2);
    } else if (window.innerWidth > 1000) {
      setRevPerPage(3);
    }
  }, []);
  return (
    <section className=" flex flex-col justify-center text-DarkBlue items-center gap-5">
      <h2 className=" text-[2.3rem] font-bold text-center    py-10 ">
        What they&apos;ve said
      </h2>
      <Swiper
        className=" w-full mySwiper"
        spaceBetween={revPerPage === 3 ? 50 : 0}
        slidesPerView={revPerPage}
        // virtual
        modules={[Navigation, Pagination, A11y, Virtual, Autoplay]}
        // navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {testData.map((item) => {
          console.log(item);
          return (
            <SwiperSlide key={item.name} className=" swiper-slide border-none">
              <div className=" w-[24rem] h-[14rem] flex mx-6 bg-VaryLightGray  flex-col justify-center  items-center relative mt-9 lg:w-[30rem] ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 absolute -top-[1.5rem] pb-6"
                />
                <h4 className="font-bold ">{item.name}</h4>
                <p className=" text-center px-[2.9rem] text-DarkGrayishBlue ">
                  {item.content}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Button />
    </section>
  );
};

export default Testimonial;
