import React from "react";
import "./AboutSection.css";


const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
        
        {/* Left Side - Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="/path-to-image1.jpg"
              alt="Student"
              className="w-80 rounded-lg shadow-lg"
            />
            <img
              src="/path-to-image2.jpg"
              alt="Studying"
              className="w-64 rounded-lg shadow-lg absolute -bottom-16 right-0 border-4 border-white"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:pl-12">
          <p className="text-green-500 text-sm font-semibold">About TheStudyWave</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            The Place Where You Can{" "}
            <span className="relative text-red-400 font-bold inline-block underline-effect">
              Achieve
            </span>
          </h2>
          <p className="text-gray-600 mt-4">
            There are many variations of passages of lorem ipsum available, but the majority have suffered.
          </p>

          {/* Mission & Vision */}
          <div className="mt-6 space-y-4">
            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                <p className="text-gray-600">To provide quality education through online platforms.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
                <p className="text-gray-600">Empowering students with knowledge and skills for the future.</p>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8">
            <a
              href="#"
              className="px-6 py-3 text-white font-semibold bg-red-400 rounded-lg shadow-lg hover:bg-red-500 border border-red-400 transition-all"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>
        {`
          .underline-effect {
            position: relative;
          }

          .underline-effect::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 100%;
            height: 6px;
            background: url('/path-to-brush-effect.png') no-repeat center;
            background-size: contain;
            opacity: 0.8;
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
