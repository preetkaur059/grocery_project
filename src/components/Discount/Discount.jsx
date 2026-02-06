import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
    <section className= 'bg-zinc-200 bg-right bg-no-repeat bg-contain' 
     style={{backgroundImage:`url(${FreshFruits})`}}>
        <div className="py-10 max-w-[1400px] mx-auto ">
            <div className="flex  ">
            <span className='text-9xl text-orange-500 pt-15 font-bold transform -rotate-90 '>20%</span>
            
            <div className=" max-w-[700px] ">
                <h3 className='text-7xl text-zinc-800 font-bold'>First Order Discount! </h3>
                <p className='text-zinc-600 my-6'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                <Button content="Get a Discount"/>
            
            </div>
        </div>
        </div>
    </section>
  )
}

export default Discount
