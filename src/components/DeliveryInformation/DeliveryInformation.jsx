import React from 'react'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const DeliveryInformation = () => {

  const { cart, subTotal, shippingFee, orderTotal, setCartCount } = useContext(StoreContext);
  const { deliveryInfo, setDeliveryInfo } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleProceed = (e) => {
    e.preventDefault();

    if (
      !deliveryInfo.firstName ||
      !deliveryInfo.lastName ||
      !deliveryInfo.email ||
      !deliveryInfo.street ||
      !deliveryInfo.city ||
      !deliveryInfo.state ||
      !deliveryInfo.pinCode ||
      !deliveryInfo.country ||
      !deliveryInfo.phone
    ) {
      alert("Please fill all delivery details.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setCartCount(0);
    navigate("/OrderConfirmation");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({
      ...deliveryInfo,
      [name]: value
    });
  };

  return (

    <div className='flex md:px-0 px-10 flex-col md:flex-row max-w-[1400px] gap-10 md:gap-30 px-4 md:px-10 pb-10 mt-40 mx-auto'>

      {/* LEFT SIDE */}
      <form onSubmit={handleProceed} className="w-full md:w-1/2">

        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Delivery Information
        </h1>

        <div className="mt-6 md:mt-10 text-lg font-medium">

          {/* First & Last Name */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <input
              type="text"
              name="firstName"
              value={deliveryInfo.firstName}
              onChange={handleChange}
              placeholder='First Name'
              className='border-2 rounded-lg border-zinc-400 px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
            />

            <input
              type="text"
              name="lastName"
              value={deliveryInfo.lastName}
              onChange={handleChange}
              placeholder='Last Name'
              className='border-2 rounded-lg border-zinc-400 px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
            />
          </div>

          {/* Email */}
          <input
            type="text"
            name="email"
            value={deliveryInfo.email}
            onChange={handleChange}
            placeholder='Email Address'
            className='border-2 rounded-lg border-zinc-400 px-3 py-2 w-full my-3 focus:outline-none focus:ring-1 focus:ring-orange-400'
          />

          {/* Street */}
          <input
            type="text"
            name="street"
            value={deliveryInfo.street}
            onChange={handleChange}
            placeholder='Street Address'
            className='border-2 rounded-lg border-zinc-400 px-3 py-2 w-full my-3 focus:outline-none focus:ring-1 focus:ring-orange-400'
          />

          {/* City & State */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="city"
              value={deliveryInfo.city}
              onChange={handleChange}
              placeholder='City'
              className='border-2 rounded-lg border-zinc-400 px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
            />

            <input
              type="text"
              name="state"
              value={deliveryInfo.state}
              onChange={handleChange}
              placeholder='State'
              className='border-2 rounded-lg border-zinc-400 px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
            />
          </div>

          {/* Pin & Country */}
          <div className="flex flex-col sm:flex-row gap-4 mt-3">
            <input
              type="text"
              name="pinCode"
              value={deliveryInfo.pinCode}
              onChange={handleChange}
              placeholder='Pin Code'
              className='border-2 rounded-lg border-zinc-400 px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
            />

            <input
              type="text"
              name="country"
              value={deliveryInfo.country}
              onChange={handleChange}
              placeholder='Country'
              className='border-2 rounded-lg border-zinc-400 px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
            />
          </div>

          {/* Phone */}
          <input
            type="text"
            name="phone"
            value={deliveryInfo.phone}
            onChange={handleChange}
            placeholder='Phone'
            className='border-2 rounded-lg border-zinc-400 px-3 py-2 w-full my-3 focus:outline-none focus:ring-1 focus:ring-orange-400'
          />

        </div>
      </form>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 shadow-xl bg-zinc-100 h-fit p-6 md:p-8 rounded-lg">

        <h1 className='text-3xl md:text-4xl mb-8 md:mb-10 text-zinc-900 font-bold'>
          Cart Totals
        </h1>

        <div className="flex text-zinc-800 text-lg md:text-xl mt-4 font-medium justify-between">
          <p>Subtotal</p>
          <p>{subTotal.toFixed(2)}</p>
        </div>

        <hr className="mt-3 border-zinc-400" />

        <div className="flex text-zinc-800 text-lg md:text-xl mt-4 font-medium justify-between">
          <p>Shipping & Handling</p>
          <p>{shippingFee.toFixed(2)}</p>
        </div>

        <hr className="mt-3 border-zinc-400" />

        <div className="flex mb-7 text-zinc-800 text-lg md:text-xl mt-4 font-medium justify-between">
          <p>Total</p>
          <p>{orderTotal.toFixed(2)}</p>
        </div>

        <button
          type="submit"
          onClick={handleProceed}
          disabled={cart.length === 0}
          className='w-full md:w-auto bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300'
        >
          PROCEED TO PAYMENT
        </button>

      </div>

    </div>
  )
}

export default DeliveryInformation