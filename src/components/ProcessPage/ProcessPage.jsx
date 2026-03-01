import React from "react";
import { FaShoppingBasket, FaClipboardCheck, FaTruckMoving, FaSmile } from "react-icons/fa";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import process from '../../assets/process.jpg'
import { useNavigate } from "react-router-dom";


const Process = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/#product-section");
  };

  return (
    <section className=" mt-30">
      <div>
        <Banner title='Process' bgImage={process} className="" categories={['All']} />
      </div>

      
      <div className="max-w-[1400px] mx-auto px-4 md:px-10 mt-20 mb-24">
        <div className="text-center  max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-5xl font-bold text-zinc-900">
            Our Simple & Reliable Process
          </h1>
          <p className="mt-6 text-xl text-zinc-600">
            We follow a streamlined process to ensure freshness, quality,
            and timely delivery of groceries to your home.
          </p>
        </div>

       {/* process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Step 1 */}
          <div className="bg-white border border-zinc-300 p-8 rounded-xl text-center hover:shadow-xl transition duration-300">
            <FaShoppingBasket className="text-orange-500 text-5xl mx-auto mb-5" />
            <h2 className="text-2xl font-semibold mb-3 text-zinc-900">
              1. Select Products
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Browse our fresh grocery collection and add items to your cart.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-zinc-300 p-8 rounded-xl text-center hover:shadow-xl transition duration-300">
            <FaClipboardCheck className="text-orange-500 text-5xl mx-auto mb-5" />
            <h2 className="text-2xl font-semibold mb-3 text-zinc-900">
              2. Secure Checkout
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Complete your order through our safe and simple payment system.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-zinc-300 p-8 rounded-xl text-center hover:shadow-xl transition duration-300">
            <FaTruckMoving className="text-orange-500 text-5xl mx-auto mb-5" />
            <h2 className="text-2xl font-semibold mb-3 text-zinc-900">
              3. Fast Delivery
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Our logistics team ensures quick and safe delivery to your home.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white border border-zinc-300 p-8 rounded-xl text-center hover:shadow-xl transition duration-300">
            <FaSmile className="text-orange-500 text-5xl mx-auto mb-5" />
            <h2 className="text-2xl font-semibold mb-3 text-zinc-900">
              4. Enjoy Freshness
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Receive high-quality groceries and enjoy freshness in every meal.
            </p>
          </div>

        </div>

       
        <div className="mt-28 bg-zinc-50 p-10 md:p-16 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-4xl font-bold text-zinc-900">
              Why Our Process Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-zinc-900">
                Quality Control
              </h3>
              <p className="text-zinc-600 text-lg">
                Every product is checked before packing to ensure freshness.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-zinc-900">
                Hygienic Handling
              </h3>
              <p className="text-zinc-600 text-lg">
                Groceries are packed using safe and clean procedures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-zinc-900">
                Reliable Support
              </h3>
              <p className="text-zinc-600 text-lg">
                Our team is always ready to assist you with any concerns.
              </p>
            </div>

          </div>
        </div>

        
        <div className="text-center mt-24">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">
            Ready to Experience Fresh Groceries?
          </h2>
          <Button  onClick={handleClick} content="Start Shopping Now"/>
        </div>
      </div>
    </section>
  );
};

export default Process;