"use client";
import React, { useState, useEffect } from "react";

// Components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  // State to track whether the header should be sticky or not
  const [header, setHeader] = useState(false);

  // Get current pathname using window.location.pathname
  const pathname = window.location.pathname;

  useEffect(() => {
    // Event listener to track scroll position and adjust header appearance
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${
        pathname === '/' && 'bg-[#fef9f5]'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
