import { newArrival } from "../data";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function New() {
  return (
    <div id="new" className="container py-20">
      <div className="flex justify-center mb-14">
        <h1 className="text-xl text-titleColor uppercase p-2 font-semibold border-t-[2px] border-firstColor">
          new arrival
        </h1>
      </div>

      <Swiper
        className="mySwiper"
        grabCursor={true}
        centeredSlides={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {newArrival?.map((item) => {
          return (
            <SwiperSlide className="flex justify-center" key={item?.id}>
              <Item key={item?.id} item={item} type="New" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default New;
