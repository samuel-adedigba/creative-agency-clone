import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 98, label: "Projects" },
  { value: 65, label: "People" },
  { value: 10, label: "Years" },
  { value: 15, label: "Offices" },
];

const CreativeAgency = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#e9f0ff] px-6 md:px-10 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto container">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-32">
          {/* Image Group */}
          <div className="relative w-full lg:w-1/2">
            {/* <div className="relative w-full max-w-lg mx-auto lg:mx-0"> */}
            <div className="relative w-full max-w-md sm:max-w-lg mx-auto">
              <img
                src="/ag1.webp"
                alt="Team"
              //  className="rounded-xl shadow-xl w-full object-cover relative z-10"
              className="rounded-md shadow-lg w-3/4 sm:w-full mx-auto  " 
              />
              <img
                src="/ag2.webp"
                alt="Working"
              //  className="rounded-xl shadow-2xl w-3/4 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
            className="rounded-xl shadow-2xl w-3/4 sm:w-full transform lg:-translate-x-1/2   -translate-y-1/2"
            />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <p className="uppercase text-sm sm:text-base tracking-widest font-bold text-gray-500 mb-3">
              Creative Agency
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#0a043c] leading-tight mb-5">
              We help your<br /> business grow
            </h1>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-indigo-600 text-2xl">🎨</div>
                <div>
                  <p className="font-semibold text-[#0a043c] text-lg lg:text-2xl">
                    Creative design
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
                    Natus error sit voluptatem accusantium doloremque.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-indigo-600 text-2xl">🔮</div>
                <div>
                  <p className="font-semibold text-[#0a043c] text-lg lg:text-2xl">
                    Endless possibilities
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
                    Sit voluptatem accusantium doloremque laudan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={ref}
          className="grid md:grid-cols-4 gap-10 text-center mt-14"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="relative">
              <p className="md:text-9xl text-7xl font-extrabold text-white leading-none relative">
                {inView && (
                  <CountUp start={5} end={stat.value} duration={3} delay={0}>
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                )}
                <span className="absolute inset-0 flex items-center justify-center text-indigo-900 text-sm sm:text-base md:text-xl font-semibold">
                  {stat.label}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeAgency;
