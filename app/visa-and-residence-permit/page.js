import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {

  const backgroundImage = {
    backgroundImage: "url('/assets/images/visa-pr/visa-pr-banner.webp')", 
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
             <h1 className='uppercase text-xl md:text-2xl lg:text-4xl text-white font-bold mt-5 text-center'>Visa &amp; PR</h1>
             <ul className='flex justify-center items-center mt-3 text-white'>
              <li><Link className='hover:underline' href="/">Home</Link></li>&nbsp;
              <IoIosArrowForward className='size-5'/>
              &nbsp;
              <li>Visa &amp; PR</li>
             </ul>
             </div>
             </div>
         </div>
        </section>
        <section className='my-10 mx-15'>
          <div className='container mx-auto'>
          <h3 className='text-justify text-lg md:text-xl lg:text-2xl font-semibold'>Lithuania Student Visa &amp; Residence Permit</h3>
          <p className='text-justify mt-3'>Navigating the Visa &amp; Residence permit process is one of the crucial steps in initiating your
educational journey in Lithuania. Although the process may seem complicated at first, with the right
guidance, it becomes simple and manageable.</p>
          <p className='text-justify mt-3'>Obtaining a student visa and temporary residence permit is an important step for students
planning to <Link className='font-semibold' href={'https://www.studyinlithuania.in'}>study in Lithuania</Link>. Although the process may seem complicated at first, with the
right guidance, it becomes simple and manageable. With over two decades of experience,
our expert team at <Link className='font-semibold' href={'https://indoeuropean.in'} target='_blank'>Indo European</Link> has successfully assisted numerous students in
completing the <Link className='font-semibold' href={'https://www.studyinlithuania.in/visa-and-residence-permit'}>visa and residence permit</Link> process smoothly.</p>
        </div>
        </section>
        <section className='my-10 mx-15'>
          <div className='mx-auto container'>
            <p className='text-justify'>Under the Lithuania Student <Link className='font-semibold' href={'https://www.studyinlithuania.in/visa-and-residence-permit'}>Visa &amp; Residence Permit</Link> | Study in Lithuania with Indo
European, we provide step-by-step assistance to our students to submit their documents on
time. Here’s a simplified breakdown of the steps involved:</p>
           <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
             <ul className='flex flex-col gap-3'>
              <li className='font-semibold'>1. Prepare the Required Documents</li>
              <li className='font-semibold'>2. Submit Online Application on MIGRI Portal</li>
              <li className='font-semibold'>3. Book a VFS Appointment</li>
              <li className='font-semibold'>4. Attend Migration Department Interview</li>
              <li className='font-semibold'>5. Collect the Temporary Residence Permit Card</li>
             </ul>
           <div className=''>
                <Image className="" height={400} width={280} src="/assets/images/visa-pr/Travel-Lithuania.png" alt="Visa and Residence Permit" />
            </div>
            </div>
            <p className='mb-10'>With expert support from <Link className='font-semibold' href={'https://indoeuropean.in'} target='_blank'>Indo European</Link>, the process of obtaining a Lithuania student visa
and residence permit becomes hassle-free, helping you focus on starting your academic
journey in Lithuania.</p>
</div>
        </section>
    </div>
  )
}

export default page