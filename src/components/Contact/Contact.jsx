import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import bgimage from '../../assets/all-banner.jpg'

const Contact = () => {
  return (
    <div className="mt-32">

      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-6 min-h-[400px] bg-cover bg-center text-center"
      style={{backgroundImage: `url(${bgimage})`}}>

        <h4 className="text-orange-500 font-semibold mb-3">
          Get In Touch
        </h4>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Contact <span className="text-orange-500">Us</span>
        </h1>

        <p className="text-gray-600 mt-6 max-w-[600px] mx-auto">
          Have questions about our products or delivery? 
          Our team is here to help you anytime.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-[1400px] mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-8">

          <div className="flex items-start gap-5">
            <FaMapMarkerAlt className="text-orange-500 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Our Location</h3>
              <p className="text-gray-600 text-sm">
                123 Organic Street, Green Market, Your City
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaPhoneAlt className="text-orange-500 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-gray-600 text-sm">
                +91 98765 43210
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <FaEnvelope className="text-orange-500 text-3xl mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600 text-sm">
                support@grocify.com
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
          
          <form className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-2 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;