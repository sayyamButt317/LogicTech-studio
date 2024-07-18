import React from "react";
import girl from "../../assets/girl.jpg";
import women from "../../assets/women.jpg";
import menteam from "../../assets/menteam.jpg";

const ImagesList = [
    {
        image: girl,
        alt: "Girl image"
    },
    {
        image: menteam,
        alt: "Men team image"
    },
    {
        image: women,
        alt: "Women image"
    }
];

function ContactHero() {
    return (
        <div className="w-full h-auto bg-black md:max-auto">
            <div className="flex flex-col md:flex-col justify-between items-center">
        <span className="text-4xl font-medium text-white ml-4 md:ml-8 mt-16 md:mt-20">
          We've Got an entire team dedicated
        </span>
                <span className="text-4xl font-medium text-white ml-4 md:ml-8">
          to supporting you & your business
        </span>
                <p className="flex flex-col text-md items-center text-white font-roboto mt-3 sm:text-sm">
                    Get help 24/7, with our support team expert TODAY.
                </p>
                <div className="h-auto flex flex-row gap-3 items-center mt-16 mb-20 rounded-full">
                    {ImagesList.map((imageData, index) => (
                        <img
                            key={index}
                            src={imageData.image}
                            alt={imageData.alt}
                            className="rounded-full w-96 h-96 "
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
