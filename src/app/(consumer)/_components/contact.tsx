import { Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-cyan-100 to-indigo-100 rounded-2xl p-10 text-center mx-auto max-w-5xl shadow-lg">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Ready to start learning? Contact us!
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed tincidunt velit.
      </p>
      <p className="text-gray-600 mb-8">Donec bibendum turpis.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="tel:+1234567890"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-500 text-white rounded-full text-lg shadow hover:bg-violet-600 transition"
        >
          <Phone className="w-5 h-5" />
          Contact Us
        </a>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-400 text-white rounded-full text-lg shadow hover:bg-violet-500 transition"
        >
          <Mail className="w-5 h-5" />
          Send Email
        </a>
      </div>
    </section>
  );
}
