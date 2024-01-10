import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import testimonialsImg from "../assets/testimonial.png";
import { testimonials } from "../data";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
function Testimonial() {
  return (
    <div className="container py-10">
      <div className="flex gap-10 max-[992px]:flex-col">
        <Swiper className="mySwiper w-1/2 max-[992px]:w-full" grabCursor={true}>
          {testimonials?.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <div className="px-4 py-8 h-full mx-auto flex flex-col gap-5 justify-center">
                  <BiSolidQuoteAltLeft className="bg-bodyColor text-firstColor text-2xl" />
                  <p className="text-lg font-medium text-textColor">
                    {`"${item?.about}"`}
                  </p>

                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <img
                      className="w-14 h-14 rounded-full"
                      src={item?.image}
                      alt="profile picture"
                    />
                    <div className="flex items-center divide-x-2 divide-firstColor">
                      <div className="pr-3 font-medium text-titleColor">
                        {item?.title}
                      </div>
                      <div className="pl-3 text-sm font-light text-titleColor">
                        {item?.position}
                      </div>
                    </div>
                  </figcaption>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="testimonial-before min-[992px]:ml-16 m-auto ">
          <img src={testimonialsImg} loading="lazy" alt="rolex testimonials" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
