import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import networkImage from "@/assets/network-services.jpg";

const NetworkServicesSection = () => {
  return (
    <section className="relative bg-gradient-blue overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-20 top-20 w-40 h-40">
          <div className="grid grid-cols-8 gap-1 w-full h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-white rounded-full opacity-60"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image animation from top */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={networkImage}
              alt="Network Services"
              className="w-full h-80 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg"></div>
          </motion.div>

          {/* Content: heading, paragraph, button */}
          <div className="text-white order-1 lg:order-2 space-y-6">
            <motion.h2
              className="text-4xl font-light text-ipc-magenta"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Network Services
            </motion.h2>

            <motion.p
              className="text-white/90 text-lg leading-relaxed"
              initial={{ y: -150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Optimize your trading performance with IPC's advanced network
              services, designed to deliver seamless connectivity, ultra-low
              latency and uninterrupted access to global financial markets.
            </motion.p>

            <motion.div
              initial={{ y: -80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Button
                variant="ipc"
                className="text-sm bg-gradient-to-r from-[#e60091] to-[#082452] text-white rounded-full px-6 py-3 hover:bg-gradient-to-l"
              >
                DISCOVER MORE
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkServicesSection;
