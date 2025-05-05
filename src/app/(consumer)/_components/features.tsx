import Image from 'next/image';
import { Pencil, Home, Settings, Flag } from 'lucide-react'; 
const features = [
  {
    icon: <Pencil className="w-6 h-6 text-white" />,
    title: 'Expert Tutor',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum tortor aliquam nisl.',
  },
  {
    icon: <Home className="w-6 h-6 text-white" />,
    title: 'Lifetime Access',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum tortor aliquam nisl.',
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: 'Updated Material',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum tortor aliquam nisl.',
  },
  {
    icon: <Flag className="w-6 h-6 text-white" />,
    title: 'Weekly Event',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum tortor aliquam nisl.',
  },
];

export default function LearningFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Section */}
      <div>
        <div className="grid grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-indigo-400 rounded-xl p-3">{f.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{f.title}</h4>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-10 px-8 py-3 bg-indigo-400 text-white rounded-full font-medium hover:bg-indigo-500 transition">
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Making Your Learning More Enjoyable</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed tincidunt velit.
          Donec bibendum turpis vitae maximus bibendum. Mauris aliquam sapien eget ipsum dictum,
          eget euismod nisl consequat.
        </p>
        <p className="text-gray-600 mb-6">
          Maecenas mattis, dui condimentum aliquet eleifend, enim nulla pharetra nunc.
        </p>
        <div className="relative  w-fit">
          <Image
            src="/images/o.png"
            alt="Student"
            width={400}
            height={300}
            className="rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-white rounded-full p-4 shadow-md">
              <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
