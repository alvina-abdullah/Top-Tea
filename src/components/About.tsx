import React from "react";
const About: React.FC = () => {
  return (
    <div id="about" className="bg-white">
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-5 text-black underline">
            About Us
          </h2>
          <p className="text-lg text-black text-center max-w-2xl mx-auto">
            Welcome to Top Tea , your gateway to the finest teas from around the
            world. Our journey started with a passion for tea and a mission to
            bring the best blends to every tea lover. We work closely with
            expert growers to ensure quality and sustainability.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-3 text-black ">
            Our Mission
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Item */}
            <div className="p-5 bg-white rounded-lg shadow-md shadow-[#2e0d0d] text-black transition-transform duration-300 hover:scale-110">
              <img
                src="Quality.jpg"
                alt="Team Member 3"
                className="w-full h-48 rounded-lg  mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-4">Quality</h4>
              <p>
                We believe in delivering only the best. Each tea blend is
                meticulously crafted to provide an exceptional experience.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md shadow-[#2e0d0d] text-black transition-transform duration-300 hover:scale-110">
              <img
                src="Sustainability.jpg"
                alt="Team Member 3"
                className="w-full h-48 rounded-lg  mx-auto mb-4 "
              />
              <h4 className="text-xl font-bold mb-4">Sustainability</h4>
              <p>
                We source our teas ethically, supporting sustainable farming
                practices and fair trade.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md shadow-[#2e0d0d] text-black transition-transform duration-300 hover:scale-110">
              <img
                src="Community.jpg"
                alt="Team Member 3"
                className="w-full h-48 rounded-lg  mx-auto mb-4"
              />
              <h4 className="text-xl font-bold mb-4">Community</h4>
              <p>
                Our mission is to create a community of tea lovers who value
                tradition, quality, and connection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
