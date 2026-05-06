"use client";
import React from "react";

const Whychoose: React.FC = () => {
    const services = [
        {
            title: "Results-Driven Strategies:",
            description: "Every campaign is designed to achieve measurable results.",
        },
        {
            title: "Expert Team:",
            description: "Our certified experts stay ahead of trends to give your business the competitive edge.",
        },
        {
            title: "Transparent Reporting:",
            description: "Track your success with detailed analytics and reports.",
        },
        {
            title: "Customized Solutions:",
            description: "Tailored strategies that align with your brand’s unique goals.",
        },
    ];

    return (
        <section className="bg-black py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">

                    {/* left Column */}
                    <div className="order-2 lg:order-1 space-y-8 md:space-y-10 flex flex-col justify-between">

                        {/* Heading */}
                        <div>
                            <div className="flex flex-col items-start gap-3 mb-6 md:mb-8">


                                <div className="flex items-start gap-3">
                                <div className="w-1 h-16 md:h-12 bg-blue-500 relative lg:top-3"></div>

                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                                        Why <span className="text-blue-500">Choose Us</span>
                                    </h2>

                                </div>
                                {/* Services List */}
                                <div className="container mx-auto max-w-4xl">
                                    <ul className="space-y-4 md:space-y-6">
                                        {services.map((service, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                {/* Dot */}
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>

                                                {/* Text */}
                                                <span className="text-white text-base md:text-lg leading-relaxed">
                                                    <span className="font-semibold">
                                                        {service.title}
                                                    </span>

                                                    {service.description && (
                                                        <span className="text-gray-400 font-normal">
                                                            {" "}{service.description}
                                                        </span>
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* right Column */}
                    <div className="order-1 lg:order-2 space-y-6 md:space-y-8">

                        {/* Top Image */}
                        <div className="grid grid-cols-1 gap-4 md:gap-6">
                            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group">
                                <img
                                    src="/assets/creatives.webp"
                                    alt="Tech professional"
                                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute top-4 right-4 flex gap-2">
                                    <span className="px-3 py-1.5 bg-gray-800/90 backdrop-blur-sm rounded-full text-white text-[10px] md:text-xs font-medium border border-gray-700">
                                        Tech Blog
                                    </span>
                                    <span className="px-3 py-1.5 bg-gray-800/90 backdrop-blur-sm rounded-full text-white text-[10px] md:text-xs font-medium border border-gray-700">
                                        Trends
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Whychoose;