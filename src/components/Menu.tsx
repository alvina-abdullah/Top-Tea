import React from "react";

const Menu: React.FC = () => {
  return (
    <div id="menu">
      {/* Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 underline">
            Our Menu
          </h2>

          {/* Category: Green Tea */}
          <div className="mb-12 ">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Green Tea
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Menu Item */}
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                <h4 className="text-xl font-bold text-black">Matcha Tea</h4>
                <p className="text-gray-700">
                  Rich in antioxidants, perfect for a refreshing boost.
                </p>
                <p className="text-green-800 font-bold mt-2">$8.99</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                <h4 className="text-xl font-bold text-black">Sencha Tea</h4>
                <p className="text-gray-700">
                  A light and smooth Japanese green tea.
                </p>
                <p className="text-green-800 font-bold mt-2">$7.49</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                <h4 className="text-xl font-bold text-black">Gunpowder Tea</h4>
                <p className="text-gray-700">
                  Strong and smoky with a unique flavor profile.
                </p>
                <p className="text-green-800 font-bold mt-2">$6.99</p>
              </div>
            </div>
          </div>

          {/* Category: Black Tea */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-whitek">
              Black Tea
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                <h4 className="text-xl font-bold text-black">Earl Grey</h4>
                <p className="text-gray-700">
                  A classic blend with a hint of bergamot.
                </p>
                <p className="text-green-800 font-bold mt-2 ">$7.99</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                <h4 className="text-xl font-bold text-black">
                  English Breakfast
                </h4>
                <p className="text-gray-700">
                  A robust and bold tea for any time of the day.
                </p>
                <p className="text-green-800 font-bold mt-2">$6.49</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                <h4 className="text-xl font-bold text-black">Masala Chai</h4>
                <p className="text-gray-700">
                  A spiced blend of black tea and exotic spices.
                </p>
                <p className="text-green-800 font-bold mt-2">$8.49</p>
              </div>
            </div>
          </div>

          {/* Category: Herbal Tea */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Herbal Tea
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                <h4 className="text-xl font-bold text-black">Chamomile</h4>
                <p className="text-gray-700">
                  Calming and soothing, perfect for relaxation.
                </p>
                <p className="text-green-800 font-bold mt-2">$6.99</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                <h4 className="text-xl font-bold text-black">Peppermint</h4>
                <p className="text-gray-700">
                  Refreshing and invigorating herbal tea.
                </p>
                <p className="text-green-800 font-bold mt-2">$6.49</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                <h4 className="text-xl font-bold text-black">Hibiscus</h4>
                <p className="text-gray-700">
                  Tart and floral with a beautiful red hue.
                </p>
                <p className="text-green-800 font-bold mt-2">$7.49</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
