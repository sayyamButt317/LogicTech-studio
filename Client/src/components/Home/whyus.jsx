import React from "react";
import speak from "../../assets/speak.png";

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
  return (
    <div className="mt-10">
      <p className="container text-red-600 text-md">Why LogicTech</p>
      <h1 data-aos="fade-left"
          data-aos-duration="600"className="container flex flex-row md:max-md text-black text-4xl font-normal">
        Why LogicTech Studio Stands Out
      </h1>
      <p data-aos="fade-right"
          data-aos-duration="600" className="container flex flex-row md:max-md text-black text-4xl font-normal">
        As Your Premier Digital Partner?
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-between p-6">
        <div className="flex flex-col lg:w-1/2">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 shadow-2xl mt-4 w-full rounded-lg bg-gray-100 p-4"
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
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <img
            src={speak}
            alt=""
            className="object-cover rounded-lg h-86 w-3/4 lg:w-full lg:h-[36rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
