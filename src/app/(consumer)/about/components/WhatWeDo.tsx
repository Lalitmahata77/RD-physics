export default function WhatWeDo() {
    return (
      <section className="py-20 bg-white text-center px-6 md:px-0">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0B0F36] mb-6">
          Little Somebodies Are What We Do
        </h2>
  
        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis nisl, 
          lobortis sodales lacinia ac, maximus eleifend lorem. Cras maximus sed ligula sit 
          amet commodo. Mauris sem turpis, molestie sit amet tristique eget, dictum vel odio.
        </p>
  
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {/* Stat 1 */}
          <div>
            <h3 className="text-violet-500 text-4xl font-bold">940 +</h3>
            <p className="text-gray-600 mt-2">Online Courses</p>
          </div>
  
          {/* Stat 2 */}
          <div>
            <h3 className="text-violet-500 text-4xl font-bold">17 K</h3>
            <p className="text-gray-600 mt-2">Active Users</p>
          </div>
  
          {/* Stat 3 */}
          <div>
            <h3 className="text-violet-500 text-4xl font-bold">24 / 7</h3>
            <p className="text-gray-600 mt-2">Consultations</p>
          </div>
        </div>
      </section>
    );
  }
  