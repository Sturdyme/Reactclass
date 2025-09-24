import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
const [singleProducts, setSingleProducts] = useState([])

const {id} = useParams();

    useEffect(() => {
        const fetchSingleProducts = async() => {
            try{
                const response = await axios.get(`https://dummyjson.com/products/${id}`);//Template string
                console.log(response.data);
                setSingleProducts(response.data); 

            } catch (err) {
                console.error("error", err)
            }
        };
        fetchSingleProducts();
    }, [id])

  return (
    <>
       <div className="p-6 max-w-xl mx-auto border rounded shadow">
      <img src={singleProducts.images} alt="" className="h-48 mx-auto" />
      <h2 className="text-xl font-bold mt-4">{singleProducts.title}</h2>
      <p className="text-gray-700 mt-2">{singleProducts.description}</p>
      <p className="text-green-600 font-semibold mt-3 text-lg">${singleProducts.price}</p>
    </div>
</>
  )
}

export default SingleProductPage
