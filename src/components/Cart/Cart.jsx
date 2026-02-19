import React from 'react'
import cart from '../../assets/banana.png'

const Cart = () => {
  return (
    <div className='max-w-[1400px] mt-40  mx-auto'>
      <div className="flex justify-between m-5 text-2xl font-semibold text-zinc-800  ">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="mb-4 border-zinc-500" />

      <div className="">
        <img className='h-15' src={cart} alt="" />
      </div>

    </div>
  )
}

export default Cart
