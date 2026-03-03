"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Aboutcall() {
  const router = useRouter();

  return (
    <div>
      {/* Final Call */}
      <section className="py-32 sm:py-40 bg-black text-center">
        <div className="container mx-auto px-4 sm:px-6">
          
          <p className="text-blue-500 font-black text-[12px] uppercase mb-10 sm:mb-12">
            The Mission
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-12 sm:mb-16 leading-snug sm:leading-tight md:leading-[0.9]">
            LEVEL UP IS NOT AN AGENCY. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
              IT IS A SYSTEM UPGRADE.
            </span>
          </h2>

          <button
            onClick={() => router.push("/contact")}
            className="px-10 sm:px-14 md:px-16 py-4 sm:py-5 md:py-6 border border-white rounded-full font-black text-xs sm:text-sm uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            Initiate Contact
          </button>

        </div>
      </section>
    </div>
  );
}
