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

    <section className='max-w-[1300px] mx-auto mt-28'>

      <h1 className='text-4xl text-center font-bold mb-7 text-zinc-900'>
        Shopping Cart
      </h1>

      {
        cart.length === 0 ? (
          <img className='mx-auto mt-10 w-60 md:w-auto' src={cartEmpty} alt="" />
        ) : (

          <div className="grid md:grid-cols-3 gap-10">

            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">

              <AnimatePresence>

                {cart.map((product) => (

                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -120 }}
                    transition={{ duration: 0.4 }}

                    className="bg-zinc-100 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
                  >

                    {/* Image */}
                    <img
                      className='w-24 h-24 object-cover rounded-lg'
                      src={product.image}
                      alt=""
                    />

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">

                      <h2 className='text-xl font-semibold'>
                        {product.name}
                      </h2>

                      <p className='text-orange-500 text-lg font-medium mt-1'>
                        ${product.price.toFixed(2)}
                      </p>

                    </div>

                    {/* Quantity */}
                    <div className="flex items-center border rounded-lg overflow-hidden">

                      <button
                        onClick={() => quantityDecrease(product.id)}
                        className="px-3 py-1 text-xl font-bold hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="px-4 text-lg py-1">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() => quantityIncrement(product.id)}
                        className="px-3 py-1 text-xl font-bold hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                    {/* Total */}
                    <p className='text-lg font-medium'>
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className='text-red-500 text-2xl hover:scale-110 transition'
                    >
                      <MdOutlineDelete />
                    </button>

                  </motion.div>

                ))}

              </AnimatePresence>

            </div>


            {/* Order Summary */}
            <div className="bg-zinc-100 shadow-md rounded-xl p-8 h-fit  sticky top-24 ">

              <h2 className="text-3xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span className='font-bold'>${subTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span className='font-bold'>${shippingFee.toFixed(2)}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-xl font-bold mb-6">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>

              <Link
                to='/DeliveryInformation'
                className='w-full text-center bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 inline-block'
              >
                PROCEED TO CHECKOUT
              </Link>

              {/* Promo */}
              <div className="mt-8">

                <p className='text-zinc-700 mb-3'>
                  Have a promo code?
                </p>

                <div className="flex gap-2">

                  <input
                    type="text"
                    className='flex-1 bg-zinc-200 px-3 py-3 rounded-lg outline-none'
                    placeholder='Enter promo code'
                  />

                  <Button content='Apply' />

                </div>

              </div>

            </div>

          </div>

        )
      }

    </section>

  )
}

export default Cart