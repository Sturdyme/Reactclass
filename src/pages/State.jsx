import React, { useState } from 'react';

const State = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName, email, password, message)
    }
  return (

    <section className='p-24'>
      <form onSubmit={handleSubmit} className='space-y-4 m-auto flex flex-col'>
        
        <label htmlFor='fullname'>Full name</label>
        <div className='border-[1px] border-black rounded-lg w-[400px] h-[40px] pl-3 flex items-center'>
           
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='outline-none w-full'
            type='text'
            id='fullname'
            placeholder='Enter your full name'
            required
          />
        </div>

     <label htmlFor='email'>Email</label>
        <div className='border-[1px] border-black rounded-lg w-[400px] h-[40px] pl-3 flex items-center'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='outline-none w-full'
            type='email'
            id='email'
            placeholder='Enter your email'
            required
          />
        </div>

       <label htmlFor='password'>Password</label>
        <div className='border-[1px] border-black rounded-lg w-[400px] h-[40px] pl-3 flex items-center'>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='outline-none w-full'
            type='password'
            id='password'
            placeholder='Enter your password'
            required
          />
        </div>

     <label htmlFor='message'>Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id='message'
          className='border border-black rounded-lg w-[400px] h-[100px] p-3 resize-none outline-none'
          placeholder='Enter your message'
        />

        
        <button className='bg-blue-500 px-4 py-2 rounded-lg w-fit text-white'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default State;

