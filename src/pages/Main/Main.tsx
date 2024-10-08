import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Main = () => {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
        autoplay
        modules={[Keyboard, Mousewheel, Navigation]}
        grabCursor
        loop
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> 
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};
