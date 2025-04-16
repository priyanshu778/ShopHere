import React from 'react'
import Layout from '../../components/Layout/Layout'
import Herosection from '../../components/Herosection/Herosection'
import Category from '../../components/Category/Category'
import HomePageProductCard from '../../components/HomePageProductCard/HomePageProductCard'
import Track from '../../components/Track/Track'
import Testmonial from '../../components/Testmonial/Testmonial'
import Loader from '../../components/loader/Loader'
import { useContext } from 'react'
import MyContext from '../../context/myContext'
 

const Home = () => {
  return (
    
       <Layout>
              <Herosection/>
              <Category/>
              <HomePageProductCard/>
              <Track/>
              <Testmonial/>
              <Loader/>
       </Layout>    
   
  )
}

export default Home
