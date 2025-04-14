import React from "react";
import { Button } from "./Button";

const Logo = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center mx-auto bg-gradient-to-bl from-blue-100 to-violet-50 p-8">
      {/* Main Content */}
      

      {/* Partner Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12 w-full max-w-6xl px-4">
        <img
          src="src/assets/partner-1.webp"
          alt="Logo 1"
          className="h-auto w-full object-contain"
        />
        <img
          src="src/assets/partner-2.webp"
          alt="Logo 2"
          className="h-auto w-full object-contain"
        />
        <img
          src="src/assets/partner-3.webp"
          alt="Logo 3"
          className="h-auto w-full object-contain"
        />
        <img
          src="src/assets/partner-4.webp"
          alt="Logo 4"
          className="h-auto w-full object-contain"
        />
        <img
          src="src/assets/partner-5.webp"
          alt="Logo 5"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
};

export default Logo;
