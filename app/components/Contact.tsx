"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Contact() {
  const router = useRouter();

  return (
    <div>
      {/* Contact Section */}
      <section className="py-24 md:py-36 relative overflow-hidden bg-zinc-950">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-8xl font-black italic tracking-tighter leading-[1] mb-5 md:mb-12">
            " Ready to<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 px-2 md:px-5">Level Up</span>
            <br /> Your<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 px-2 md:px-5">Business?</span>"
          </h2>

          <p className="text-center text-xl md:text-md mb-20">
            Reach out today and discover how we can grow your brand in the digital space. 
          </p>

          <Link href={'/contact'}
            className="px-6 md:px-12 py-3 md:py-5 border-2 border-white rounded-full font-black text-xs uppercase tracking-[0.5em] cursor-pointer hover:bg-white hover:text-black transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
