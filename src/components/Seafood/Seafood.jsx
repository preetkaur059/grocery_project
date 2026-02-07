import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgseafood from '../../assets/seafood-banner.jpg'


const Seafood = () => {
  return (
    <div>
      <CategoryPage title = 'Meat & SeaFood' bgImage = {bgseafood} categories={['SeaFood']}/>
    </div>
  )
}

export default Seafood
