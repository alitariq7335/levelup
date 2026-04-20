"use client";
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    client: "Aether Dynamics",
    location: "London, UK",
    quote: "Level Up redefined our digital architecture. Their approach to minimalist UX combined with aggressive SEO resulted in a 300% growth in our EMEA pipeline.",
    identity: "Protocol V.09 Verified"
  },
  {
    client: "Zaman Holdings",
    location: "Lahore, PK",
    quote: "The bridge they've built between local insight and international standards is unparalleled. Our brand now competes at a global scale while staying true to its roots.",
    identity: "Protocol V.12 Verified"
  },
  {
    client: "Lumina Retail",
    location: "Dubai, UAE",
    quote: "Their AI-driven social strategy didn't just give us followers; it gave us a culture. They are the only agency that understands the future of the digital narrative.",
    identity: "Protocol V.07 Verified"
  },
  {
    client: "Nova Systems",
    location: "Singapore, SG",
    quote: "Their technical expertise and creative vision transformed our outdated platform into a cutting-edge digital experience.",
    identity: "Protocol V.11 Verified"
  },
  {
    client: "Stellar Corp",
    location: "New York, USA",
    quote: "Level Up didn't just build a website, they built our entire digital ecosystem. The ROI has been phenomenal.",
    identity: "Protocol V.08 Verified"
  },
  {
    client: "Quantum Tech",
    location: "Berlin, DE",
    quote: "A rare agency that combines data-driven strategy with exceptional design. Our conversion rates tripled within 6 months.",
    identity: "Protocol V.10 Verified"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Duplicate testimonials for infinite loop
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle infinite loop reset
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700);
    }
    
    if (currentIndex === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length - 1);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 700);
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  // Calculate slides per view based on screen size
  const slidesPerView = isMobile ? 1 : 3;

  return (
    <div>
      {/* Testimonials Section */}
      <section className="py-20 md:py-32 lg:py-40 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between text-center md:text-start mb-12 md:mb-20 lg:mb-24 gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h3 className="text-blue-500 font-black uppercase text-[12px] mb-3 md:mb-4 lg:mb-6">
                Client Synchronicity
              </h3>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none md:leading-none">
                VOICES FROM <br /> THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">NETWORK.</span>
              </h2>
            </div>
            <p className="text-gray-500 uppercase tracking-wider sm:tracking-widest text-[10px] sm:text-[11px] font-bold md:border-l border-blue-600 md:pl-6 max-w-xs leading-relaxed">
              Verified success protocols across international and regional sectors.
            </p>
          </div>

          {/* Slider Container */}
          <div 
            className="relative overflow-hidden px-0 md:px-4"
            onMouseEnter={() => !isMobile && setIsAutoPlaying(false)}
            onMouseLeave={() => !isMobile && setIsAutoPlaying(true)}
          >
            {/* Testimonials Sliding Container */}
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ 
                transform: `translateX(-${(currentIndex + testimonials.length) * (100 / slidesPerView)}%)`,
              }}
            >
              {extendedTestimonials.map((t, i) => (
                <div
                  key={i}
                  className={`w-full ${isMobile ? 'md:w-full' : 'md:w-1/3'} flex-shrink-0 px-3 sm:px-4`}
                >
                  <div className="group relative glass p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl md:rounded-[3rem] border border-white/5 hover:border-blue-500/20 transition-all duration-700 h-full">
                    {/* Quote Icon */}
                    <div className="absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 text-blue-600/20 group-hover:text-blue-600 transition-colors duration-500">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM16.017 16V14C16.017 10.134 19.151 7 23 7V5C18.0294 5 14.017 9.02944 14.017 14V16ZM5 16V14C5 10.134 8.13401 7 12 7V5C7.02944 5 3 9.02944 3 14V16H5Z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="mb-6 sm:mb-8">
                      <div className="inline-block px-2.5 sm:px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[7px] sm:text-[8px] font-black uppercase tracking-wider sm:tracking-widest text-blue-400 mb-4 sm:mb-5 md:mb-6">
                        {t.identity}
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-300 italic leading-relaxed font-light group-hover:text-white transition-colors duration-500">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-6 sm:pt-8 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <h4 className="text-base sm:text-lg font-black uppercase tracking-tighter text-white">
                          {t.client}
                        </h4>
                        <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider sm:tracking-widest mt-1">
                          {t.location}
                        </p>
                      </div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Hidden on mobile */}
            <button
              onClick={prevSlide}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 lg:-translate-x-12 xl:-translate-x-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 border border-white/10 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 items-center justify-center group z-20"
              aria-label="Previous testimonials"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 lg:translate-x-12 xl:translate-x-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/80 border border-white/10 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 items-center justify-center group z-20"
              aria-label="Next testimonials"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-black/80 border border-white/10 active:bg-blue-600 active:border-blue-600 transition-all duration-300 flex items-center justify-center"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-black/80 border border-white/10 active:bg-blue-600 active:border-blue-600 transition-all duration-300 flex items-center justify-center"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 sm:gap-3 mt-10 sm:mt-12 md:mt-16">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 cursor-pointer ${
                  (currentIndex % testimonials.length) === index
                    ? 'w-8 sm:w-10 md:w-12 h-1.5 sm:h-2 bg-blue-600'
                    : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 hover:bg-white/40'
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Decorative Grid Lines */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] md:opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        ></div>
      </section>
    </div>
  );
}