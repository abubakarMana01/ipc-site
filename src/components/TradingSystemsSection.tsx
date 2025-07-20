import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import tradingImage from "@/assets/trading-systems.jpg";
import gradientBg from "@/assets/gradient-bg.jpg";

const TradingSystemsSection = () => {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-[#2e125c] overflow-hidden">
      {/* Decorative curves */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${gradientBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white" ref={contentRef}>
            <h2 className="text-4xl font-light mb-6">
              Trading Communication Systems
            </h2>

            {/* Subtext + Button motion wrapper */}
            <motion.div
              initial={{ y: -150, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Unlock your trading potential with secure, reliable, and
                efficient communication systems that ensure flawless execution
                and real-time market access.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Button
                variant="ipc"
                className="text-sm bg-gradient-to-r from-[#e60091] to-[#082452] text-white rounded-full px-6 py-3 hover:bg-gradient-to-l"
              >
                EXPLORE NOW
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={tradingImage}
              alt="Trading Communication Systems"
              className="w-full h-80 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSystemsSection;
