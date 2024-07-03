import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Sidebar from "./sidebar";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const splineRef = useRef(null);

  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(splineRef.current);
        observerRefValue = splineRef.current;
      }
    });

    observer.observe(splineRef.current);

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, []);

  return (
    <div className="relative w-full h-[900px] bg-cover bg-black">
      {/* Company Title and Description */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-md sm:ml-4 md:ml-14"
        >
          <h1
            data-aos="fade-right"
            data-aos-duration="600"
            className="font-sans md:font-serif text-2xl md:text-4xl"
          >
            Welcome to LogicTech
          </h1>
          <p className="text-xs md:text-sm">
            We're dedicated to transforming your digital aspirations into
            reality. With our innovative software solutions and cutting-edge
            technology expertise, we empower businesses to thrive in the
            digital age.
          </p>

          <div className="flex justify-center space-x-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full"
            >
              Explore Our Services
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-transparent border border-white text-white px-6 py-3 rounded-full"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
{/* HeadinG*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-0 left-1/4 transform -translate-x-1/2 text-white z-20 text-center mt-8"
      >
        <h1 className="font-sans md:font-serif text-2xl md:text-4xl font-bold mb-2">
          TURN YOUR VISION INTO REALITY
        </h1>
        <p className="text-sm md:text-lg">Let's Start Building Together</p>
      </motion.div>

  {/* Sidebar */}
<div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center justify-center text-white z-20 text-right">
  <Sidebar />
</div>


      {/* Additional Text - Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-4 right-4 text-white z-20 text-right"
      >
        <p className="text-sm md:text-lg">Discover what we can do for you</p>
        <p className="text-sm md:text-lg font-bold">
          Explore Our Services Below
        </p>
      </motion.div>

      {/* Spline Scene */}
      <div ref={splineRef} className="absolute top-0 left-0 right-0 bottom-0 z-10">
        {isVisible && (
          <Spline scene="https://prod.spline.design/6Ynr7fNnLGCUoA-U/scene.splinecode" />
        )}
      </div>
    </div>
  );
}

export default Hero;
