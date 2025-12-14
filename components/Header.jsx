"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  // State to track whether the header should be sticky or not
  const [header, setHeader] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Use Next.js usePathname hook instead of window.location
  const pathname = usePathname();

  useEffect(() => {
    // Mark component as mounted
    setMounted(true);
    
    // Event listener to track scroll position and adjust header appearance
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Compute className based on mounted state to avoid hydration mismatch
  const getHeaderClasses = () => {
    const baseClasses = "sticky top-0 z-30 transition-all";
    
    // Use consistent initial state for SSR and first client render
    if (!mounted) {
      return `py-6 dark:bg-transparent ${pathname === '/' ? 'bg-[#fef9f5]' : ''} ${baseClasses}`;
    }
    
    // After hydration, apply scroll-based styles
    const scrollClasses = header
      ? 'py-4 bg-white shadow-lg dark:bg-accent'
      : 'py-6 dark:bg-transparent';
    
    const homeClasses = pathname === '/' && !header ? 'bg-[#fef9f5]' : '';
    
    return `${scrollClasses} ${homeClasses} ${baseClasses}`;
  };

  return (
    <header className={getHeaderClasses()}>
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