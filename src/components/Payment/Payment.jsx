import React from "react";

const Payment = () => {
  return (
    <div className="min-h-screen mt-25 flex bg-[#f6f9fc]">

      {/* LEFT PANEL */}
      <div className="w-1/2 bg-[#f6f9fc] flex justify-end border-r border-gray-200">
        <div className="w-[420px] pt-20 pr-16">

          <div className="flex items-center gap-2 mb-6">
            <p className="text-sm text-gray-600">Course</p>
            <span className="bg-yellow-400 text-xs px-2 py-[2px] rounded font-medium">
              TEST MODE
            </span>
          </div>

          <h1 className="text-4xl font-semibold text-gray-900 mb-10">
            ₹220.00
          </h1>

          <div className="space-y-8 text-sm text-gray-700">

            <div className="flex justify-between">
              <div>
                <p className="font-medium text-gray-900">Greek salad</p>
                <p className="text-gray-500">Qty 2 × ₹12.00 each</p>
              </div>
              <p className="text-gray-900">₹24.00</p>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-medium text-gray-900">Peri Peri Rolls</p>
                <p className="text-gray-500">Qty 3 × ₹12.00 each</p>
              </div>
              <p className="text-gray-900">₹36.00</p>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-medium text-gray-900">Delivery Charge</p>
                <p className="text-gray-500">Qty 1</p>
              </div>
              <p className="text-gray-900">₹160.00</p>
            </div>

          </div>

          <div className="mt-20 text-xs text-gray-400">
            Powered by <span className="font-semibold">stripe</span>
            <span className="mx-2">·</span> Terms
            <span className="mx-2">·</span> Privacy
          </div>

        </div>
      </div>



      {/* RIGHT PANEL */}
      <div className="w-1/2 bg-white flex items-center">
        <div className="w-[420px] mx-auto">

          <h2 className="text-xl font-semibold mb-8 text-gray-900">
            Pay with card
          </h2>

          {/* Email */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Card Info */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">Card information</label>
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              className="w-full mt-2 border border-gray-300 rounded-t-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex">
              <input
                type="text"
                placeholder="MM / YY"
                className="w-1/2 border border-t-0 border-gray-300 rounded-bl-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-1/2 border border-t-0 border-l-0 border-gray-300 rounded-br-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Cardholder */}
          <div className="mb-6">
            <label className="text-sm text-gray-600">Cardholder name</label>
            <input
              type="text"
              placeholder="Full name on card"
              className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Country */}
          <div className="mb-8">
            <label className="text-sm text-gray-600">Country or region</label>
            <select
              className="w-full mt-2 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>India</option>
              <option>United States</option>
            </select>
          </div>

          {/* Pay Button */}
          <button className="w-full bg-[#0a2540] hover:bg-[#173b5e] text-white py-3 rounded-md text-sm font-medium transition">
            Pay
          </button>

        </div>
      </div>

    </div>
  );
};

export default Payment;