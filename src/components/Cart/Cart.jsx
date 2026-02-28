import React from 'react'
// import cart from '../../assets/banana.png'
import { motion, AnimatePresence } from "framer-motion";
import cartEmpty from '../../assets/cartEmpty.png'
import Button from '../Button/Button'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, quantityIncrement, quantityDecrease, subTotal, shippingFee, orderTotal} = useContext(StoreContext);
  
  return (
    <>
      <section className='max-w-[1400px] mt-40 mx-auto'>
        <div>
          <div className="grid grid-cols-6 justify-items-center mb-5 text-lg md:text-2xl font-semibold text-zinc-700  ">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr className=" items-center border-zinc-400" />

          {
            cart.length === 0 ? <img className='mx-auto mt-10' src={cartEmpty} alt="" /> :
              (
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
          grid grid-cols-6 place-items-center text-xl text-zinc-900 font-medium`}
                    >

                      <img className='h-17 m-1' src={product.image} alt="" />
                      <p>{product.name}</p>
                      <p>${product.price.toFixed(2)}</p>

                      <div className="flex items-center border border-black rounded-lg overflow-hidden">
                        <button
                          onClick={() => quantityDecrease(product.id)}
                          className="px-3 py-1 border-r cursor-pointer text-2xl font-extrabold border-black hover:bg-gray-100"
                        >
                          -
                        </button>

                        <span className="px-4 py-1">{product.quantity}</span>

                        <button
                          onClick={() => quantityIncrement(product.id)}
                          className="px-3 py-1 border-l cursor-pointer text-2xl font-bold border-black hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <p>${(product.price * product.quantity).toFixed(2)}</p>

                      <p
                        className='cursor-pointer text-3xl'
                        onClick={() => removeFromCart(product.id)}
                      >
                        <MdOutlineDelete />
                      </p>

                    </motion.div>
                  ))}
                </AnimatePresence>
              )
          }
        </div>

        
          <div className="flex gap-20 mt-20 pl-10">
          
          <div className="w-1/2">
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
            <Link to='/DeliveryInformation' 
            className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 inline-block cursor-pointer'
            disabled={cart.length === 0} >PROCEED TO CHECKOUT</Link>

          </div>
          <div className="flex w-1/2 mt-5 px-3 flex-col">
            <p className='text-lg text-zinc-800'>If you have a promo code, Enter it here</p>
            <div className="mt-2">
              <input type="text" className='w-2/3 focus:outline-none rounded-lg bg-zinc-200 px-3 py-3 md:text-lg text-md' placeholder='promo code'/>
            <Button content = 'Submit'/>
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default Cart
