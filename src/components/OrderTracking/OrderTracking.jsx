import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const OrderTracking = () => {
  const { deliveryInfo, setOrderNumber, cart, orderTotal, orderNumber, clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    clearCart();
    setOrderNumber("");
    navigate("/");
  };

  return (
    <div className='max-w-[1400px] mt-30 mx-auto'>
      <div className=" px-5">
        <h1 className='text-3xl font-bold text-zinc-900 pt-4'>Track Your Order</h1>
      </div>


      <div className="shadow-xl bg-zinc-100 mt-7 h-fit p-8">
        
        {/* Order Number */}
          <p className='text-zinc-800 text-lg my-3'>Order Number: <span className='text-zinc-900 font-medium'>{orderNumber}</span></p>

          {/* order status */}
          <h1 className='text-zinc-900 text-xl font-medium'>Order Status</h1>
          <p className="text-green-600 font-medium mb-6">
          We’ve received your order and it’s now being prepared for shipment.
        </p>

            {/* Items Ordered */}
          <h1 className='text-zinc-900 text-xl font-medium my-3'>Items Ordered</h1>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-zinc-800 text-lg mt-2">
              <p>{item.name} (x{item.quantity})</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}

          <div className="flex justify-between text-zinc-900 text-xl font-medium mt-3">
            <p>Total Price:</p>
            <p>${orderTotal.toFixed(2)}</p>
          </div>

        <div className='mt-7'>
           
          <h1 className='text-zinc-900 text-xl font-medium'>Shipping Information</h1>
          <p className='text-zinc-800 text-lg mt-3'>
            {deliveryInfo.firstName} {deliveryInfo.lastName}
          </p>
          <p className='text-zinc-800 text-lg mt-1'>
            {deliveryInfo.street}
          </p>
          <p className='text-zinc-800 text-lg mt-1'>
            {deliveryInfo.city}, {deliveryInfo.state} - {deliveryInfo.pinCode}
          </p>
          <p className='text-zinc-800 text-lg mt-1'>
            {deliveryInfo.country}
          </p>
          <p className='text-zinc-800 text-lg mt-1'>
            {deliveryInfo.phone}
          </p>
          <p className='text-zinc-800 text-lg mt-1'>
            {deliveryInfo.email}
          </p>
        </div>
  
      </div>

      <div className="flex gap-5 p-10 ">
        <button className='bg-gradient-to-b from-orange-400 to-orange-500 px-5 py-3 text-white font-medium text-xl rounded-lg hover:scale-105 hover:from-orange-500 to-orange-600 transition-all duration-300 inline-block cursor-pointer'
          onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
    </div>
  )
}

export default OrderTracking
