import React from "react";
import { MdMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
const Contact: React.FC = () => {
  return (
    <div id="contact">
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 underline">
            Contact Us
          </h2>
          <p className="text-center text-white mb-12">
            We'd love to hear from you! Whether you have a question, feedback,
            or need support, feel free to reach out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Get in Touch
              </h3>
              <p className="text-black mb-6 ">
                Reach us through the following contact details or fill out the
                form to send us a message.
              </p>
              <ul className="space-y-4 text-black">
                <li>
                  <strong>Github:</strong>
                  <a
                    href="https://github.com/alvina-abdullah"
                    target="_blank"
                    rel="noopener"
                  >
                    <IoLogoGithub size={24} fill="gray" />
                    <p className="text-black">
                      https://github.com/alvina-abdullah
                    </p>
                  </a>
                </li>
                <li>
                  <strong>Linkedin:</strong>
                  <a
                    href="https://www.linkedin.com/in/alvina-abdullah"
                    target="_blank"
                    rel="noopener"
                  >
                    <FaLinkedin size={24} fill="blue" />
                    <p className="text-black">
                      https://www.linkedin.com/in/alvina-abdullah
                    </p>
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>
                  <a href="mailto:alvinaabdullah16@gmail.com">
                    <MdMailOutline size={24} fill="grey" />
                    <p className="text-black">alvinaabdullah16@gmail .com</p>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Send Us a Message
              </h3>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full text-black border-gray-300 rounded-lg shadow-sm focus:ring-green-600 focus:border-green-600"
                    placeholder="Type your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
