import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
const services = [
  { img: '/slide1.png', title: 'Growth' },
  { img: '/slide2.png', title: 'Research' },
  { img: '/slide3.png', title: 'Design' },
  { img: '/slide4.png', title: 'Strategy' },
  { img: '/slide1.png', title: 'Growth' },
  { img: '/slide2.png', title: 'Research' },

];

const CreativeSolutions = () => {
  return (
    <section  className=" w-full bg-gradient-to-b from-white to-[#f4f8ff] px-6 lg:px-16 py-20" >  
    <div className=" container">
      {/* Heading Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16 text-2xl  mx-auto">
        <div>
          <p className="uppercase text-base font-bold tracking-wider text-gray-500 mb-3">Creative Solutions</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a043c] leading-tight relative inline-block">
            We make unique &<br /> memorable brands
          </h2>
        </div>
        <div className="text-gray-600 space-y-6 max-w-3xl text-2xl">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque lorem in voluptate velit iusto odio dignissimos duci esse.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          </p>
          <a href="#" className="inline-block text-[#0a043c] font-semibold border-b-2 border-[#0a043c] hover:opacity-80 transition duration-200">
            Read More
          </a>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        slidesPerView={2.2}
        spaceBetween={20}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-transparent rounded-2xl transition  duration-300">
              <img
                src={service.img}
                alt={service.title}
                className="w-auto h-auto object- mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
};

export default CreativeSolutions;
