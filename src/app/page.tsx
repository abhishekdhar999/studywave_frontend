<<<<<<< HEAD
"use client";
=======
"use client"
import Navbar from "./Components/Navbar/Navbar.js"
import HeroSection from "./HeroSection/page.js"
>>>>>>> c8db2762dd1364b1427013465f8840d3f607998f

import HeroSection from "../app/HeroSection/page"; // Adjust the import path based on your folder structure
import USP from "../app/USPs/page"; // Adjust the import path based on your folder structure
import About from "../app/About/page";
export default function Home() {
  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center w-full bg-white">
      <main className="w-full">
        <HeroSection />
        <USP />
        <About />
     
      </main>
    </div>
=======
    <>
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    
    </>
>>>>>>> c8db2762dd1364b1427013465f8840d3f607998f
  );
}
