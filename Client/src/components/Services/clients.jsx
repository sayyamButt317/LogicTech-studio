import React from 'react';

const Clients = () => {
    return (
        <div className="text-center px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl sm:text-4xl font-semibold mt-8">
                Choose the Best Suitable Engagement Model
            </h1>
            <p className="text-base sm:text-lg mt-4">
                Based on your business specifications & Project Requirements
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-8">
                <div className="w-full sm:w-1/2 lg:w-1/4 h-auto bg-orange-600 rounded-2xl p-4">
                    <h1 className="text-xl sm:text-2xl font-semibold text-white py-4">
                        Dedicated Hiring
                    </h1>
                    <p className="text-sm sm:text-base text-white">
                        Build your own team by selecting, hiring, and managing highly skilled software developers and IT
                        experts on a long-term basis. This model is intended to help you find and engage dedicated
                        resources with the right expertise and cultural fit to ensure agile software development.
                    </p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 h-auto bg-orange-600 rounded-2xl p-4">
                    <h1 className="text-xl sm:text-2xl font-semibold text-white py-4">
                        Fixed Cost
                    </h1>
                    <p className="text-sm sm:text-base text-white">
                        Our project-based model, usually at a fixed price, is specifically designed to provide you with the best-in-class software development experts. This model is intended to ensure a swift and reliable collaboration between a client and our IT specialists engaged in a specific project.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Clients;
