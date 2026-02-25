import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";


const Cards = ({product, addToCart}) => {
    
    const { addToWishlist } = useContext(StoreContext);
      return (
    <div className='bg-zinc-200  p-5 rounded-xl'>
    <div className="flex justify-between">
        <span className='text-3xl text-zinc-400 cursor-pointer'> <FaHeart/> </span>
        <button onClick={() => addToWishlist(product)} className='cursor-pointer bg-gradient-to-b from-orange-400 to-orange-600 text-white text-xl px-4 py-3 rounded-xl'>
            <FaPlus/>
        </button>
    </div>

     {/* card image  */}
    <div className="w-full  h-50 ">
        <img src= {product.image} className='w-full h-full object-contain' alt="" />
        </div>

        {/* card content  */}

        <div className="text-center ">
            <h3 className='text-xl font-semibold'>{product.name}</h3>
            <p className={`text-2xl font-bold mb-3 my-2 `}>${product.price.toFixed(2)}</p>
            <button 
            onClick={() => addToCart(product)}
             className='inline-block mt-2 mb-2 bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:from-to-orange-600 transition-all duration-300 cursor-pointer'>Add To Cart</button>
        </div>

    </div>


    
  )
}

export default Cards
