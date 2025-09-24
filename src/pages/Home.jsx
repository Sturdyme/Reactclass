import List from "./List"
import Features from "../components/Features"
import HeroSection from "../components/Herosection"
import Navbar from "../components/Navbar"
import UserCard from "../components/User"
import Usersection from "../components/UserSection"
import React, { lazy, Suspense, useEffect, useState } from "react"
import Loader from "../components/Loader"
import { FloatButton } from "antd"


// import Products from "../components/Products"

const Products =lazy(() => {
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(import("../components/Products"))
    }, 5000)
  });
});




const Home = () => {

//Dependency Array
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Features/>
    <Usersection/>
    <Suspense fallback={<Loader/>}>
      <Products />
    </Suspense>
    <FloatButton.BackTop visibilityHeight={0} />
    {/* <List/> */}
    {/* <Products/> */}
    {/* <button onClick={() => setCount(count + 1)}>Add</button> */}
    
    
  
    </div>
  );
}

export default Home
