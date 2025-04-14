import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80)`,
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B2B]/90 to-[#0B0B2B]/70" /> */}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center text-cente justify-cente">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center justify-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Turning Creative Ideas into Success
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              className="bg-[#42BFDD] hover:bg-[#4F46E5] text-white px-10 py-6 text-2xl"
            >
              Discover Now
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Wave Overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};