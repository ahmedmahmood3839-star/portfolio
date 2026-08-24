import {
  RxDesktop,
  RxMobile,
  RxLayers,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const serviceData = [
  {
    Icon: RxLayers,
    title: "Full-Stack Web Development",
    description:
      "Building modern web applications using React, Next.js, Node.js, Express.js, MongoDB, and Firebase.",
  },
  {
    Icon: RxDesktop,
    title: "Frontend Development",
    description:
      "Creating responsive, interactive, and polished interfaces using React, Next.js, Tailwind CSS, TypeScript, and modern UI techniques.",
  },
  {
    Icon: RxMobile,
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications with React Native for smooth and consistent mobile experiences.",
  },
  {
    Icon: RxRocket,
    title: "UI Animation & Interaction",
    description:
      "Creating smooth, modern interactions and animations using Framer Motion and modern frontend techniques.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[260px] sm:h-[350px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full min-h-[220px] sm:min-h-[290px] rounded-lg px-6 py-6 sm:py-8 flex flex-col justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* top: icon & title */}
            <div>
              {/* icon */}
              <div className="text-4xl text-accent mb-4">
                <item.Icon aria-hidden />
              </div>

              {/* title & description */}
              <div className="mb-4">
                <div className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </div>
                <p className="max-w-[350px] text-sm text-white/60 leading-relaxed line-clamp-4">
                  {item.description}
                </p>
              </div>
            </div>

            {/* arrow */}
            <div className="text-2xl sm:text-3xl self-end">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
