import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  const backgroundImage = {
  backgroundImage: "url('/assets/images/aboutus/Aboutus-back.webp')", 
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#000"
  }
  return (
    <div className=''>
        <section className='h-80 flex justify-center items-center' style={backgroundImage}>
          <div id="hero"></div>
         {/* <Image className='opacity-50' width={1380} height={180} src={'/assets/images/aboutus/Aboutus-Lithuania.webp'} alt='Study in Lithuania' />  */}
         <div className='px-10 bg-black/50 h-full w-full flex justify-center items-center flex-col'>
             <h1 className='uppercase text-xl md:text-2xl lg:text-4xl text-white font-bold mt-5 text-center'>About Us</h1>
             <ul className='flex justify-center items-center mt-3 text-white'>
              <li><Link className='hover:underline' href="/">Home</Link></li>&nbsp;
              <IoIosArrowForward className='size-5'/>
              &nbsp;
              <li>About Us</li>
             </ul>
         </div>
        </section>
        <section className='py-10'>
          <div className='grid grid-template-cols grid-cols-2 px-10'>
             <div className=''>
                <h3 className='my-3 text-xl md:text-2xl lg:text-4xl'>Study in Lithuania Centre</h3>
                <p className='mt-10 text-justify'>Our vision at the Study in Lithuania Centre is to empower students to unlock their potential
by guiding them towards the right courses and universities in Lithuania, by helping them to
identify their passion, make informed academic decisions, and achieve academic excellence
through international education.</p>
                <p className='text-justify mt-3'>The Study in Lithuania Centre aims to act as a bridge between ambitious international
students and top Lithuanian universities. By creating this strong connection, we not only
help students build successful global careers but also support universities in discovering
talented individuals who align with their academic and professional values.</p>
<p className='text-justify mt-3'>We specialise in providing expert guidance for students who wish to study in Lithuania,
offering access to a wide range of internationally recognised degree programs and modern
learning facilities.</p>
<p className='text-justify mt-3'>Our experienced education consultants possess in-depth knowledge of the Lithuanian
higher education system and provide personalised study abroad counselling at every stage
of the journey. From understanding admission requirements and course selection to
assisting with student visa applications for Lithuania, our team ensures a smooth and
stress-free transition into student life abroad.</p>
             </div>
             <div className=''>
                 <Image className='rounded-md mx-auto' height={900} width={400} src={'/assets/images/aboutus/Aboutus-3.webp'} alt="Study in Lithuania"/>
             </div>
          </div>
        </section>
    </div>
  )
}

export default page