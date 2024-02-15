import React from "react";
import Appdevelopment from "../../assets/AppDevelopment.gif";
import Game from "../../assets/game.gif";
import Frontend from "../../assets/frontend.gif";
import Desktop from "../../assets/Desktop.gif";
import Blockchain from "../../assets/blockchain.gif";
import Team from "../../assets/team.gif";
function ServiceList() {
  return (
    <div className="max-w-screen-md mx-auto">
    {services.map((service, index) => (
      <div key={index} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-3 mb-5">
        <img src={service.image} className="max-w-full md:max-w-[200px] h-auto" alt="" /> {/* Adjust image width for mobile and desktop */}
        <div data-aos="fade-up" data-aos-duration="800" className="container">
          <h1 className="font-serif text-xl font-bold mb-3">{service.title}</h1>
          <p className="font-serif text-lg leading-relaxed text-justify">{service.description}</p>
          <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </div>
    ))}
  </div>
  
  );
}

const services = [
  {
    image: Frontend,
    title: "WEB DEVELOPMENT",
    description: "We acquire our thrills from creating web solutions to help execute your business operations smoothly, fast, and efficiently. A big chunk of our daily routine is spent designing and developing custom online business systems, be it for blue-chip corporate clients, fresh-faced start-ups, or local SMEs."
  },
  {
    image: Appdevelopment,
    title: "APP DEVELOPMENT",
    description: "We reinforce your business strength through adaptable iOS and Android apps development. We have you covered from design to development, launch, and marketing of simple to intricate mobile apps. Our experts supplement the customer's thought-process along with their schemes guaranteeing successful project delivery."
  },
  {
    image: Game,
    title: "GAME DEVELOPMENT",
    description: "Our game development team breathes life into your ideas and transforms them into engaging, interactive, and visually stunning gaming experiences. From conceptualization to launch, we handle all aspects of game development, ensuring high-quality results that resonate with your target audience."
  },
  {
image:Desktop,
title : "DESKTOP DEVELOPMENT",
description : "We sustain best practices and market trends to deliver well-rounded desktop software development services. Our competent designers and programmers never hesitate to go extra miles while transforming an exciting desktop application concept into an industry sensation."
  },
  {
    image:Blockchain,
    title : "BlockChain DEVELOPMENT",
    description : "Benefit your business with trust, transparency, and efficiency through our enterprise dApps. We excel at delivering scalable, reliable, and fully customized blockchain applications with years of expertise in this technology. Moreover, we keep improving our process with the evolving blockchain industry.."
  },
  {
    image:Team,
    title : "TEAM For Your Projects",
    description : "Hire Dedicated Resources for Your Project .Our team is committed to delivering high-quality, high-performing, and high-value solutions to your business needs. We have the right blend of designers, developers, QA engineers, marketers to bring the best for you."
    
  }
];

export default ServiceList;
