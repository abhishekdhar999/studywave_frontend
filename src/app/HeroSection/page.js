"use client"
import Link from "next/link";
export default function HeroSection() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
          Welcome to <span className="text-blue-600">ClassManager</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-center max-w-xl">
          Manage your Zoom classes, track your schedule, and simplify your teaching or learning experience.
        </p>
        <div className="flex gap-6">
          <Link href="/Login">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
          <Link href="/RegisterClass">
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 transition">
              Register Class
            </button>
          </Link>
        </div>
      </div>
    );
  }
  