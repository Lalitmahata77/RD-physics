'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Maya Santos',
    role: 'Student',
    text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Curabitur consectetur tellus quis tortor laoreet porttitor.',
    img: '/images/boy1.png', // Place image in /public
  },
  {
    name: 'Jake Paulin',
    role: 'Student',
    text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Curabitur consectetur tellus quis tortor laoreet porttitor.',
    img: '/images/boy1.png',
  },
  {
    name: 'Nick Adalman',
    role: 'Student',
    text: 'Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Curabitur consectetur tellus quis tortor laoreet porttitor.',
    img: '/images/boy1.png',
  },
];

export default function TestimonialSlider() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900">What Our Students Say</h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Ut eget mattis lacus, sit amet accumsan erat. Integer suscipit justo vel iaculis scelerisque.
        Nam vel porta augue. Proin egestas leo magna, vel tincidunt magna laoreet eu.
      </p>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mt-12"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white border rounded-xl p-6 text-left shadow-sm h-full flex flex-col justify-between">
              <p className="text-gray-600 mb-6">{t.text}</p>
              <div className="flex items-center gap-4 mt-auto">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900 font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
