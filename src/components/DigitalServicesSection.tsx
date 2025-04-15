import { Button } from "./Button";

const DigitalServicesSection = () => {
  return (
    <section className="items-center justify-center mx-auto bg-gradient-to-bl from-blue-100 to-violet-50 px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-lg font-bold mb-2">Who We Are</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            We provide best digital services
          </h3>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptatem sit
            aspernatur aut odit aut fugit sed quia.
          </p>
          <Button className="bg-[#42BFDD]" variant="primary" size="lg">
            Discover Now
          </Button>
        </div>

        {/* Image Stack */}
        <div className="relative w-full max-w-md sm:max-w-lg mx-auto">
          {/* Base Image */}
          <img
            src="/dig1.webp"
            alt="Digital Services 1"
            className="rounded-md shadow-lg w-3/4 sm:w-full mx-auto  " 
          />

          {/* Overlay Image – responsive fix */}
          <img
            src="/dig2.webp"
            alt="Digital Services 2"
            className="rounded-xl shadow-2xl w-3/4 sm:w-full absolut top-1/ right-1/ transform lg:-translate-x-1/2   -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalServicesSection;
