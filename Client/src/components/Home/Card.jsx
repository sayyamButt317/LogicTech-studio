import React from "react";
import web from "../../assets/AppDevelopment.gif";
import biometric from "../../assets/biometric.png";
import Frontend from "../../assets/frontend.gif"
import Desktop from "../../assets/Desktop.gif"
import Game from "../../assets/game.gif"


const cards = [
  { image: Frontend, title: "Web Development", description: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." },
  { image: web, title: "App Development", description: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." },
  { image: Desktop, title: "Desktop", description: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." },
  { image: Game, title: "Game", description: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." }
];

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          data-aos="fade-left"
          data-aos-duration={(index + 1) * 700}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700"
        >
          <div className="flex items-center justify-center">
            <img src={card.image} height="100" width="100" alt="" />
          </div>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-ui-serif tracking-tight text-black-300 dark:text-black">
              {card.description}
            </h5>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-black">
                {card.title}
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
