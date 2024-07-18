import React from "react";
import { motion } from 'framer-motion';
import { FaChartLine, FaCloud, FaLaptopCode } from "react-icons/fa";

const Features = [
    {
        icon: <FaChartLine className="text-3xl text-blue-500 md:text-6xl" />,
        title: "Customized Solutions",
    },
    {
        icon: <FaCloud className="text-orange-400 text-4xl md:text-6xl" />,
        title: "Execution & Development",
    },
    {
        icon: <FaLaptopCode className="text-3xl text-green-500 md:text-6xl" />,
        title: "Professional Expertise",
    }
];

function CompanyServices() {
    return (
        <div className="w-full bg-gradient-to-r from-blue-950 to-blue-950 mx-auto py-20 h-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-6 mt-8">
            <div data-aos="fade-up" data-aos-duration="1200" className="container">
                <h1 className="flex flex-row items-center justify-center text-white text-2xl md:text-4xl md:px-3">
                    OUR WORKING PROCESS
                </h1>
                <h1 className="flex flex-row items-center justify-center text-white text-2xl md:text-4xl mb-4 md:px-3">
                    TO GROW YOUR BUSINESS
                </h1>
                <span className="text-white text-lg leading-relaxed">
          Our vision is to excel in innovative technological developments and to set a benchmark of excellence in providing IT solutions for global clients.
        </span>
                <div className="container flex flex-row items-center justify-center gap-10 mt-16">
                    {Features.map((feature, index) => (
                        <div
                            key={index}
                            data-aos="fade-right"
                            data-aos-duration="700"
                            className="flex flex-col items-center mt-8"
                        >
                            <div
                                className="flex items-center justify-center rounded-full bg-white h-20 w-20 md:h-60 md:w-60">
                                {feature.icon}
                            </div>
                            <span className="mt-4 text-2xl leading-relaxed text-center text-white md:text-2xl">
                {feature.title}
              </span>
                            <div className="flex items-center justify-center mt-4">
                                <div
                                    className="flex items-center justify-center h-2 w-2 rounded-full bg-white mr-2"></div>
                                <span className="text-white text-sm">
                                    {" "}
                                    Read More
                                </span>
                            </div>

                        </div>
                    ))}

                </div>
                <div className="flex items-center justify-center mt-10">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        className="bg-white border border-white text-blue-500 font-bold px-6 py-3 rounded-full"
                    >
                        Contact Us!
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default CompanyServices;



