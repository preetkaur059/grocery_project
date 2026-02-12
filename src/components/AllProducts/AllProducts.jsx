import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgFruits from '../../assets/all-banner.jpg'
import { FaHome } from 'react-icons/fa'


const AllProducts = () => {
  return (
    <div>
      <FaHome/>
       <CategoryPage title = 'Fruits & Veggies' bgImage = {bgFruits} categories={['All']}/>
    </div>
  )
}

export default AllProducts
