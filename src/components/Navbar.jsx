import { IoIosMenu } from "react-icons/io";
import Logo from "../assets/logo.png"
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUser } from "react-icons/fa"; 
import { useState } from "react";
import {IoMdClose} from "react-icons/io"
import {FaBell}  from "react-icons/fa"
import Dropdown from "./Dropdown";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from 'react';
import { data, Link } from "react-router-dom";
import { useUser } from "../context/userContext";


const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [open, setOpen] = useState(false)

  const {user} = useUser();

   useEffect(() => {
        AOS.init();
      }, []);
    

  const toggleMobileNav = () =>(
    setShowMobileNav(!showMobileNav)
  );

const notify = [
    {
      body: "New message received"
    },
    {
      body: "Order shipped"
    },
    {
      body: "New comment on your post"
    }
  ]

    return(
     <div> 
<nav className='flex  items-center ml-auto px-8 py-4  text-white bg-[#39ACDC]'> 
  <div className="flex items-center gap-1">
      {user && user.image && (
  <img src={user.image} alt="User" className="w-8 h-8 rounded-full" />

)}
    {user ? user.firstName : "visitor"}
 
  </div>
    <div className='text- 2xl ml-4 font-bold'>
        <img src={Logo} alt="Logo"/>
    </div>
    <div className="hidden lg:flex ml-10">
      <ul className='flex justify-start gap-4 cursor-pointer'>
       <li className='hover:cursor-pointer'>EVERYTHING</li>
        <li className='hover:cursor-pointer'>WOMEN</li>
        <li className='hover:cursor-pointer'>MEN</li>
        <li className='hover:cursor-pointer'>ACCESSORIES</li>
      </ul>
    </div>
    <div className=" hidden lg:block ml-auto items-center ">
        <div className="flex flex-wrap gap-14">
           <ul className="flex gap-2">
            <Dropdown/>
            <Link to="/about">
              <li className="cursor-pointer">ABOUT</li>
            </Link>
            
            <li className="cursor-pointer">CONTACT US</li>
           </ul>

           <div className="flex gap-4 items-center text-md"> 
            <p className="cursor-pointer">$0.50</p>
           <div className="relative h-[30px] w-[30px] rounded-full border-0 flex justify-center items-center  text-white  transition-all duration-300 ease-in-out">
            <p><HiOutlineShoppingBag className="text-[20px] cursor-pointer"/> </p>
            <div className="w-fit px-[5px] rounded-[10px] font-semibold bg-white text-[10px] text-black absolute top-0 left-5"> 0 </div>
            </div>

            <div>
                <button onClick={() => setShowNotifications((show) => !show)}>
                  <FaBell/>
                </button>
              </div>
            <p className="cursor-pointer"> <FaUser /></p>

           </div>
        </div>
      {/* <button className='bg-black px-6 py-2 rounded-full hover:bg-green-500 hover: text-red-500'>Login</button> */}
    </div>

     <div className="flex lg:hidden ml-auto ">
      
      <button onClick={toggleMobileNav} className='z-[1000]'>
        
         { showMobileNav ? <IoMdClose className="text-black text-3xl cursor-pointer" /> :
           <IoIosMenu  className="text-4xl text-red-700 cursor-pointer"/>}
   </button>
    </div>
    
   </nav>

  {showNotifications && (
        <article
        data-aos="fade-up" 
      data-aos-duration="300"
         className="rounded-md bg-white px-4 py-2 divide-y-[1px] text-sm w-[400px] h-fit space-y-2 shadow-lg absolute right-4 top-16 z-50">
          
            {notify.map((n, index) =>(
            <div key={index} className=" p-2 rounded relative">
              {n.body}
            </div>
            )) }
          
          
        </article>
      )}

   {showMobileNav && (
    <aside className="w-[80%] h-screen lg:hidden block absolute bg-white right-0 top-0"> 
    <div className="py-6"> 
      <FaUser className=" ml-4 text-4xl mb-4"/>
      <ul className="divide-y-2 ">
        <li className="p-4">EVERYTHING</li>
        <ul className="p-4 cursor-pointer" onClick={() => setOpen(!open)}>
        
          HOME
         { open &&  <div className="space-y-2 ml-3 font-semibold transition-all duration-00">
         <li>Home 1</li>
          <li>Home 1</li>
          <li>Home 1</li>
          </div>}

          </ul>
        <li className="p-4">MEN</li>
        <li className="p-4">ACCESSORIES</li>
      </ul>
       <span className="mt-5 p-4">ABOUT</span>
    </div>
   </aside>
   )}
     </div>  
    );
};

export default Navbar;