import React from "react";
const Footer: React.FC = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-[#2e0d0d] text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TopTea, Made by Alvina. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
