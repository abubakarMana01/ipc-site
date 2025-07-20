import { motion } from "framer-motion";

const SolutionsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-ipc-navy mb-4"
        >
          Discover tailored solutions for your trading needs
        </motion.h2>
        <div className="w-20 h-1 bg-ipc-magenta mx-auto"></div>
      </div>
    </section>
  );
};

export default SolutionsSection;
