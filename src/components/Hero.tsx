"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="hero">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-36 px-4 lg:px-28">
        {/* Left Section */}
        <section
          className="text-center lg:text-left mb-8 lg:mb-0"
          data-aos="fade-right"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-5">
            Experience the
          </h2>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-5">
            World of Premium
          </h2>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-5">Teas</h2>
          <p className="text-lg mb-6 font-mono">
            Hand-picked from the finest gardens to your cup.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-orange-400 text-white font-semibold px-6 py-3 rounded-2xl border-gray-100 border-2 hover:bg-orange-700 mb-4 lg:mb-0">
              Order Now
            </button>
            <button className="bg-orange-400 text-white font-semibold ml-4 px-6 py-3 rounded-2xl border-gray-100 border-2 hover:bg-orange-700 mb-4 lg:mb-0">
              Contact Us
            </button>
          </div>
        </section>

        {/* Right Section */}
        <section className="text-center lg:text-right" data-aos="fade-left">
          <div>
            <img
              src="/TEA.png"
              alt="tea image"
              className="max-w-full lg:w-96 lg:h-auto"
              data-aos="zoom-in"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
