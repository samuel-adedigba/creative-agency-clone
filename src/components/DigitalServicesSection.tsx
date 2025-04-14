import { Button } from "./Button";

const DigitalServicesSection = () => {
  return (
    <section className=" items-center justify-center mx-auto bg-gradient-to-bl from-blue-100 to-violet-50 p-8  ">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6x   gap-10 mb-48">

        <div className="lg:w-1/4 w-full mx-auto">
          <h2 className="text-lg font-bold mb-2">Who We Are</h2>
          <h3 className="text-5xl font-extrabold mb-4">
            We provide best digital services
          </h3>
          <p className="text-gray-600 mb-6 text-base">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptatem sit
            aspernatur aut odit aut fugit sed quia.
          </p>
          <Button className="bg-[#42BFDD]" variant="primary" size="lg">
            Discover Now
          </Button>
        </div>

        {/* Image Stack */}
        <div className="relative w-full max-w-lg mx-auto">
          {/* Base Image */}
          <img
            src="/dig1.webp"
            alt="Digital Services 1"
            className="rounded-md shadow-lg w-full"
          />

          {/* Overlapping Image from the middle */}
          <img
            src="/dig2.webp"
            alt="Digital Services 2"
            className="rounded-md shadow-lg w-full absolute top-1/2 right-1/4"
          />
        </div>
      </div>

      {/* Partner Logos */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12 w-full max-w-6xl px-4">
        <img
          src="/partner-1.webp"
          alt="Logo 1"
          className="h-auto w-full object-contain"
        />
        <img
          src="/partner-2.webp"
          alt="Logo 2"
          className="h-auto w-full object-contain"
        />
        <img
          src="/partner-3.webp"
          alt="Logo 3"
          className="h-auto w-full object-contain"
        />
        <img
          src="/partner-4.webp"
          alt="Logo 4"
          className="h-auto w-full object-contain"
        />
        <img
          src="/partner-5.webp"
          alt="Logo 5"
          className="h-auto w-full object-contain"
        />
      </div> */}
    </section>
  );
};

export default DigitalServicesSection;
