import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <main className="bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe] min-h-screen ">
      <div className="mx-auto px-6 py-7 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left ml-0 lg:ml-44">
          <h1 className="text-5xl font-semibold text-gray-900">
            The Best Online <br />
            Course You&apos;ll Find
          </h1>
          <p className="text-gray-600 text-shadow-lg mt-10 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full text-lg">
              Get Started
            </Button>
            <button className="flex items-center text-indigo-600 text-lg">
              <svg
                className="w-6 h-6 mr-2 fill-indigo-600"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Video
            </button>
          </div>
          {/* Stats */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-gray-900">940 +</h2>
              <p className="text-gray-600 mt-1">Online Course</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h2 className="text-3xl font-bold text-gray-900">17 K</h2>
              <p className="text-gray-600 mt-1">Active Users</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-full mb-10 lg:mb-0">
          <Image
            src="/images/j.png" // Updated path to point to the public directory
            alt="Happy Student"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;