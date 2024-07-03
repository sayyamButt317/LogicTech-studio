import {
  FaLaptopCode,
  FaCloud,
  FaChartLine,
} from "react-icons/fa";
const Vision = () => {
  return (
    <div className="container bg-gradient-to-r from-blue-950 to-blue-950 mx-auto mt-10 h-full w-full rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100 p-6">
      <div data-aos="fade-up" data-aos-duration="1200" className="container">
        <h1 className=" flex flex-row item-center justify-center text-white text-2xl md:text-4xl mb-4 md:px-3 py-6">
          Vision
        </h1>
        <span className="text-white text-lg leading-relaxed">
          Our vision is to excel in innovative technological developments and to
          set a benchmark of excellence in providing IT solutions for global
          clients.
        </span>
        <div className="container flex flex-row item center justify-center gap-10 ">
          <span className="text-white text-lg leading-relaxed text-2xl md:text-4xl">
          <FaCloud className="text-3xl text-orange-500" />
            Innovation
          </span>
          <span className="text-white text-lg leading-relaxed text-2xl md:text-4xl">
          <FaLaptopCode className="text-3xl text-green-500" />
            Collaboration
          </span>
          <span className="text-white text-lg leading-relaxed text-2xl md:text-4xl">
          <FaChartLine className="text-3xl text-blue-500" />
            Excellence
          </span>
        </div>
      </div>
    </div>
  );
};
export default Vision;

