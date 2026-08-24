import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Noor Project",
          category: "Full-Stack Web App",
          path: "/thumb1.jpg",
          link: "https://github.com/Vantara-Digital/Noor_Project",
        },
        {
          title: "TwinLink",
          category: "Real-Time Platform",
          path: "/thumb2.jpg",
          link: "https://github.com/Vantara-Digital/TwinLink",
        },
        {
          title: "Voice Cloning",
          category: "AI Audio Synthesis",
          path: "/thumb3.jpg",
          link: "https://github.com/Vantara-Digital/Voice_cloning",
        },
        {
          title: "Video Gen",
          category: "Generative Media Pipeline",
          path: "/thumb4.jpg",
          link: "https://github.com/Vantara-Digital/Video_gen",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-85 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title & action */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-4 group-hover:xl:-translate-y-10 transition-all duration-300 px-2 sm:px-4 text-center">
                    <div className="text-[10px] sm:text-xs font-light text-white/80 uppercase tracking-widest mb-0.5 sm:mb-1">
                      {image.category}
                    </div>
                    <div className="text-xs sm:text-base font-semibold text-white mb-2 line-clamp-1">
                      {image.title}
                    </div>
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-x-1.5 sm:gap-x-2 text-[10px] sm:text-[12px] tracking-[0.15em] font-semibold bg-white text-primary px-3 py-1 sm:py-1.5 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
                      aria-label={`View ${image.title} on GitHub`}
                    >
                      <BsGithub className="text-xs sm:text-sm" />
                      <span>VIEW CODE</span>
                      <BsArrowRight className="text-xs sm:text-sm" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
