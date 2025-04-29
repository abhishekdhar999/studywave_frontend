"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white pt-20"  >
      {/* Animated Circles (Shared for Hero & Trusted by Parents Sections) */}
      <motion.div
        className="absolute w-96 h-96 bg-orange-300 rounded-full opacity-50"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "20%", left: "60%" }}
      ></motion.div>
      <motion.div
        className="absolute w-72 h-72 bg-red-200 rounded-full opacity-40"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "40%", left: "10%" }}
      ></motion.div>
      <motion.div
        className="absolute w-80 h-80 bg-green-200 rounded-full opacity-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "70%", left: "80%" }}
      ></motion.div>

      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center relative z-10 px-12 lg:px-20">
        {/* Left: Text Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1 className="text-6xl font-bold text-black leading-tight">
            Classical <span className="text-orange-500 underline">Education</span> For The Future
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            It is a long-established fact that a reader will be distracted by the readable content.
          </p>
          {/* Book a Free Class Button */}
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-orange-600 transition duration-300">
            Book a Free Class Now
          </button>
          {/* Icons Section */}
          <div className="mt-6 flex justify-center lg:justify-start space-x-6 items-center">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500 text-2xl">📹</span>
              <p className="text-black font-semibold">Live 1:1 Classes</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-500 text-2xl">😊</span>
              <p className="text-black font-semibold">For ages 6-16</p>
            </div>
          </div>
        </div>

        {/* Right: Image and Badges */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          <img
            src="https://cdn.prod.website-files.com/61f64598c68d4ab53ecff616/66decb3ff9373371e32ec1bd_Hero%20Img.avif"
            alt="Student"
            className="w-full h-auto rounded-lg shadow-lg"
          />

          {/* Course Badge */}
          <div className="absolute top-5 left-5 bg-white shadow-md p-4 rounded-lg flex items-center">
            <div className="bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
              📘
            </div>
            <div className="ml-3">
              <p className="text-orange-500 font-bold text-xl">2829+</p>
              <p className="text-black text-sm">Total Courses</p>
            </div>
          </div>

          {/* Certification Badge */}
          <div className="absolute bottom-5 right-5 bg-white shadow-md p-3 rounded-full border-4 border-orange-500">
            <p className="text-black font-semibold text-sm">100% Certification Guarantee</p>
          </div>
        </div>
      </div>

      {/* Trusted by Parents Section */}
      <div className="relative w-auto max-w-6xl mx-auto mt-4 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Serving Quality Education Worldwide</h2>
        <div className="flex space-x-6">
          <img src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/4ff7da8c57243bf8f74ad935c4e48e6f8e6829cc/flag-us-svgrepo-com.svg" alt="USA" className="w-32 h-24 rounded-md" />
          <img src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/4ff7da8c57243bf8f74ad935c4e48e6f8e6829cc/canada-svgrepo-com.svg" alt="Canada" className="w-32 h-24 rounded-md" />
          <img src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/4ff7da8c57243bf8f74ad935c4e48e6f8e6829cc/flag-for-flag-australia-svgrepo-com.svg" alt="Australia" className="w-32 h-24 rounded-md" />
          <img src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/4ff7da8c57243bf8f74ad935c4e48e6f8e6829cc/united-kingdom-uk-svgrepo-com.svg" alt="United Kingdom" className="w-32 h-24 rounded-md" />
          <img src="https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/4ff7da8c57243bf8f74ad935c4e48e6f8e6829cc/flag-for-flag-poland-svgrepo-com.svg" alt="Poland" className="w-32 h-24 rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
