import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const StepperWidget = () => {
  const controls = useAnimation();
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i <= stepIndex; i++) {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.3 } // Stagger the animations
        });
      }
    };
    sequence();
  }, [stepIndex, controls]); // Rerun when stepIndex changes

  useEffect(() => {
    // Simulate progress automatically
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev < 2 ? prev + 1 : 0)); // Cycle through steps
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <ol className="relative ml-10 mt-6 border-s border-gray-200">
      {[
        {
          number: '01',
          title: 'Feature / Function',
          description: 'We meet Your Requirement',
        },
        {
          number: '02',
          title: 'Solution',
          description: 'We solve your current problems',
        },
        {
          number: '03',
          title: 'Outcomes',
          description: 'We enable your Future Results',
        },
      ].map((step, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className={`mb-10 ms-6 ${stepIndex < index ? 'text-gray-300' : ''}`}
        >
          <span
            className={`absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -start-4 ring-4 shadow-lg ${
              stepIndex < index ? 'ring-gray-200' : 'ring-white'
            }`}
          >
            {step.number}
          </span>
          <h3 className="font-bold text-xl leading-tight ml-6">
            {step.title}
          </h3>
          <p className="text-sm ml-6">{step.description}</p>
        </motion.li>
      ))}
    </ol>
  );
};

export default StepperWidget;
