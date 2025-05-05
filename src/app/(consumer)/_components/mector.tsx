import Image from 'next/image';

export default function MentorsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Meet Our Mentors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed tincidunt velit. 
          Donec bibendum turpis vitae maximus biberdum.
        </p>
      </div>

      <div className="border-t border-b border-gray-200 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { 
              name: "Stan McGyver", 
              role: "Mentor",
              image: "/images/j.png" 
            },
            { 
              name: "Gordon Stone", 
              role: "Mentor",
              image: "/images/j.png" 
            },
            { 
              name: "Lisa Rosse", 
              role: "Mentor",
              image: "/images/j.png" 
            },
            { 
              name: "Mulan Park", 
              role: "Mentor",
              image: "/images/j.png" 
            },
          ].map((mentor, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
              <p className="text-gray-600 mt-2">{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <a 
          href="#"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
        >
          View More
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
}