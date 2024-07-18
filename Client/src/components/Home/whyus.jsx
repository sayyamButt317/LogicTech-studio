import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import questiongirl from "../../assets/questiongirl.jpg";

const points = [
  {
    number: "01",
    title: "ExpertTeam",
    description: "Our Diverse Team Delivers Custom Solutions",
  },
  {
    number: "02",
    title: "Industry Leading",
    description: "Achieve Industry Success With Our Proven Solution",
  },
  {
    number: "03",
    title: "Global Reach",
    description: "Seamless Collaboration, Anywhere, Anytime",
  },
  {
    number: "04",
    title: "24/7 Customer Support",
    description: "Your Satisfaction is Our Priority",
  },
  {
    number: "05",
    title: "Client-Centric Approach",
    description: "Personalized Support ,Exceeding Expectations",
  },
];

const WhyUs = () => {
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i <= activeIndex; i++) {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.3 }, // Stagger the animations
        });
      }
    };

    sequence();
  }, [activeIndex, controls]);

  useEffect(() => {
    // Automatically cycle through points with a 3-second interval
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % points.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
      <div className="mt-10 ms-4">
        <p data-aos="fade-right" className="block text-red-600 text-md">Why LogicTech</p>
        <h1 data-aos="fade-left" className="block flex-row md:max-md text-black text-4xl font-normal">
          Why LogicTech Studio Stands Out
        </h1>
        <p data-aos="fade-right" className="block flex-row md:max-md text-black text-4xl font-normal">
          As Your Premier Digital Partner?
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between p-6">
          <div className="flex flex-col lg:w-1/2">
            {points.map((point, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    className={`flex items-center space-x-4 shadow-2xl mt-4 w-full rounded-lg bg-gray-100 p-4 ${
                        activeIndex === index ? '' : 'opacity-50' // Dim inactive points
                    }`}
                >
                  <div className="bg-black rounded-full h-10 w-10 flex items-center justify-center">
                    <span className="text-white font-bold">{point.number}</span>
                  </div>
                  <div className="flex flex-col">
                <span className="font-sans text-lg font-semibold">
                  {point.title}
                </span>
                    <span className="text-sm">{point.description}</span>
                  </div>
                </motion.div>
            ))}
          </div>
          <motion.div
              initial={{ opacity: 0, y: 20 }} // Start hidden and slightly up
              animate={{ opacity: 1, y: 0 }}   // Fade in and move up
              transition={{ duration: 0.8, delay: 1 }} // 1-second delay
              data-aos="fade-up"
              className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          >
            <div className="h-auto flex items-center">
              <img className="rounded-full w-96 h-96 " src={questiongirl} alt="image description" />
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default WhyUs;
