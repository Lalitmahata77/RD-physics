import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactSection1() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-5xl font-semibold text-[#0B0F36] mb-4">Get In Touch</h2>
          <p className="text-gray-500 mb-10">
            <span className="text-[#7E74F1]">Lorem ipsum dolor sit amet,</span> consectetur adipiscing elit. Nulla sed tincidunt velit. 
            Donec bibendum turpis vitae maximus.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#7E74F1]" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-gray-600">732 Despard St, Atlanta<br />Georgia 30060</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[#7E74F1]" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-600">example@mail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#7E74F1]" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-600">+1 234 567 809</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow border rounded-2xl p-8">
          <form className="space-y-6">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-3 rounded-full border outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-3 rounded-full border outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-full border outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-3 rounded-2xl border outline-none h-32 resize-none"
            />
            <button
              type="submit"
              className="bg-[#7E74F1] text-white px-10 py-3 rounded-full hover:bg-indigo-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
