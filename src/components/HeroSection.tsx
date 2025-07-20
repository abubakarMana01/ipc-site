import { Fragment, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";

import heroBanner1 from "@/assets/ipc-heroBanner-1.jpg";
import heroBanner2 from "@/assets/ipc-heroBanner-2.jpg";
import heroBanner3 from "@/assets/ipc-heroBanner-3.jpg";
import heroBanner4 from "@/assets/ipc-heroBanner-4.jpg";

const slides = [
  {
    bg: heroBanner1,
    titleLines: ["Communications.", "Compliance.", "Community."],
    subtitle:
      "Our reliable technology connects global markets, enabling faster, smarter, and more efficient trading operations since 1973.",
    buttonText: "ABOUT US",
    buttonLink: "#about",
  },
  {
    bg: heroBanner2,
    titleLines: [
      "IPC Systems:",
      "Facilitating smarter, fasterand more efficient FX trading",
    ],
    subtitle:
      "IPC powers mission-critical communication and compliance solutions that empower financial institutions worldwide.",
    buttonText: "OUR SOLUTIONS",
    buttonLink: "#solutions",
  },
  {
    bg: heroBanner3,
    titleLines: ["Global.", "Trusted.", "Connected.", "Compliant."],
    subtitle:
      "For over 50 years, IPC has connected market participants with voice and data networks that meet the demands of finance.",
    buttonText: "DISCOVER",
    buttonLink: "#discover",
  },
  {
    bg: heroBanner4,
    titleLines: ["Innovate.", "Integrate.", "Accelerate.", "Succeed."],
    subtitle:
      "Built for the future of finance, IPC solutions provide real-time collaboration and regulatory alignment.",
    buttonText: "GET STARTED",
    buttonLink: "#start",
  },
];

const HeroSlider = () => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="relative w-full h-[50vh]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-start"
            style={{
              backgroundImage: `url(${slide.bg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
              <div className="max-w-2xl">
                <h1 className="text-white text-3xl font-bold leading-tight mb-6">
                  {slide.titleLines.map((line, i) => (
                    <Fragment key={i}>
                      {line}
                      <br />
                    </Fragment>
                  ))}
                </h1>
                <p className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <a href={slide.buttonLink}>
                  <Button className="text-sm bg-gradient-to-r hover:bg-gradient-to-l from-[#e60091] to-[#082452] text-white rounded-full px-6 py-3">
                    {slide.buttonText}
                  </Button>
                </a>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
