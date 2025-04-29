import React, { useState } from "react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "General Studies",
    subtitle: "Build Strong Foundations",
    ageGroup: "6-12 years",
    color: "bg-orange-500",
    outcomes: [
      "Master Math concepts with ease",
      "Improve English grammar and comprehension",
      "Explore Science through experiments",
    ],
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F4%2FChild-PNG-Image.png&f=1&nofb=1",
  },
  {
    title: "Foundation",
    subtitle: "Building Blocks of Technology",
    ageGroup: "6-9 years",
    color: "bg-orange-500",
    outcomes: [
      "Build a robot to perform basic tasks",
      "Program interactive games",
      "Create an AI project",
    ],
    image: "/path-to-your-image.png",
  },
  {
    title: "Competitive Exams",
    subtitle: "Prepare for Success",
    ageGroup: "10-16 years",
    color: "bg-orange-500",
    outcomes: [
      "Excel in Selective School Exams",
      "Boost NAPLAN performance",
      "Crack SAT & other standardized tests",
    ],
    image: "/path-to-competitive-exam-image.png",
  },
];

const StudyPrograms = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="px-6 md:px-20 lg:px-32 py-10 flex flex-wrap gap-6 justify-center relative">
      {programs.map((program, index) => (
        <div
          key={index}
          className="w-[350px] flex flex-col rounded-xl overflow-hidden shadow-lg bg-white relative"
        >
          {/* Top Section */}
          <div className={`${program.color} text-white p-5 relative rounded-t-xl`}>
            <h2 className="text-xl font-bold">{program.title}</h2>
            <p className="text-sm">{program.subtitle}</p>

            {/* Age Group Circle */}
            <div className="absolute top-4 right-4 bg-white text-black text-[14px] font-semibold w-16 h-16 flex flex-col items-center justify-center rounded-full shadow-md">
              <span className="text-lg font-bold">{program.ageGroup.split(" ")[0]}</span>
              <span className="text-xs">years</span>
            </div>
          </div>

          {/* Outcome Section */}
          <div className="bg-gray-100 px-5 py-6 flex flex-col flex-grow">
            <h3 className="font-bold text-lg text-gray-700">Outcome</h3>
            <ul className="mt-2 text-gray-700">
              {program.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500">✨</span> {outcome}
                </li>
              ))}
            </ul>

            {/* Image */}
            <div className="flex justify-center mt-6">
              <img
                src={program.image}
                alt={program.title}
                className="w-40 h-auto object-contain"
              />
            </div>
          </div>

          {/* Button with Hover Animation */}
          <div
            className="relative w-full p-4 flex justify-center items-center cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Bubble animation on hover */}
            {hoverIndex === index && (
              <motion.div
                className="absolute w-28 h-28 bg-orange-200 rounded-full opacity-30"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ top: "-50%", left: "50%", transform: "translateX(-50%)" }}
              />
            )}

            {/* Button */}
            <motion.button
  className="relative z-10 w-full px-6 py-2 rounded-md text-black font-semibold transition-colors border-2 border-orange-500 hover:bg-orange-500"
  whileHover={{
    backgroundColor: "#f97316",
    color: "#fff",
    borderColor: "#f97316",
  }}
>
  Book a Free Class ↗
</motion.button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default StudyPrograms;
