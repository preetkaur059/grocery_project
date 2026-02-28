import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const DeliveryInformation = () => {

  const { cart, subTotal, shippingFee, orderTotal, setCartCount } = useContext(StoreContext);
  const { deliveryInfo, setDeliveryInfo } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleProceed = (e) => {
    e.preventDefault();

    // Manual safety validation
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
    <div className='flex max-w-[1400px] gap-30 px-10 pb-10 mt-40 mx-auto '>

      {/* left side  */}
      <form onSubmit={handleProceed} className="flex-col  w-1/2">
        <div className="text-4xl font-bold text-zinc-900">
          <h1>Delivery Information</h1>
        </div>
        <div className="mt-10 text-lg mt-4 font-medium ">
          <div className="flex gap-5">
            <input type="text" name="firstName" className=' border-2 text-zinc-8 rounded-lg border-zinc-400 px-2 my-2 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
              value={deliveryInfo.firstName}
              onChange={handleChange}
              placeholder='First Name' />
            <input type="text" className=' border-2 text-zinc-8 rounded-lg border-zinc-400 px-2 my-2 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
              name="lastName"
              value={deliveryInfo.lastName}
              onChange={handleChange}
              placeholder='Last Name' />
          </div>

          <div className="">
            <input type="text" className='border-2 text-zinc-8 rounded-lg border-zinc-400 px-2 my-2 py-2  w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
              name="email"
              value={deliveryInfo.email}
              onChange={handleChange}
              placeholder='Email Address' />
          </div>

          <div className="">
            <input type="text" className='border-2 text-zinc-8 rounded-lg border-zinc-400 px-2 my-2 py-2  w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
              name="street"
              value={deliveryInfo.street}
              onChange={handleChange}
              placeholder='Street Address' />
          </div>

          <div className="flex gap-3">
            <input type="text" className='border-2 text-zinc-8 rounded-lg border-zinc-400 px-2 my-2 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
              name="city"
              value={deliveryInfo.city}
              onChange={handleChange}
              placeholder='City' />
            <input type="text" className='border-2 text-zinc-8 rounded-lg border-zinc-400 px-2 my-2 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
              name="state"
              value={deliveryInfo.state}
              onChange={handleChange}
              placeholder='State' />
          </div>

          <div className="flex gap-3">
            <input type="text" className='border-2 text-zinc-8 rounded-lg border-zinc-400 px-2 my-2 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
              name="pinCode"
              value={deliveryInfo.pinCode}
              onChange={handleChange}
              placeholder='Pin Code' />
            <input type="text" className='border-2 text-zinc-8 rounded-lg border-zinc-400 px-2 my-2 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
              name="country"
              value={deliveryInfo.country}
              onChange={handleChange}
              placeholder='Country' />
          </div>

          <div className="">
            <input type="text" className='border-2 text-zinc-8 rounded-lg border-zinc-400 px-2 my-2 py-2  w-full focus:outline-none focus:ring-1 focus:ring-orange-400'
              name="phone"
              value={deliveryInfo.phone}
              onChange={handleChange}
              placeholder='Phone' />
          </div>
        </div>
      </form>

      {/* right side  */}

      <div className="flex-col md:w-1/2  shadow-xl bg-zinc-100 h-fit p-8">
        <div className="">
          <h1 className='text-4xl mb-10 text-zinc-900 font-bold'>Cart Totals</h1>
          <div className="flex  text-zinc-800 text-xl mt-4 font-medium  justify-between">
            <p>Subtotal</p>
            <p>{subTotal.toFixed(2)}</p>
          </div>
          <hr className="mt-3 items-center border-zinc-400" />
          <div className="flex text-zinc-800 text-xl mt-4 font-medium justify-between">
            <p>Shipping & Handling</p>
            <p>{shippingFee.toFixed(2)}</p>
          </div>
          <hr className="mt-3 items-center border-zinc-400" />
          <div className="flex mb-7 text-zinc-800 text-xl mt-4 font-medium justify-between">
            <p>Total</p>
            <p>{orderTotal.toFixed(2)}</p>
          </div>
          <button type="submit"
            onClick={handleProceed}
            className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:from-to-orange-600 transition-all duration-300 inline-block cursor-pointer'
            disabled={cart.length === 0}
          >PROCEED TO PAYMENT</button>

        </div>
      </div>


    </div>
  )
}

export default DeliveryInformation
