import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const splineRef = useRef(null);
  const navigate = useNavigate();

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
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white z-20 sm:left-8 md:left-16 lg:left-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-md sm:max-w-lg md:max-w-xl"
        >
          <h1 className="font-sans md:font-serif text-2xl md:text-3xl lg:text-4xl font-semibold">
            Welcome To TechLogic
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            We're dedicated to transforming your digital aspirations into
            reality. With our innovative software solutions and cutting-edge
            technology expertise, we empower businesses to thrive in the
            digital age.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <motion.button
              onClick={() => navigate("/Service")}
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full"
            >
              Explore Our Services
            </motion.button>
            <motion.button
              onClick={() => navigate("/Contact")}
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
            className="absolute top-0 left-1/3 transform -translate-x-1/2 text-white z-20 text-center mt-8"
        >
          <h1 className="font-sans md:font-serif text-2xl md:text-4xl font-bold mb-2">
            TURN YOUR VISION INTO
          </h1>
          <h1 className="font-sans md:font-serif text-2xl md:text-4xl font-bold mb-2">
            REALITY
          </h1>
          <p className="text-sm md:text-lg">Let's Start Building Together</p>
        </motion.div>
      {/* Sidebar - Show only on large screens */}
      <div className="hidden md:flex absolute top-1/2 right-4 transform -translate-y-1/2 flex-col items-center justify-center text-white z-20 text-right">
        <Sidebar />
      </div>

      {/* Additional Text - Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-4 right-4 text-white z-20 text-right"
      >
        <p className="text-sm md:text-lg lg:text-xl">Discover what we can do for you</p>
        <p className="text-sm md:text-lg lg:text-xl font-bold">
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
