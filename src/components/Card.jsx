import React from 'react'
import Buttons from './Utilities/Buttons'
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from 'react';

const Card = ({imageUrl, discountInfo, body, }) => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <article data-aos="fade-up" 
      data-aos-duration="2000"
       className=" relative flex items-end justify-center bg-cover bg-center h-[400px] w-[400px]" style= {{backgroundImage:`url(${imageUrl})` }}>
        <div className="absolute inset-0 bg-black opacity-25"></div>
       <div className="w-[80%] mb-4 space-y-4 z-10"> 
        <h1 className="text-white text-2xl font-bold">{discountInfo}</h1>
        <p className="text-white text-md">{body}</p>
        <Buttons/>
       </div>
       </article>
    </div>
  )
}

export default Card
