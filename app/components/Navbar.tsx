"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-black
        ${isScrolled ? "py-3 md:py-4 glass border-b border-white/10" : "py-6 md:py-8"}`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3 cursor-pointer group z-[110]">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="w-50 md:w-60 md:h-auto object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 xl:space-x-10 text-[11px] xl:text-[12px] font-black uppercase text-gray-500">
            {/* Home */}
            <Link
              href="/"
              className={`hover:text-blue-500 transition-colors cursor-pointer
                ${isActive("/") ? "text-white border-b-2 border-blue-600 pb-1" : ""}`}
            >
              Home
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`hover:text-blue-500 transition-colors cursor-pointer
                ${isActive("/about") ? "text-white border-b-2 border-blue-600 pb-1" : ""}`}
            >
              About Us
            </Link>

            {/* Services with Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className={`flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer
                ${isActive("/service") ? "text-white border-b-2 border-blue-600 pb-1" : ""}`}
              >
                Services

                <svg
                  className="w-3 h-3 text-gray-500 group-hover:text-blue-500 group-hover:rotate-180 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              <div className="absolute top-full left-0 mt-6 w-60 rounded-xl bg-black/95 backdrop-blur-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                <ul className="py-4">
                  <li>
                    <Link
                      href="/services/webdevelopment"
                      className="block w-full text-left px-6 py-3 text-[11px] xl:text-[12px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-blue-500/90 transition-all cursor-pointer"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/appdevelopment"
                      className="block w-full text-left px-6 py-3 text-[11px] xl:text-[12px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-blue-500/90 transition-all cursor-pointer"
                    >
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/graphicdesign"
                      className="block w-full text-left px-6 py-3 text-[11px] xl:text-[12px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-blue-500/90 transition-all cursor-pointer"
                    >
                      Graphic Designing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/videoediting"
                      className="block w-full text-left px-6 py-3 text-[11px] xl:text-[12px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-blue-500/90 transition-all cursor-pointer"
                    >
                      Video Editing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/digitalmarketing"
                      className="block w-full text-left px-6 py-3 text-[11px] xl:text-[12px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-blue-500/90 transition-all cursor-pointer"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/uiux"
                      className="block w-full text-left px-6 py-3 text-[11px] xl:text-[12px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-blue-500/90 transition-all cursor-pointer"
                    >
                      UI / UX
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Portfolio with Dropdown */}
            <div className="relative group">
              <Link
                href="/portfolio"
                className={`flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer uppercase
    ${pathname?.startsWith("/portfolio") ||
                    pathname?.includes("brand") ||
                    pathname?.includes("creatives") ||
                    pathname?.includes("videos") ||
                    pathname?.includes("websites")
                    ? "text-white border-b-2 border-blue-600 pb-1"
                    : ""
                  }`}
              >
                Portfolio
                <svg
                  className="w-3 h-3 text-gray-500 group-hover:text-blue-500 group-hover:rotate-180 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              <div className="absolute top-full left-0 mt-6 w-60 rounded-xl bg-black/95 backdrop-blur-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                <ul className="py-4">
                  <li>
                    <Link
                      href="/portfolio/brandidentities"
                      className="block w-full text-left px-6 py-3 text-[11px] xl:text-[12px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-blue-500/90 transition-all cursor-pointer"
                    >
                      Brand Identities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio/creatives"
                      className="block w-full text-left px-6 py-3 text-[11px] xl:text-[12px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-blue-500/90 transition-all cursor-pointer"
                    >
                      Our Creatives
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio/videos"
                      className="block w-full text-left px-6 py-3 text-[11px] xl:text-[12px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-blue-500/90 transition-all cursor-pointer"
                    >
                      Our Videos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio/websites"
                      className="block w-full text-left px-6 py-3 text-[11px] xl:text-[12px] tracking-widest uppercase text-gray-400 hover:text-white hover:bg-blue-500/90 transition-all cursor-pointer"
                    >
                      Our Websites
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Blog */}
            <Link
              href="/blog"
              className={`hover:text-blue-500 transition-colors cursor-pointer
                ${isActive("/blog") ? "text-white border-b-2 border-blue-600 pb-1" : ""}`}
            >
              Blog
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              className={`hover:text-blue-500 transition-colors cursor-pointer
                ${isActive("/contact") ? "text-white border-b-2 border-blue-600 pb-1" : ""}`}
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Hidden on mobile */}
            <Link
              href="/contact"
              className="hidden md:block px-6 xl:px-8 py-2.5 xl:py-3 bg-blue-600 text-white text-[10px] xl:text-xs font-black rounded-xl hover:bg-white hover:text-black transition-all duration-300 tracking-widest uppercase shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer"
            >
              Uplink
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden z-[110] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-black border-l border-white/10 z-[95] lg:hidden transition-transform duration-300 overflow-y-auto ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="pt-24 pb-8 px-6">
          {/* Home */}
          <Link
            href="/"
            className={`block py-4 text-sm font-black uppercase tracking-wider border-b border-white/10 transition-colors ${isActive("/") ? "text-blue-500" : "text-gray-400 hover:text-white"
              }`}
          >
            Home
          </Link>

          {/* About Us */}
          <Link
            href="/about"
            className={`block py-4 text-sm font-black uppercase tracking-wider border-b border-white/10 transition-colors ${isActive("/about") ? "text-blue-500" : "text-gray-400 hover:text-white"
              }`}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full flex justify-between items-center py-4 text-sm font-black uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "services" ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openDropdown === "services" ? "max-h-96 mb-4" : "max-h-0"
                }`}
            >
              <Link
                href="/graphic-designing"
                className="block py-3 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors"
              >
                Graphic Designing
              </Link>
              <Link
                href="/web-development"
                className="block py-3 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors"
              >
                Web Development
              </Link>
              <Link
                href="/app-development"
                className="block py-3 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors"
              >
                App Development
              </Link>
              <Link
                href="/video-editing"
                className="block py-3 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors"
              >
                Video Editing
              </Link>
              <Link
                href="/digital-marketing"
                className="block py-3 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors"
              >
                Digital Marketing
              </Link>
              <Link
                href="/ui-ux-design"
                className="block py-3 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors"
              >
                UI / UX Design
              </Link>
            </div>
          </div>

          {/* Portfolio Dropdown */}
          <div className="border-b border-white/10">
            <button
              onClick={() => toggleDropdown("portfolio")}
              className="w-full flex justify-between items-center py-4 text-sm font-black uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
            >
              Portfolio
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${openDropdown === "portfolio" ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openDropdown === "portfolio" ? "max-h-64 mb-4" : "max-h-0"
                }`}
            >
              <Link
                href="/brand-identities"
                className="block py-3 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors"
              >
                Brand Identities
              </Link>
              <Link
                href="/our-creatives"
                className="block py-3 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors"
              >
                Our Creatives
              </Link>
              <Link
                href="/our-videos"
                className="block py-3 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors"
              >
                Our Videos
              </Link>
              <Link
                href="/our-websites"
                className="block py-3 pl-6 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors"
              >
                Our Websites
              </Link>
            </div>
          </div>

          {/* Blog */}
          <Link
            href="/blog"
            className={`block py-4 text-sm font-black uppercase tracking-wider border-b border-white/10 transition-colors ${isActive("/blog") ? "text-blue-500" : "text-gray-400 hover:text-white"
              }`}
          >
            Blog
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            className={`block py-4 text-sm font-black uppercase tracking-wider border-b border-white/10 transition-colors ${isActive("/contact") ? "text-blue-500" : "text-gray-400 hover:text-white"
              }`}
          >
            Contact Us
          </Link>

          {/* Mobile CTA Button */}
          <Link
            href="/contact"
            className="block mt-8 px-8 py-4 bg-blue-600 text-white text-xs font-black rounded-xl hover:bg-white hover:text-black transition-all duration-300 tracking-widest uppercase shadow-[0_0_20px_rgba(37,99,235,0.3)] text-center"
          >
            Uplink
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;