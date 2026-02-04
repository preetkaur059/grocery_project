import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const Product = () => {
  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
  const [activeTab, setActiveTab] = useState('All');
 
  let filteredItems = activeTab === 'All' ? ProductList : ProductList.filter(item => item.category === activeTab);
  const renderCards = filteredItems.slice(0,8).map(
    product => {
        return(
            <Cards image = {product.image} 
            name = {product.name} 
            price = {product.price} />
        )
    }
  )

  return (
    <section>
        <div className="max-w-[1400px] mx-auto px-10 py-20">
            <Heading highlight = "Our" heading = "Products"/>
            
                <div className="flex gap-4 justify-center mt-10 flex-wrap">
                    {categories.map(category => {
                        return (
                            <button key={category} className = {` rounded-lg cursor-pointer px-5 py-2 text-lg ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-200'} `} onClick = {() => {
                                setActiveTab(category)
                            }}>
                            {category} </button>
                        )
                    })}
                </div>
                {/* Product Listing  */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mt-20">
                    {renderCards}
                    </div>
                    <div className='w-fit mx-auto mt-10'>
                    <Button content ="View All"/>
                </div>
        </div>
    </section>
  )
}

export default Product


