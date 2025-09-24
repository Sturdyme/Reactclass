
import axios from 'axios';
import React, { lazy, useEffect, useState } from 'react'
import AOS from "aos";
import { Link } from 'react-router-dom';




const Products = () => {
    const [product, setProducts] = useState([]);

    const limitedProducts = product.slice(0,10);
//Asynchronous API mapping
useEffect(() => {
    AOS.init();
    const fetchProduct = async() =>{
        try{
       const response = await  axios.get("https://dummyjson.com/products")
       setProducts(response.data.products);
       console.log(product);
} catch(error) {
    console.error("error", error);
}
    };
    fetchProduct()

}, []);
  return (
   <section  data-aos="fade-up" 
      data-aos-duration="2000" className="grid grid-cols-5 mt-14">
     {limitedProducts.map((p, index) =>(
        <Link to={`products/${p.id}`}>
          
          <article className="border rounded-lg overflow-hidden bg-white shadow-sm flex flex-col">
            <img
              src={p.images[0]}
              alt="img"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="p-3 flex-1 flex flex-col">
              <h3 className="font-semibold line-clamp-2">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{p.brand}</p>

              <div className="mt-auto">
                <div className="flex items-center justify-between mt-3">
                  <span className="text-lg font-bold">{p.price}</span>
                  <span className="text-sm">⭐{p.rating}</span>
                </div>
                <button className="mt-3 w-full bg-blue-600 border rounded py-2 hover:bg-gray-400 transition duration-500 ease-in-out">
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </section>
  )
}

export default Products
