import React from 'react'

const List = () => {
    //Array of Objects
    const User = [
        {
        name:"Sturdy Me",
        position: "General Manager",
        age: "25",
        img: "https://images.unsplash.com/photo-1713946598186-8e28275719b9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

     {
        name:"Omowaye Emmanuel",
        position: "Payroll Officer",
        age: "27",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuYWdlcnxlbnwwfHwwfHx8MA%3D%3D",
    },

     {
        name:"Emmanuel Boluwaji",
        position: "Assistant Manager",
        age: "45",
        img: "https://images.unsplash.com/photo-1713946598186-8e28275719b9?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    
];
  return (
    <section className='p-12 grid grid-cols-5 gap-3'>
    { User.map((u,index) => (
     <div key={index} className='h-fit w-[100%] rounded-lg p-4 bg-grey-200 shadow-lg border-[1px] flex flex-col '>
        <img className='w-60 h-60' src={u.img}/>
      <h3 className='font-bold text-xl text-black'>{u.name}</h3>
      <p className='text-grey-600'>{u.position}</p>
      <p className='font-semibold'>{u.age}</p>
      </div>
    ))  }
    </section>
  )
}

export default List
