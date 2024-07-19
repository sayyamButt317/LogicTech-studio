import { FaLaptopCode, FaCloud, FaChartLine } from "react-icons/fa";

const Vision = () => {
    return (
        <div className="bg-gradient-to-r from-blue-950 to-blue-950 mx-auto mt-10 h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-6 flex items-center justify-center">
            <div data-aos="fade-up" data-aos-duration="1200" className="text-center">
                <h1 className="text-white text-2xl md:text-4xl mb-4">
                    Vision
                </h1>
                <p className="text-white text-base md:text-lg leading-relaxed mb-8">
                    Our vision is to excel in innovative technological developments and to
                    set a benchmark of excellence in providing IT solutions for global
                    clients.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className="flex flex-col items-center">
                        <FaCloud className="text-4xl text-orange-500 mb-2" />
                        <span className="text-white text-lg md:text-2xl">Innovation</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaLaptopCode className="text-4xl text-green-500 mb-2" />
                        <span className="text-white text-lg md:text-2xl">Collaboration</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaChartLine className="text-4xl text-blue-500 mb-2" />
                        <span className="text-white text-lg md:text-2xl">Excellence</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Vision;
