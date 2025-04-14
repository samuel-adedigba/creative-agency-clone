import React from 'react';

export const Footer: React.FC = () => {
  return (
    
    <footer className="bg-[#0c0e15] text-white relative">
      {/* Wavy SVG divider */}
      {/* <div className="absolute top-[-50px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <path
            fill="#0c0e15"
            d="M0,128L40,138.7C80,149,160,171,240,154.7C320,139,400,85,480,80C560,75,640,117,720,117.3C800,117,880,75,960,58.7C1040,43,1120,53,1200,74.7C1280,96,1360,128,1400,144L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </div> */}

      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10  text-xl ">
          {/* Office */}
          <div>
            <h4 className="font-bold mb-6">Office</h4>
            <p>Germany —</p>
            <p>785 15th Street, Office 478</p>
            <p>Berlin, De 81566</p>
            <p className="mt-2 underline">info@email.com</p>
            <p className="mt-1 font-bold text-white">+1 840 841 25 69</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6">Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-6">Socials</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Dribbble</li>
              <li>Instagram</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-6">Newsletter</h4>
            <form className="flex items-center space-x-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-gray-800 px-4 py-5 rounded-full text-sm w-2/3 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#4f46e5] w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <span>&rarr;</span>
              </button>
            </form>
            <div className="mt-3 flex items-start space-x-2 text-base text-gray-400">
              <input type="checkbox" className="mt-1" />
              <p>
                I agree to the <span className="underline text-white">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-gray-500 text-lg">
          AxiomThemes © 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
