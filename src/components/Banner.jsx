import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="my-[78px]">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[600px] overflow-hidden rounded-2xl bg-[url(https://i.ibb.co/KX23sFy/resort.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="size-full bg-[#0000000b] p-28 flex items-center">
              <div className="px-9 py-10 rounded-2xl backdrop-blur-md max-w-[500px] shadow-xl">
                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                  Luxury Resort Retreat
                </h2>
                <p className="text-white mt-6 drop-shadow-lg">
                  Experience ultimate relaxation and indulgence in this luxury
                  resort retreat surrounded by pristine landscapes. This idyllic
                  sanctuary offers luxurious accommodations, world-class
                  amenities, and unparalleled service amidst breathtaking
                  natural beauty.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] overflow-hidden rounded-2xl bg-[url(https://i.ibb.co/Y2zWJ5f/villa.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="size-full bg-[#0000000b] p-28 flex items-center">
              <div className="px-9 py-10 rounded-2xl backdrop-blur-md max-w-[500px] shadow-xl">
                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                  Luxury Vineyard Villa
                </h2>
                <p className="text-white mt-6 drop-shadow-lg">
                  Escape to wine country in this luxurious villa nestled amidst
                  rolling vineyards and picturesque landscapes. This exquisite
                  residence offers vineyard views, gourmet kitchen, and
                  resort-style amenities for the ultimate wine country retreat.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[600px] overflow-hidden rounded-2xl bg-[url(https://i.ibb.co/LtcRyq7/beachfront.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="size-full bg-[#0000000b] p-28 flex items-center">
              <div className="px-9 py-10 rounded-2xl backdrop-blur-md max-w-[500px] shadow-xl">
                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                  Private Beachfront Villa
                </h2>
                <p className="text-white mt-6 drop-shadow-lg">
                  Escape to your own private paradise with this beachfront villa
                  offering unparalleled luxury and serenity. This exceptional
                  property features expansive ocean views, direct beach access,
                  and lavish amenities for the ultimate coastal retreat.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
