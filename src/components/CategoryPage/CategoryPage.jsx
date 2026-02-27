import React from 'react'
import ProductList from '../ProductList/ProductList'
import Banner from '../Banner/Banner'
import Cards from '../Cards/Cards'
import noproductfound from '../../assets/no-product-found.webp'
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";


const CategoryPage = ({ title, bgImage, categories = [] }) => {

    const { searchItem } = useContext(StoreContext);

    const filteredItems = categories.includes('All') ? ProductList : ProductList.filter(item => categories.includes(item.category));

    const searchedItems = filteredItems.filter(product =>
        product.name.toLowerCase().includes(searchItem.toLowerCase()));

    const renderProduct = searchedItems.map((product) => {
        return (
            <Cards key={product.id}
                product={product} />
        )
    })

    return (
        <div>
            <Banner title={title} bgImage={bgImage} />
            <div id='product-section' className="grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto px-10">
                {searchedItems.length === 0 ? (
                    <p className='col-span-full flex justify-center items-center'>
                        <img src={noproductfound} alt="" />
                    </p>
                ) : (renderProduct)}

            </div>
        </div>
    )
}

export default CategoryPage
