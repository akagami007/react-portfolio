import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Text Content */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl w-full z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={`${styles.heroHeadText} text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-[#915EFF]">Stefan Cornelius</span>
            </motion.h1>
            <p
              className={`${styles.heroSubText} mt-4 text-white-100 text-base sm:text-lg md:text-xl max-w-md`}
            >
              Saya seorang Web Developer yang memiliki pengetahuan yang luas tentang
              teknologi dan pengembangan web. Saya memiliki pengalaman dalam
              mengembangkan aplikasi web dan website yang berkualitas tinggi.
            </p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex flex-col items-center justify-center w-full lg:w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative group w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <div
                className="absolute -inset-1.5 bg-gradient-to-r from-[#915EFF] to-purple-600 
                rounded-full opacity-75 group-hover:opacity-100 transition duration-300 animate-tilt"
              ></div>
              <div
                className="w-full h-full rounded-full border-4 border-transparent 
                relative z-10 bg-white p-1 overflow-hidden"
              >
                <img
                  // src="/lahiru-anushka.png"
                  alt="Stefan Cornelius"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>
            </div>
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF] mt-4 animate-bounce" />
            <div className="w-1 h-40 sm:h-60 lg:h-80 violet-gradient" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
