import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import Seafood from './components/Seafood/Seafood'
import AllProducts from './components/AllProducts/AllProducts'
import Cart from './components/Cart/Cart'
import Payment from './components/Payment/Payment'
import Wishlist from './components/Wishlist/Wishlist'
import Layout from './components/Layout/Layout'
import { StoreProvider } from './context/StoreContext'  
import DeliveryInformation from './components/DeliveryInformation/DeliveryInformation'
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation'
import OrderTracking from './components/OrderTracking/OrderTracking'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import ProcessPage from './components/ProcessPage/ProcessPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
    children: 
    [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/fruits',
      element: <Fruits/>,
    },
    {
      path: '/dairy',
      element: <Dairy/>,
    },
    {
      path: '/seafood',
      element: <Seafood/>,
    },
    {
      path: '/allproducts',
      element: <AllProducts/>,
    },
    {
      path: '/wishlist',
      element: <Wishlist/>,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/DeliveryInformation',
      element: <DeliveryInformation />,
    },
    {
      path: '/OrderConfirmation',
      element: <OrderConfirmation />,
    },
    {
      path: '/OrderTracking',
      element: <OrderTracking />,
    },
    {
      path: '/AboutUs',
      element: <AboutUs />,
    },
    {
      path: '/ProcessPage',
      element: <ProcessPage />,
    },
    {
      path: '/Contact',
      element: <Contact />,
    },
  ]
}
  ])
  return (
    <StoreProvider> 
    <RouterProvider router={router}/>
    </StoreProvider> 
  )
}

export default App
