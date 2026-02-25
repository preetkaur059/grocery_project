import React from 'react'
import image22 from '../../assets/cabbage.png'

const Wishlist = () => {
  return (
    <div className='max-w-[1400px] mt-40 mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-items-start ml-10 gap-5">
        <div className="bg-zinc-200 px-10 p-5 rounded-xl">
          <div className="w-full  h-50 ">
            <img src={image22} className='w-full h-full object-contain' alt="" />
          </div>
          <div className="text-center ">
            <h3 className='text-xl font-semibold'>Cabbage</h3>
            <p className={`text-2xl font-bold mb-3 my-2 `}>$22</p>
            <button className='inline-block mt-2 mb-2 bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:from-to-orange-600 transition-all duration-300 cursor-pointer'>Add To Cart</button>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Wishlist
