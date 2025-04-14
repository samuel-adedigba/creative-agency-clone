// BlogSlider.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const blogPosts = [
  {
    title: "Top 5 targeting techniques to attract customers",
    image: "src/assets/blog1.jpg",
    date: "Apr 21, 2020",
    category: "Media SEO",
  },
  {
    title: "Why do project managers need to focus on strategy?",
    image: "src/assets/blog2.jpg",
    date: "Apr 21, 2020",
    category: "Media SEO",
  },
  {
    title: "What’s trending in charts this year?",
    image: "src/assets/blog3.jpg",
    date: "Apr 21, 2020",
    category: "Media SEO",
  },
  {
    title: "Top design ideas for your business",
    image: "src/assets/blog4.jpg",
    date: "Apr 21, 2020",
    category: "Design",
  },
];

export default function BlogSlider() {
  return (
    <section className="py-16 px-4 bg-[#EBEEEE]">
      <div className="lg:w-4/5 mx-auto text-center">
        <p className="lg:text-xl text-sm font-bold text-gray-500 uppercase">Our Blog</p>
        <h1 className="md:text-6xl text-2xl font-bold text-[#0c0e15] md:mb-10 mb-5">Latest articles</h1>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {blogPosts.map((post, i) => (
            <SwiperSlide key={i}>
              <div className="overflow-hidden text-left">
                <div className='' >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover rounded-3xl"
                />
                </div>
                <div className="p-6">
                  <p className="md:text-base text-sm font-bold text-[#140549] uppercase">{post.category}</p>
                  <h3 className="md:text-4xl text-lg font-bold text-[#140549] mb-2">{post.title}</h3>
                  <p className="md:text-lg text-base text-gray-400">{post.date} • 0 Comments</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
