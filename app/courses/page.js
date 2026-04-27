import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const page = () => {

  const backgroundImage = {
    backgroundImage: "url('/assets/images/visa-pr/visa-pr.webp')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000"
  }

  return (
    <div>
       <section className='h-80 flex justify-center items-center' style={backgroundImage}>
          <div id="hero"></div>
         {/* <Image className='opacity-50' width={1380} height={180} src={'/assets/images/aboutus/Aboutus-Lithuania.webp'} alt='Study in Lithuania' />  */}
         <div className='bg-black/50 h-full w-full flex justify-center items-center'>
         <div className='container mx-auto'>
         <div className='flex justify-center items-center flex-col'>
             <h1 className='uppercase text-xl md:text-2xl lg:text-4xl text-white font-bold mt-5 text-center'>Explore Courses</h1>
             <ul className='flex justify-center items-center mt-3 text-white'>
              <li><Link className='hover:underline' href="/">Home</Link></li>&nbsp;
              <IoIosArrowForward className='size-5'/>
              &nbsp;
              <li>Courses</li>
             </ul>
             </div>
             </div>
         </div>
        </section>
    </div>
  )
}

export default page