import {
    Facebook,
    Twitter,
    Youtube,
    Instagram,
    MapPin,
    Phone,
    Mail,
    Clock,
  } from 'lucide-react';
  
  export default function Footer() {
    return (
      <footer className="bg-white pt-12 mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">
          {/* Logo and Social */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-2 h-10 bg-violet-600 rounded-l-sm mr-2" />
              <h2 className="text-2xl font-semibold">Studdy</h2>
            </div>
            <p className="text-sm mb-6">
              Lorem ipsum dolor sit amet, consect tetur adipiscing elit.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="bg-violet-400 text-white p-2 rounded-full hover:bg-violet-500">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
  
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Address</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="text-violet-500" size={16} />
                732 Despard St, Atlanta
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-violet-500" size={16} />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-violet-500" size={16} />
                anymail@mail.com
              </li>
              <li className="flex items-center gap-2">
                <Clock className="text-violet-500" size={16} />
                09.00 - 17.00
              </li>
            </ul>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'About', 'FAQs', 'Blog', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-violet-600">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              <button
                type="submit"
                className="bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-full transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 pb-4 text-sm text-center md:text-left md:flex justify-between px-6 md:px-12 text-gray-600">
          <p>Copyright © 2021 ASK Project</p>
          <div className="flex gap-4 justify-center mt-2 md:mt-0">
            <a href="#" className="hover:text-violet-500">Privacy Policy</a>
            <a href="#" className="hover:text-violet-500">Terms & Services</a>
          </div>
        </div>
      </footer>
    );
  }
  