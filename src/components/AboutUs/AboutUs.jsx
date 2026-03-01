import React from "react";
import { FaLeaf, FaTruck, FaUsers, FaAward } from "react-icons/fa";
import aboutImg from '../../assets/about2.jpg'
import aboutbg from '../../assets/about-bg.jpg'
import Banner from "../Banner/Banner";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className=" mt-32">

      <div>
        <Banner title='About Us' bgImage={aboutbg} className="" categories={['All']} />
      </div>
      
      {/* ===== Main Section ===== */}
      <div className="flex max-w-[1400px] mt-30 mx-auto flex-col md:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <motion.img
            src={aboutImg}
            alt="About Grocify"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            className="w-full h-110 shadow-2xl object-contain rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 text-zinc-700 text-lg leading-relaxed">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Delivering Fresh & Organic
            <span className="text-orange-500"> Groceries</span>
            To Your Doorstep
          </h1>

          <p>
            Grocify is your trusted online grocery store, providing fresh,
            high-quality products directly to your doorstep. We aim to make
            grocery shopping simple, fast, and reliable.
          </p>

          <p>
            Our products are carefully sourced from trusted suppliers to ensure
            freshness, safety, and great taste in every order.
          </p>

          <p>
            With secure payments, fast delivery, and excellent customer
            support, we strive to give you the best shopping experience.
          </p>

        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-[1200px] mx-auto text-center px-6">

          <h2 className="md:text-5xl text-3xl font-bold text-gray-900">
            Our <span className="text-orange-500">Mission</span>
          </h2>

          <p className="text-gray-600 text-lg mt-6 max-w-[700px] mx-auto">
            Our mission is to make organic and fresh groceries accessible
            to every household. We ensure strict quality control, sustainable
            sourcing, and fast delivery so you can shop with confidence.
          </p>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-[1300px] mx-auto py-20 px-6">

        <h2 className="md:text-5xl text-3xl font-bold text-center text-gray-900 mb-14">
          Why <span className="text-orange-500">Choose Us</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
            <FaLeaf className="text-orange-500 text-5xl mx-auto mb-4" />
            <h3 className="font-semibold text-2xl">100% Organic</h3>
            <p className="text-gray-500 mt-2">
              Carefully sourced organic products from trusted farms.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
            <FaTruck className="text-orange-500 text-5xl mx-auto mb-4" />
            <h3 className="font-semibold text-2xl">Fast Delivery</h3>
            <p className="text-gray-500 mt-2">
              Same-day delivery to ensure maximum freshness.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
            <FaUsers className="text-orange-500 text-5xl mx-auto mb-4" />
            <h3 className="font-semibold text-2xl">Trusted By Customers</h3>
            <p className="text-gray-500 mt-2">
              Thousands of happy customers across the city.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
            <FaAward className="text-orange-500 text-5xl mx-auto mb-4" />
            <h3 className="font-semibold text-2xl">Best Quality</h3>
            <p className="text-gray-500 mt-2">
              Premium quality standards maintained every day.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutUs;