import React, { useState } from 'react'
import { PiAlignCenterHorizontalSimpleDuotone } from 'react-icons/pi';

const Conditon = () => {
    const[login, setLogin] = useState(false);
    const handleLogin = () => {
        setLogin(true)

    } 
    const handleLogout = () => {
        setLogin(false)
    }
    
return ( 
<section className='p-[150px] space-y-3' >
   { login? <p className='text-3xl'>Hello Emmy</p> : <p className='text-3xl'>Hello Visitor</p>}
  <div className='space-x-4'> 
    <button onClick={handleLogin} className='bg-blue-500 px-4 py-2 rounded-lg w-fit text-white'>Login</button>

  <button onClick={handleLogout} className='bg-blue-500 px-4 py-2 rounded-lg w-fit text-white' >Logout</button></div> 
   
</section>
);
};

export default Conditon
