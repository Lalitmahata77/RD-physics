import Image from "next/image";
import { BookOpenIcon, VideoCameraIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

export default function PremiumExperience() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Section */}
      <div className="space-y-8">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Premium Learning <br className="hidden md:block" /> Experience
          </h2>
          <p className="text-lg text-gray-600 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            tincidunt velit. Donec bibendum turpis vitae maximus bibendum.
          </p>
        </div>

        <div className="relative bg-gradient-to-tr from-blue-100 to-purple-100 p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Quality online courses for all!
            </h3>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
          <div className="w-48 h-48 relative flex-shrink-0">
            <Image
              src="/images/o.png"
              alt="Student"
              fill
              className="object-contain rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-10">
        {[
          {
            icon: <AcademicCapIcon className="w-8 h-8 text-indigo-600" />,
            title: "Online courses from experts",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem ex, facilisis eget libero sed, mattis congue mauris."
          },
          {
            icon: <BookOpenIcon className="w-8 h-8 text-indigo-600" />,
            title: "Over 500+ high quality topics",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem ex, facilisis eget libero sed, mattis congue mauris."
          },
          {
            icon: <VideoCameraIcon className="w-8 h-8 text-indigo-600" />,
            title: "Occasional video update",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sem ex, facilisis eget libero sed, mattis congue mauris."
          },
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="group flex items-start gap-6 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
              {item.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}