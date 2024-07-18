import React from 'react';

const Clients = () => {
    return (
        <div className="text-center ">
            <h1 className="text-4xl font-semibold mt-8">Choose the Best Suitable Engagement Model</h1>
            <p className="">Based on your business specifications & Project Requirements</p>
            <div className="flex justify-center items-center gap-5 mt-8">
                <div className="w-1/4 h-80 bg-orange-600 rounded-2xl p-4">
                    <h1 className="text-2xl font-semibold text-white py-6">Dedicated Hiring</h1>
                    <p className="mt-4 text-white">
                        Build your own team by selecting, hiring, and managing highly skilled software developers and IT
                        experts on a long-term basis. This model is intended to help you find and engage dedicated
                        resources with the right expertise and cultural fit to ensure agile software development.
                    </p>
                </div>
                <div className="w-1/4 h-80 bg-orange-600 rounded-2xl p-4">
                    <h1 className="text-2xl font-semibold text-white py-6">Fixed Cost</h1>
                    <p className="mt-4 text-white">
                        Our project-based model, usually at a fixed price, is specifically designed to provide you with the best-in-class software development experts. This model is intended to ensure a swift and reliable collaboration between a client and our IT specialists engaged in a specific project.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Clients;
