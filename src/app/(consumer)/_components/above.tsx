import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPlay, FaPhoneAlt } from 'react-icons/fa';

const Above = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl w-full mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10 rounded-3xl bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 shadow-lg">
        {/* Left Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/p.png" // Place your image in the /public directory
            alt="Student"
            width={500} // Specify the width
            height={500} // Specify the height
            className="w-full object-cover rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Providing Amazing <br />
            Online Courses
          </h1>
          <p className="text-gray-700 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full text-lg">
              <FaPlay className="text-white" />
              Watch Video
            </button>
            <button className="flex items-center gap-2 text-indigo-700 font-medium text-lg">
              <FaPhoneAlt />
              <Link href={`https://wa.me/9779769884993`}>
              Contact Us</Link>
            
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Above;