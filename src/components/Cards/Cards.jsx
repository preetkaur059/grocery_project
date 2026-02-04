import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({image, name, price}) => {
  return (
    <div className='bg-zinc-200  p-5 rounded-xl'>
    <div className="flex justify-between">
        <span className='text-3xl text-zinc-400 cursor-pointer'> <FaHeart/> </span>
        <button className='cursor-pointer bg-gradient-to-b from-orange-400 to-orange-600 text-white text-xl px-4 py-3 rounded-xl'>
            <FaPlus/>
        </button>
    </div>

     {/* card image  */}
    <div className="w-full  h-50 ">
        <img src= {image} className='w-full h-full object-contain' alt="" />
        </div>

        {/* card content  */}

        <div className="text-center ">
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className={`text-2xl font-bold mb-3 my-2 `}>${price.toFixed(2)}</p>
            <Button content='Add To Cart'/>
        </div>

    </div>


    
  )
}

export default Cards
