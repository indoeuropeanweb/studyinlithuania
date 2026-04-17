import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import Image from "next/image";

const page = () => {
const backgroundImage = {
    backgroundImage: "url('/assets/images/admission/admission-banner.webp')", 
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
         <div className='bg-black/50 h-full w-full flex justify-center items-center'>
         <div className='container mx-auto'>
         <div className='flex justify-center items-center flex-col'>
             <h1 className='uppercase text-xl md:text-2xl lg:text-4xl text-white font-bold mt-5 text-center'>Admission</h1>
             <ul className='flex justify-center items-center mt-3 text-white'>
              <li><Link className='hover:underline' href="/">Home</Link></li>&nbsp;
              <IoIosArrowForward className='size-5'/>
              &nbsp;
              <li>Admission</li>
             </ul>
             </div>
             </div>
         </div>
        </section>
        <section className='my-10 mx-15'>
          <div className='container mx-auto'>
          <h3 className='text-justify text-lg md:text-xl lg:text-2xl font-semibold'>Lithuania Student Visa &amp; Residence Permit</h3>
          <p className='text-justify mt-3'>The application process for studying in Lithuania can sometimes become time-consuming
            and might require applicants to start preparing well in advance. Most of the international
            universities have deadlines between May &amp; June for the September intake. Early applicants
            get more time to complete documentation, meet eligibility requirements, and plan the next
            steps smoothly.</p>
          <p className='text-justify mt-3'>Each university or college has its own admission policies, eligibility criteria, and application
            procedures. With hundreds of universities and programs available, choosing the right
            institution can sometimes feel overwhelming. At Study in Lithuania Centre, we help simplify
            this journey.</p>
          <p className='text-justify mt-3'>Our goal is to expand your opportunities and introduce you to a wide range of Lithuanian
            universities so you can find the program that best matches your academic goals, career
            aspirations, and personal interests.</p>
        </div>
        </section>
        <section className='my-10 mx-15'>
         <div className='container mx-auto'>
            <p className='text-justify'>Through Admission in Lithuania | <Link className='font-semibold' href={'https://studyinlithuania.in'}>Study in Lithuania</Link> with Indo European – Eligibility &amp;
Process, our experts offer detailed support, including:</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>
               <ul className='flex flex-col gap-3'>
                <li className='font-semibold'>Understanding Entry Requirements</li>
                <li className='font-semibold'>Information on Tuition Fees</li>
                <li className='font-semibold'>Guidance on University Selection</li>
                <li className='font-semibold'>Assistance with Application Documentation</li>
                <li className='font-semibold'>Step-by-step help throughout the admission process</li>
               </ul>
               <div>
                <Image className="" width={420} height={540} src="/assets/images/admission/admission-girl.png" alt="Study in Lithuania - Admission" />
               </div>
            </div>
            <p className='text-justify mt-3'>With expert guidance from <Link className='font-semibold' href={'https://indoeuropean.in'} target='_blank'>Indo European</Link>, you can confidently take the next step toward
achieving your dream of studying in Lithuania.</p>
         </div>
        </section>
    </div>
  )
}

export default page