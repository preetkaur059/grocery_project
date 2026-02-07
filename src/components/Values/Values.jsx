import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import basket from '../../assets/basket-full-vegetables.png'

const Values = () => {

        const leftValues = value.slice(0,2).map(item => {
            return (
                <div className="flex md:flex-row-reverse items-center">
                    <div key= {item.id} className="items-center gap-7">
                        <span className='flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full text-3xl text-white'>{item.icon}</span>
                    </div>

                    <div className="md:text-right m-5">
                        <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                        <p className='text-zinc-600 mt-2 text-lg'>{item.para}</p>
                    </div>
                </div>
               
            )
        })

        const rightValues = value.slice(2).map(item => {
            return (
                <div className="flex items-center">
                    <div key= {item.id} className="items-center gap-7">
                        <span className='flex justify-center items-center bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full text-3xl text-white'>{item.icon}</span>
                    </div>

                    <div className="m-5">
                        <h3 className='text-zinc-800 text-3xl  font-bold'>{item.title}</h3>
                        <p className='text-zinc-600 mt-2 text-lg'>{item.para}</p>
                    </div>
                </div>
               
            )
        })
    

  return (
    <section>
        <div className=" max-w-[1400px] mx-auto px-10 md:py-15 py-10">
            <Heading highlight = "Our" heading = "Values" />

            {/* left values  */}
            <div className="flex gap-5 mt-10 md:flex-row flex-col">
                <div className=" flex flex-col justify-between">
                {leftValues}</div>
            
            {/* center image */}
            <div className="w-1/2  md:flex hidden ">
            <img src={basket} alt="fruits" />
            </div>

            {/* right values */}
            <div className=" flex flex-col justify-between">{rightValues}</div>

        </div>
        </div>
    </section>
  )
}

export default Values

const value = [
    {
        id : 1,
        title : 'Trust', 
        para : 'It is a long established fact that a reader will be distracted by the readable.',
        icon : <FaHeart/>
    },
    {
        id : 2,
        title : 'Always Fresh', 
        para : 'It is a long established fact that a reader will be distracted by the readable.',
        icon : <FaLeaf/>
    },
    {
        id : 3,
        title : 'Food Safety', 
        para : 'It is a long established fact that a reader will be distracted by the readable.',
        icon : <FaShieldAlt/>
    },
    {
        id : 4,
        title : '100% Organic', 
        para : 'It is a long established fact that a reader will be distracted by the readable.',
        icon : <FaSeedling/>    
    },
]
