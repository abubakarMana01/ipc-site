import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gradientBg from "@/assets/gradient-bg.jpg";

const FooterCTA = () => {
  return (
    <section
      className="relative bg-gradient-footer overflow-hidden"
      id="contact-us"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${gradientBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Heading Animation */}
        <motion.h2
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl font-light text-white mb-8"
        >
          Take your trading experience to the{" "}
          <span className="text-ipc-magenta font-medium">next level</span>
        </motion.h2>

        {/* Button Animation */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link to="https://wa.me/+2348100033164" target="_blank">
            <Button
              variant="ipc"
              className="text-sm rounded-full text-white bg-gradient-to-r hover:bg-gradient-to-l from-[#e60091] to-[#082452]"
            >
              CONTACT US TODAY
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
