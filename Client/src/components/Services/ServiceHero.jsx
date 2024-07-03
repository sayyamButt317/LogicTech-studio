import React from "react";
import { motion } from 'framer-motion';
import People from "../../assets/people.png";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaChartLine } from 'react-icons/fa'; // Assuming you have these icons installed


function ServicePage() {
  const services = [
    {
      title: "Software Development",
      description:
        "We craft custom software solutions tailored to your unique business needs, ensuring scalability, efficiency, and maintainability.",
      icon: <FaLaptopCode className="text-3xl text-blue-500" /> 
    },
    {
      title: "Mobile App Development",
      description:
        "Our team designs and develops user-friendly mobile apps for iOS and Android platforms, delivering engaging experiences for your customers.",
      icon: <FaMobileAlt className="text-3xl text-green-500" />
    },
    {
      title: "Cloud Computing",
      description:
        "Leverage our cloud expertise to build secure, scalable, and reliable cloud-based solutions that optimize your infrastructure and reduce costs.",
      icon: <FaCloud className="text-3xl text-orange-500" />
    },
    {
      title: "Data Analytics",
      description:
        "We help you unlock the power of data through advanced analytics and reporting, empowering you to make data-driven decisions and gain valuable insights.",
      icon: <FaChartLine className="text-3xl text-purple-500" />
    },
    // Add more services here as needed
  ];

  return (
    <div className="relative w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Empowering Your Business with Technology
          </h1>
          <p className="text-lg md:text-xl">
            We deliver innovative software solutions tailored to your specific needs.
          </p>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 flex justify-center"
          >
            <img
              src={People}
              alt="People working on software"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Services Section */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="ml-4 text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ServicePage;
