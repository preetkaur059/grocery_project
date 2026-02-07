import React from 'react'
import Heading from '../Heading/Heading'
import customer1 from '../../assets/customer1.jpg'
import customer2 from '../../assets/customer2.jpg'
import customer3 from '../../assets/customer3.jpg'
import customer4 from '../../assets/customer4.jpg'
import customer5 from '../../assets/customer5.jpg'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Autoplay,Navigation } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {

    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-10 py-15">
                <Heading highlight='Customers' heading='Saying' />

                <div className="py-5 md:mt-0 mt-10 flex justify-end gap-x-3">
                    <button className='custom-next text-2xl rounded-lg flex justify-center items-center h-11 w-11 bg-zinc-200 text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 hover:text-white cursor-pointer transition-all'><MdOutlineArrowBackIosNew /></button>
                    <button className='custom-prev text-2xl rounded-lg flex justify-center items-center h-11 w-11 bg-zinc-200 text-zinc-800 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 hover:text-white cursor-pointer transition-all'><MdOutlineArrowForwardIos /></button>
                </div>

                <Swiper navigation={{ nextEl: ".custom-prev", prevEl: ".custom-next" }} modules={[Navigation,Autoplay]} autoplay={{delay: 2500, pauseOnMouseEnter: true, disableOnInteraction: false,}} loop={true} spaceBetween={20} breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }} className="mySwiper" >
                    {
                        review.map((item) => (
                            <SwiperSlide key={item.id} className="bg-zinc-100 rounded-xl p-8">
                                <div className="flex gap-5 items-start">

                                    <div className="w-16 h-16 rounded-full bg-zinc-800 outline outline-3  outline-orange-600 outline-offset-4 overflow-hidden">
                                        <img src={item.image} className="w-full h-full object-cover" alt="profile" />
                                    </div>
                                    <div>
                                        <h5 className="text-xl text-zinc-900 font-bold">{item.name}</h5>
                                        <p className="text-zinc-600">{item.profession}</p>
                                        <span className="flex text-yellow-400 mt-2 text-xl gap-1">{Array(item.rating).fill().map((_, i) => ( <FaStar key={i} />))} </span>
                                                </div>
                                                </div>
                                            <div className="min-h-[15vh]">
                                        <p className="text-zinc-600 mt-4">{item.para}</p>
                                        </div>
                                    
                                
                            </SwiperSlide>
                        ))}
                    </ Swiper>
            </div>
        </section>
    )
}

export default Testimonials

const review = [
    {
        id: 1,
        name: 'Emily Johnson',
        profession: 'Food Blogger',
        rating: 3,
        para: 'FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!',
        image: customer1,
    },
    {
        id: 2,
        name: 'David Smith',
        profession: 'Chef',
        rating: 4,
        para: 'As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!',
        image: customer2,
    },
    {
        id: 3,
        name: 'Alya Zahra',
        profession: 'Model',
        rating: 5,
        para: 'Shopping online with FreshBasket has saved me so much time. I trust them for my familys weekly groceries—always fresh, affordable, and reliable.',
        image: customer3,
    },
    {
        id: 4,
        name: 'Carlos Mendes',
        profession: 'Fitness Coach',
        rating: 3,
        para: 'I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!',
        image: customer4,
    },
    {
        id: 5,
        name: 'Natcha Phongchai',
        profession: 'Nutritionist',
        rating: 3,
        para: 'FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.',
        image: customer5,
    },
]
