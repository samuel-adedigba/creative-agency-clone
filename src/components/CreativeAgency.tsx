import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 98, label: 'Projects' },
  { value: 65, label: 'People' },
  { value: 10, label: 'Years' },
  { value: 15, label: 'Offices' },
];

const CreativeAgency = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section  className="w-full bg-gradient-to-b from-white to-[#e9f0ff] px-6 lg:px-16 py-20  " >   
         <div className="container ">
      {/* Top Section */}
      <div className="container flex flex-col lg:flex-row justify-between items-start relative">
        {/* Image Stack */}
        {/* <div className="relative w-full lg:w-1/ mx-auto flex justify-center lg:justify-start mb-10 lg:mb-0"> */}
        <div className="relative w-full max-w-lg ml-auto">
          <div className="relative">
            <img
              src="src/assets/ag1.webp"
              alt="Team"
             // className="w-[200px] h-[260px] rounded-xl object-cover shadow-lg z-10 relative lg:translate-x-16"
              className="rounded-md shadow-lg w-full"
            />
            <img
              src="src/assets/ag2.webp"
              alt="Working"
             // className="w-[320px] h-[300px] rounded-xl object-cover shadow-2xl absolute top-20 left-20 hidden lg:block"
              className="rounded-md shadow-lg w-full absolute top-1/2 right-1/4"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/ z-20 mx-auto ">
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-3">Creative Agency</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0a043c] leading-tight mb-5">
            We help your<br /> business grow
          </h1>
          <p className="text-gray-600 text-base mb-6 max-w-md">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-indigo-600 text-xl">🎨</div>
              <div>
                <p className="font-semibold text-[#0a043c]">Creative design</p>
                <p className="text-gray-500 text-sm">Natus error sit voluptatem accusantium doloremque.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-indigo-600 text-xl">🔮</div>
              <div>
                <p className="font-semibold text-[#0a043c]">Endless possibilities</p>
                <p className="text-gray-500 text-sm">Sit voluptatem accusantium doloremque laudan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div
        ref={ref}
        className="w-full mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 justify-center text-center"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="relative">
            <p className="text-[80px] sm:text-[100px] font-extrabold text-white leading-none relative">
              {inView && (
                <CountUp
                  start={5}
                  end={stat.value}
                  duration={3}
                  delay={0}
                >
                  {({ countUpRef }) => (
                    <span ref={countUpRef} />
                  )}
                </CountUp>
              )}
              <span className="absolute inset-0 flex items-center justify-center text-indigo-900 text-[14px] sm:text-base font-semibold">
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
