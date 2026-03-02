import React from "react";

const Contact = () => {
  return (
    <div className="mt-30 w-full">

      {/* Hero Section */}
      <div className="bg-orange-100 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about our fresh products or delivery process?
          Our team is always ready to help you.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition duration-500 hover:scale-102">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">📍 Address</h3>
          <p className="text-gray-600 text-lg">
            123 Fresh Market Street, Ludhiana, Punjab
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition duration-500 hover:scale-102">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">📞 Phone</h3>
          <p className="text-gray-600 text-lg">+91 98765 43210</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition duration-500 hover:scale-102">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">✉ Email</h3>
          <p className="text-gray-600 text-lg">support@grocify.com</p>
        </div>

      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-[800px] mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Send Us a Message
          </h2>

          <form className="bg-white shadow-lg rounded-xl p-10 space-y-6">

            <div>
              <label className="block text-lg text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg hover:scale-102 transform transition duration-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-lg text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg hover:scale-102 transform transition duration-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-lg text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg hover:scale-102 transform transition duration-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-xl hover:scale-102 bg-orange-500 hover:from-orange-500 hover:to-orange-600 text-white py-3 rounded-lg font-semibold transition duration-500 cursor-pointer"
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