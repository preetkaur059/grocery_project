import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgdairy from '../../assets/dairy-banner.jpg'


const Dairy = () => {
  return (
    <div>
      <CategoryPage title = 'Dairy & Eggs' bgImage = {bgdairy} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy
