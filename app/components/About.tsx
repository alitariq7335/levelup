"use client";
import React from "react";

const OurStory: React.FC = () => {
  const services = [
    {
      title: "Results-Driven Strategies:",
      description:
        "Every campaign is designed to achieve measurable results.",
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
    <section className="bg-zinc-950 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">

          {/* Left Column */}
          <div className="space-y-8 md:space-y-10 flex flex-col justify-between">

            {/* Heading */}
            <div>
              <div className="flex items-start gap-3 mb-6 md:mb-8">
                <div className="w-3 h-16 md:h-12 bg-blue-500 relative lg:top-3"></div>

                <div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    Our <span className="text-blue-500">Vision</span>
                  </h2>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    To be the digital marketing agency that empowers every business to lead and succeed online.
                    We aim to transform the way brands connect with their audience and become a benchmark for innovation, growth, and online excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Large Image */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden">
              <img
                src="/assets/creatives.webp"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* right Column */}
          <div className="space-y-8 md:space-y-10 flex flex-col justify-between">

            {/* Large Image */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden">
              <img
                src="/assets/creatives.webp"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Heading */}
            <div>
              <div className="flex items-start gap-3 mb-6 md:mb-8">
                <div className="w-3 h-16 md:h-12 bg-blue-500 relative lg:top-3"></div>

                <div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    Our <span className="text-blue-500">Mission</span>
                  </h2>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    To provide cutting-edge digital marketing solutions that
                    drive measurable results for our clients. Through SEO,
                    social media, PPC, content, and web strategies, we help
                    businesses grow, engage, and convert their audience while
                    staying ahead in the competitive digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;