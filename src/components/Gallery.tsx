import React from "react";

const Gallery: React.FC = () => {
  return (
    <div id="gallery">
      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-black">
          <h2 className="text-4xl font-bold text-center mb-8 underline">
            Gallery
          </h2>
          <p className="text-center text-black mb-12">
            Discover the beauty of our teas, brewing moments, and serene tea
            gardens.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Gallery Item */}
            <div className="overflow-hidden rounded-lg shadow-md shadow-black">
              <img
                src="/Gallery 1.jpg"
                alt="Green Tea Leaves"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md shadow-black">
              <img
                src="/Gallery 2.jpg"
                alt="Freshly Brewed Tea"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md shadow-black">
              <img
                src="/Gallery 3.jpg"
                alt="Tea Garden"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md shadow-black">
              <img
                src="/Gallery 4.jpg"
                alt="Tea Cups and Accessories"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md shadow-black">
              <img
                src="/Gallery 5.jpg"
                alt="Assorted Tea Flavors"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md shadow-black">
              <img
                src="/Gallery 6.jpg"
                alt="Steaming Cup of Tea"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md shadow-black">
              <img
                src="/Gallery 7.jpg"
                alt="Tea Plantation"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md shadow-black">
              <img
                src="/Gallery 8.jpg"
                alt="Tea Brewing Process"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
