import React, { useEffect, useState } from 'react'
import ricardo from '../assets/ricardo.png'
import { BsThreeDots } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { CiSettings } from 'react-icons/ci'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const SinglePostPage = () => {
const [posts, setPost] = useState([]);
 const {id} = useParams();

useEffect(() => {
  const fetchPost = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/posts/${id}`);
      console.log(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };
  fetchPost();
}, [id]);

  return (
    <section className='flex justify-center  mt-10'>

      <div className='bg-white w-[800px] flex flex-col-1 justify-between p-10 shadow-lg h-[70vh]'>

      <div className='flex gap-3'>
        <img className='w-10 h-10 rounded-full' src={ricardo}/>
        <div className="flex flex-col">
          <h1 className='mb-1'>Lessons Taught by Life</h1>
          <div className='flex gap-3 items-center'>
            <p>7h</p>
            <CiSettings />
          </div>
        </div>
      </div>

       <div className='flex gap-3'> 
        <BsThreeDots />
        <IoClose />
       </div>
      </div>
     
      
    </section>
  )
}

export default SinglePostPage
