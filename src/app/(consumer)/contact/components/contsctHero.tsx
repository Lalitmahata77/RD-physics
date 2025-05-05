export default function ContactHero() {
    return (
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg2.png')", // Replace with your actual image
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
  
        <div className="relative z-10 flex justify-center items-center h-[300px]">
          <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-xl w-full">
            <h1 className="text-4xl font-semibold text-[#0B0F36]">Contact Us</h1>
            <div className="mt-3 text-sm text-gray-500 flex justify-center items-center gap-2">
              <span>Home</span>
              <span className="text-[#7E74F1] font-bold">→</span>
              <span className="text-[#7E74F1]">Contact</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  