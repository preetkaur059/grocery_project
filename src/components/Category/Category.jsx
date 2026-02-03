import React from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import FruitsVeggies from '../../assets/fruits-and-veggies.png'
import DairyEggs from '../../assets/dairy-and-eggs.png'
import MeatSeaFood from '../../assets/meat-and-seafood.png'

const Category = () => {
    const renderCards = category.map(card => {
        return (
            <div className= 'flex-1  basis-[300px]' key={card.id}>
            <div className="w-full min-h-[30vh]  relative -mb-10">
            <img src={card.image} className='absolute bottom-0' alt="" />
            </div>

            <div className="bg-zinc-300 pt-17 p-8 rounded-xl">
                <h2 className='md:text-3xl text-2xl font-bold'>{card.title}</h2>
                <p className='mt-3 md:text-lg text-xl mb-9'>{card.description}</p>
                 <Button content="See All"/>
            </div>
            </div>
        )
    })
    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 py-20">
            <Heading highlight="Shop" heading="by category" />

            <div className="flex flex-wrap md:mt-15 gap-10 ">
                {renderCards}
            </div>
            </div>

        </section>
    )
}

export default Category

const category = [
    {
        id: 1,
        title: 'Fruits & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: FruitsVeggies
    },
    {
        id: 2,
        title: 'Dairy & Eggs',
        description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        image: DairyEggs
    },
    {
        id: 3,
        title: 'Meat & SeaFood',
        description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        image: MeatSeaFood
    }
]
