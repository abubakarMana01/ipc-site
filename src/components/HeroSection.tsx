import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";

import InternetConnection from "@/assets/internet-connection.jpeg";
import BroadBand from "@/assets/broad-band.jpg";
import WifiInternet from "@/assets/wifi-internet.jpeg";
import MobileConection from "@/assets/mobile-connection.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    bg: InternetConnection,
    titleLines: "Internet",
    subtitle:
      "We has the high speed internet you need to keep you well connected throughout your home.",
    buttonText: "GET STARTED",
  },
  {
    bg: BroadBand,
    titleLines: "Broadband",

    subtitle:
      "Access internet service around your home with our routers all over the world",
    buttonText: "GET STARTED",
  },
  {
    bg: WifiInternet,
    titleLines: "WiFi Internet",
    subtitle: "High-speed Internet access that is always on & fast.",
    buttonText: "GET STARTED",
  },
  {
    bg: MobileConection,
    titleLines: "Mobile Connection",
    subtitle: "Use our router to stay online on all your devices.",
    buttonText: "GET STARTED",
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
              <div className="w-full max-w-4xl">
                <h1 className="text-white text-3xl lg:text-6xl font-bold leading-tight mb-6">
                  {slide.titleLines}
                </h1>
                <p className="text-white/90 text-lg lg:text-xl mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <Link to="https://wa.me/+2348100033164" target="_blank">
                  {" "}
                  <Button className="text-sm bg-gradient-to-r hover:bg-gradient-to-l from-[#e60091] to-[#082452] text-white rounded-full px-6 py-3">
                    {slide.buttonText}
                  </Button>
                </Link>
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
