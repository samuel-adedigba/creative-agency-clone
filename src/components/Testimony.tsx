import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    role: "Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Smith",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Mike Johnson",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute inset-y-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-10 px-4 sm:px-8 pointer-events-none">
            <button className="swiper-button-prev !static w-12 h-12 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center bg-transparent pointer-events-auto transition-all hover:border-gray-300 hover:bg-white">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button className="swiper-button-next !static w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-gray-200 flex items-center justify-center bg-transparent pointer-events-auto transition-all hover:border-gray-300 hover:bg-white">
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets',
              bulletClass: 'inline-block w-2 h-2 rounded-full bg-gray-300 mx-1 transition-all cursor-pointer',
              bulletActiveClass: '!w-4 !bg-primary',
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-6">
                  <div className="relative mb-8">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
                    {testimonial.content}
                  </p>
                  <div className="text-blue-800 p-3 rounded-full mb-4">
                    <Quote className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="swiper-pagination flex justify-center items-center space-x-2 mt-8"></div>
        </div>
      </div>
    </section>
  );
};
