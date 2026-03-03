"use client";
import React from 'react';
import Link from 'next/link';

export default function Servicecta() {
  return (
    <div>
      {/* CTA Section */}
      <section className="py-20 md:py-32 lg:py-40 border-t border-white/5 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          {/* Heading - Responsive */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter mb-8 sm:mb-10 md:mb-12 text-white">
            READY TO ASCEND?
          </h2>
          
          {/* CTA Button with Link */}
          <Link href="/contact" className="inline-block group">
            <button 
              className="px-12 py-5 border-2 border-white rounded-full font-black text-xs uppercase hover:tracking-[0.1em] cursor-pointer hover:bg-white hover:text-black transition-all"
            >
              Schedule a Call
            </button>
          </Link>
        </div>
      </section>
      
    </div>
  );
}