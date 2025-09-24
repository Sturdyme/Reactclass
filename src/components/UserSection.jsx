import { User } from 'lucide-react'
import React from 'react'
import UserCard from './User'
import gaffer from '../assets/gaffer.png'
import andrea from '../assets/andrea.png'
import female from '../assets/female.png'
import prof from '../assets/prof.png'
import ricardo from '../assets/ricardo.png'

const Usersection = () => {
  return (
    <div className='grid grid-cols-6 py-6 px-6 '>
  <UserCard Name="Emmanuel" Occupation="UI/UX designer" Email="Emmy1010@mail.com" profilepicture="https://randomuser.me/api/portraits/men/32.jpg"/>
  <UserCard Name="Boluwaji" Occupation="Graphic Designer" Email="Sturdyme@outlook.com" profilepicture={gaffer}/>
  <UserCard Name="Michael" Occupation="Full Stack Debveloper" Email="Whatever@gmail.com" profilepicture={andrea}/>
  <UserCard Name="Pelumi" Occupation="Software Engineer" Email="Neverlack@gmail.com" profilepicture={female}/>
  <UserCard Name="Anjola" Occupation="Techician" Email="Techguru@gmail.com" profilepicture={prof}/>
  <UserCard Name=" Priscy" Occupation=" Sales marketer" Email="Sales@mail.com" profilepicture={ricardo}/>
    </div>
  )
}

export default Usersection;
