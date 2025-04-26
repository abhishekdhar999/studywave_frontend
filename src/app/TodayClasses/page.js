'use client';

import { DynaPuff } from "next/font/google";
import { useEffect, useState } from "react";
import ClassCard from "../Components/ClassCard/ClassCard.js";
import { classes, users } from "../Database/db.js";

const DynaPuffs = DynaPuff({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const DynaPuffs2 = DynaPuff({
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
});

export default function TodayClasses() {
  const [todayClasses, setTodayClasses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    const refreshToken = localStorage.getItem("token");
    const user = users.find(user => user.refreshTokken === refreshToken);
    if (!user) return;

    setLoggedInUser(user);
    const userId = user._id;
    const isTeacher = user.role === "Teacher";
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const filtered = classes.filter(cls =>
      cls.days.includes(today) &&
      (isTeacher ? cls.teacher === userId : cls.students.includes(userId))
    );

    setTodayClasses(filtered);
  }, []);

  return (
    <>
      <div className="bg-[#ffe4d2]">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center p-6 md:p-12">
          <div className="max-w-[800px] text-center">
            <p className={`text-6xl md:text-7xl lg:text-7xl font-bold text-black ${DynaPuffs.className}`}>
              "Bringing classroom concepts to life through interactive learning"
            </p>
          </div>

          <div className="max-w-[600px] mt-6 text-center">
            <p className="text-lg font-bold md:text-xl text-black">
              From your first step  into learning <span className="text-4xl  font-extrabold">*</span> to the heights of your biggest achievements, 
              we guide you to learn with passion, grow with confidence, and shine with purpose.
            </p>
          </div>

<div className="flex justify-center gap-24 m-12">
          <div className="w-46 h-16 bg-green-300 border-2 border-black  text-black rounded-full text-center flex justify-center items-center text-xl">
  About us
</div>

<div className="w-46 h-16 bg-purple-300 border-2 border-black  text-black rounded-full text-center flex justify-center items-center text-xl">
  +91 8082810157
</div>
</div>

          {/* STUDYWAVE heading */}
          <h1 className={`mt-10 text-6xl md:text-8xl font-bold text-center ${DynaPuffs2.className}`}>
            <span className="image-textS">S</span>
            <span className="image-textT">T</span>
            <span className="image-textU">U</span>
            <span className="image-textD">D</span>
            <span className="image-textY">Y</span>
            <span className="image-textW">W</span>
            <span className="image-textA">A</span>
            <span className="image-textV">V</span>
            <span className="image-textE">E</span>
          </h1>
        </div>



        {/* Scrolling Carousel */}
        <div className="overflow-hidden whitespace-nowrap w-full">
<div className="flex gap-24 animate-carousel ">
  {/* First image */}
  <div className="relative min-w-[200px] max-w-[20vw]  h-80 bg-rose-300 rounded-t-full overflow-hidden">
    <img
      src="/one.png"
      alt="Student 1"
      className="absolute top-12 bottom-0 w-full object-cover h-72"
    />
  </div>

  {/* Second image */}
  <div className="relative  min-w-[200px] w-[140vw] h-80 bg-amber-300 rounded-full overflow-hidden">
    <img
      src="two.png"
      alt="Student 2"
      className="absolute bottom-0 w-full object-cover h-72"
    />
  </div>

  <div className="relative min-w-[200px] w-[140vw] h-80 bg-blue-400 rounded-4xl overflow-hidden">
    <img
      src="three.png"
      alt="Student 2"
      className="absolute bottom-0 w-full object-cover h-72"
    />
  </div>

  <div className="relative min-w-[200px] w-[140vw] h-80 bg-orange-300 rounded-tl-full overflow-hidden">
    <img
      src="four.png"
      alt="Student 2"
      className="absolute left-9 bottom-0 w-full object-cover h-72"
    />
  </div>

  <div className="relative min-w-[200px] w-[140vw] h-80 bg-purple-400 rounded-b-full overflow-hidden">
    <img
      src="five.png"
      alt="Student 2"
      className="absolute  bottom-0 w-full object-cover h-72"
    />
  </div>
  
  <div className="relative min-w-[200px] w-[140vw] h-80 bg-green-300 rounded-full overflow-hidden">
    <img
      src="six.png"
      alt="Student 2"
      className="absolute bottom-0 w-full object-cover h-72"
    />
  </div>

  {/* First image */}
  <div className="relative min-w-[200px] w-[140vw] h-80 bg-rose-300 rounded-t-full overflow-hidden">
    <img
      src="/one.png"
      alt="Student 1"
      className="absolute top-12 bottom-0 w-full object-cover"
    />
  </div>

  {/* Second image */}
  <div className="relative min-w-[200px]] w-[140vw] h-80 bg-amber-300 rounded-full overflow-hidden">
    <img
      src="two.png"
      alt="Student 2"
      className="absolute bottom-0 w-full object-cover h-72"
    />
  </div>

  <div className="relative min-w-[200px] w-[140vw] h-80 bg-blue-400 rounded-4xl overflow-hidden">
    <img
      src="three.png"
      alt="Student 2"
      className="absolute bottom-0 w-full object-cover h-72"
    />
  </div>

  <div className="relative min-w-[200px] w-[140vw] h-80 bg-orange-200 rounded-tl-full overflow-hidden">
    <img
      src="four.png"
      alt="Student 2"
      className="absolute left-9 bottom-0 w-full object-cover h-72"
    />
  </div>

  <div className="relative min-w-[200px] w-[140vw] h-80 bg-purple-400 rounded-b-full overflow-hidden">
    <img
      src="five.png"
      alt="Student 2"
      className="absolute  bottom-0 w-full object-cover h-72"
    />
  </div>
  
  <div className="relative min-w-[200px] w-[140vw] h-80 bg-green-300 rounded-full overflow-hidden">
    <img
      src="six.png"
      alt="Student 2"
      className="absolute bottom-0 w-full object-cover h-72"
    />
  </div>
</div>
</div>


        {/* Today's Classes Banner */}
        <div className="m-12 md:m-18 flex justify-center">
          <img className="rounded-3xl w-full max-w-5xl" src="/todaysClassBanner.png" alt="Today's Classes Banner" />
        </div>

        {/* Welcome Section */}
        {/* <div className="text-black text-center p-6">
          <h2 className={`text-4xl md:text-5xl ${DynaPuffs.className}`}>
            hola namaste welcome
          </h2>
          <h1 className="text-5xl font-serif md:text-8xl font-extrabold mt-4">
            {loggedInUser?.name}
          </h1>
        </div> */}

        {/* Today's Classes Cards */}
        <div className="p-6">
          {todayClasses.length > 0 ? (
            <div className="">
              {todayClasses.map(cls => (
                <ClassCard key={cls._id} classData={cls} />
              ))}
            </div>
          ) : (
            <div className="text-center text-xl text-gray-500">No classes today!</div>
          )}
        </div>
      </div>
    </>
  );
}
