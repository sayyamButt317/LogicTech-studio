import React from "react";
import web from "../../assets/AppDevelopment.gif";
import Frontend from "../../assets/frontend.gif"
import Desktop from "../../assets/Desktop.gif"
import Game from "../../assets/game.gif"

const cards = [
  {
    image: Frontend,
    title: "Web Development",
    description:
      "Build modern, responsive websites with cutting-edge technologies.",
  },
  {
    image: web,
    title: "App Development",
    description:
      "Create powerful and efficient mobile applications for various platforms.",
  },
  {
    image: Desktop,
    title: "Desktop Development",
    description:
      "Develop robust desktop applications tailored to your business needs.",
  },
  {
    image: Game,
    title: "Game Development",
    description:
      "Design and develop engaging and immersive gaming experiences.",
  },
];

const Card = () => {

  return (
    <>
    <div className="flex flex-wrap justify-center items-center gap-2 p-4
    ">
      {cards.map((card, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-duration={(index + 1) * 700}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700"
        >
          <div className="flex items-center justify-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <img src={card.image} height="80" width="80" alt="" />
          </div>
          <div className="px-5 pb-5">
            <h5 className="text-sm font-ui-serif tracking-tight text-black-300 dark:text-black">
              {card.description}
            </h5>
            <div className="flex items-center mt-2.5 mb-5"></div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900 dark:text-black">
                {card.title}
              </span>
             
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Card;
