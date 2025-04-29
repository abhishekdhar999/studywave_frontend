"use client";

import HeroSection from "../app/HeroSection/page"; // Adjust the import path based on your folder structure
import USP from "../app/USPs/page"; // Adjust the import path based on your folder structure
import About from "../app/About/page";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      <main className="w-full">
        <HeroSection />
        <USP />
        <About />
     
      </main>
    </div>
  );
}
