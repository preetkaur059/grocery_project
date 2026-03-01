import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import cartEmpty from '../../assets/cartEmpty.png'
import Button from '../Button/Button'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, quantityIncrement, quantityDecrease, subTotal, shippingFee, orderTotal } = useContext(StoreContext);

  return (
    <>
      <section className='max-w-[1400px] md:px-0 px-10 mt-40 mx-auto'>

        {/* ===== Desktop Header ===== */}
        <div className="hidden md:grid grid-cols-6 justify-items-center mb-5 text-2xl font-semibold text-zinc-700">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr className="border-zinc-400 hidden md:block" />

        {/* ===== Cart Items ===== */}
        {
          cart.length === 0 ? (
            <img className='mx-auto mt-10 w-60 md:w-auto' src={cartEmpty} alt="" />
          ) : (
            <AnimatePresence>
              {cart.map((product, index) => (

                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -120 }}
                  transition={{ duration: 0.4 }}

                  className={`${index % 2 === 0
                      ? 'bg-gradient-to-b from-orange-300 to-orange-300'
                      : 'bg-white'}
                      
                      /* Desktop */
                      md:grid md:grid-cols-6 md:place-items-center
                      
                      /* Mobile */
                      grid grid-cols-1 gap-3
                      
                      text-lg md:text-xl text-zinc-900 font-medium p-4 md:p-0`}
                >

                  {/* Image */}
                  <img className='h-20 md:h-17 mx-auto md:m-1' src={product.image} alt="" />

                  {/* Title */}
                  <p className='text-center md:text-left'>{product.name}</p>

                  {/* Price */}
                  <p className='text-center'>${product.price.toFixed(2)}</p>

                  {/* Quantity */}
                  <div className="flex justify-center items-center border border-black rounded-lg overflow-hidden w-fit mx-auto">
                    <button
                      onClick={() => quantityDecrease(product.id)}
                      className="px-3 py-1 border-r text-2xl font-extrabold border-black hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="px-4 py-1">{product.quantity}</span>

                    <button
                      onClick={() => quantityIncrement(product.id)}
                      className="px-3 py-1 border-l text-2xl font-bold border-black hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  {/* Total */}
                  <p className='text-center'>${(product.price * product.quantity).toFixed(2)}</p>

                  {/* Remove */}
                  <p
                    className='cursor-pointer text-3xl text-center'
                    onClick={() => removeFromCart(product.id)}
                  >
                    <MdOutlineDelete />
                  </p>

                </motion.div>
              ))}
            </AnimatePresence>
          )
        }

        {/* ===== Cart Totals Section ===== */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-20 md:pl-10">

          {/* Left Side */}
          <div className="w-full md:w-1/2">
            <h1 className='text-3xl md:text-4xl mb-8 md:mb-10 text-zinc-900 font-bold'>Cart Totals</h1>

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

            <Link
              to='/DeliveryInformation'
              className='w-full md:w-auto text-center bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 inline-block'
            >
              PROCEED TO CHECKOUT
            </Link>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 mt-5 px-0 md:px-3 flex flex-col">
            <p className='text-lg text-zinc-800'>If you have a promo code, Enter it here</p>

            <div className="mt-2 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                className='w-full sm:w-2/3 focus:outline-none rounded-lg bg-zinc-200 px-3 py-3 text-md md:text-lg'
                placeholder='promo code'
              />
              <Button content='Submit' />
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Cart