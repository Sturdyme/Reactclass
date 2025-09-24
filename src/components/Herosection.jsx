import Buttons from "./Utilities/Buttons";

const HeroSection = () =>{
  const winter= true;
    return(
   <div className=' h-screen flex items-center bg-[url(https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg)]'>
    <div className='space-y-4'>
     { winter ? <h1 className='text-5xl text-white pl-10'>Raining offers for <br/> Cold Winter</h1> 
     : <h1 className='text-5xl text-white pl-10'>Raining offers for <br/> Hot Summer</h1>}
      <h2 className='text-3xl text-white pl-10'>25% off on all products</h2>
    <div className='space-x-8 pl-10 '>
      <Buttons/>
      <button className=' sm;hidden :hidden border-[1px] border-white text-white px-8 py-4 rounded-lg hover:text-black hover:bg-white  transition-all ease-in-out duration-1000'>Find more</button></div> 
   </div>
   </div>
    )
}
export default HeroSection;