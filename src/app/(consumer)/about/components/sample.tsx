export default function AboutUs() {
    const people = [
      {
        name: "Student One",
        image: "/images/p.png", // Replace with actual image paths
      },
      {
        name: "Group Shot",
        image: "/images/j.png",
      },
      {
        name: "Student Two",
        image: "/images/o.png",
      },
    ];
  
    return (
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Title & Breadcrumb */}
          <h1 className="text-5xl font-semibold text-[#0B0F36]">About Us</h1>
          <div className="mt-3 text-gray-500 text-sm flex justify-center items-center gap-2">
            <span>Home</span>
            <span className="text-[#7E74F1] font-bold">→</span>
            <span className="text-[#7E74F1]">About</span>
          </div>
  
          {/* Team Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {people.map((person, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl overflow-hidden shadow-md p-4"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  