import React, { useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const openDropdown = () => setShowDropdown(true);
  const closeDropdown = () => setShowDropdown(false);
  
    useEffect(() => {
      AOS.init();
    }, []);
  
  return (
    <section
     className='relative'
      onMouseEnter={openDropdown}
     onMouseLeave={closeDropdown}>
        <div className='flex items-center gap-1 cursor-pointer'>
            <li>HOME</li>
            { showDropdown ? <BiChevronDown/>: <BiChevronRight/>  }
        </div>
   { showDropdown && <div 
   data-aos="fade-up" 
      data-aos-duration="300"className='absolute z-[2000] w-[100px] bg-white text-black  rounded-sm  p-3 font-semibold space-y-2 top-6 right-6'> 
     <li>Home 1</li>
      <li>Home 2</li>
      <li>Home 3</li>
    </div>}
    </section>
      
  )
}

export default Dropdown
