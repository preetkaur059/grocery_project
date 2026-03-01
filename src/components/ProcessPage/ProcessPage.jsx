import React from "react";
import { FaSeedling, FaBoxOpen, FaTruckMoving, FaSmile } from "react-icons/fa";
import processImg from "../../assets/basket-full-vegetables.png"; // apni basket ya grocery image

const ProcessPage = () => {
  return (
    <div className="mt-32">

      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h4 className="text-orange-500 font-semibold mb-3">
            How It Works
          </h4>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Simple & Fresh
            <span className="text-orange-500"> Grocery Process</span>
          </h1>

          <p className="text-gray-600 mt-6 leading-relaxed">
            From farm to your home, we follow a transparent and efficient 
            process to ensure that you receive only the freshest and 
            highest-quality groceries.
          </p>
        </div>

        <div>
          <img src={processImg} alt="Our Process" />
        </div>
      </div>

      {/* Process Steps Section */}
      <div className="bg-gray-50 py-20 mt-20">
        <div className="max-w-[1300px] mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Our <span className="text-orange-500">Process</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaSeedling className="text-orange-500 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                1. Sourcing
              </h3>
              <p className="text-gray-500 text-sm">
                We carefully select fresh produce from trusted local farmers 
                and certified organic suppliers.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaBoxOpen className="text-orange-500 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                2. Quality Check
              </h3>
              <p className="text-gray-500 text-sm">
                Every item goes through strict quality inspection to ensure 
                freshness and hygiene standards.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaTruckMoving className="text-orange-500 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                3. Fast Delivery
              </h3>
              <p className="text-gray-500 text-sm">
                We pack your order carefully and deliver it quickly to 
                maintain maximum freshness.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <FaSmile className="text-orange-500 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                4. Happy Customers
              </h3>
              <p className="text-gray-500 text-sm">
                Enjoy healthy meals with our fresh groceries and experience 
                complete customer satisfaction.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ProcessPage;