"use client";
import React from 'react';

const OurStory: React.FC = () => {
  const stats = [
    { number: "10k+", label: "Completed Projects" },
    { number: "15k", label: "Satisfied Customers" },
    { number: "10k+", label: "Years Of Mastery" },
    { number: "45+", label: "Worldwide Honors" }
  ];


  const services = [
    { left: "Graphic Design", right: "Printing" },
    { left: "Events & Exhibitions", right: "Web Design & Development" },
    { left: "Mobile Applications", right: "Digital Marketing" },
    { left: "Consulting & Planning", right: "2D Animated Video" },
    { left: "Media Production & Photography", right: "" }
  ];

  return (
    <section className="bg-black py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">

          {/* Left Column - Main Content */}
          <div className="space-y-8 md:space-y-10 flex flex-col justify-between">
            {/* Heading Section */}
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-2 h-16 md:h-20 bg-blue-500 relative lg:-top-7  left-0"></div>
                <div>
                  <p className="text-blue-500 uppercase text-[12px] md:text-xs font-black">
                    OUR STORY
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    WHAT WE{" "}
                    <span className="text-blue-500">DO</span>
                  </h2>
                  <p className="text-gray-400">
                    We have the Creative Team to help market your business, from full advertising services such as:
                  </p>
                </div>
              </div>
            </div>

            {/* Large Team Image */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden">
              <img
                src="/assets/creatives.webp"
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Images, Description, Stats */}
          <div className="space-y-6 md:space-y-8">
            {/* Top Two Images with Badges */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Image 1 */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group">
                <img
                  src="/assets/creatives.webp"
                  alt="Tech professional"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
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

              {/* Image 2 */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden group">
                <img
                  src="/assets/creatives.webp"
                  alt="Team meeting"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
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

            {/* Description Text */}
              <div className="container mx-auto max-w-4xl">
                <ul className="space-y-4 md:space-y-6">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-8"
                    >
                      {/* Left Service */}
                      <div className="flex items-center gap-3 md:w-1/2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                        <span className="text-white text-base md:text-lg font-medium">
                          {service.left}
                        </span>
                      </div>

                      {/* Right Service */}
                      {service.right && (
                        <div className="flex items-center gap-3 md:w-1/2 ml-0">
                          <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                          <span className="text-white text-base md:text-lg font-medium">
                            {service.right}
                          </span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;