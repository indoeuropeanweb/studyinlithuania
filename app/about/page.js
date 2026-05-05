"use client";
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import { FaStar, FaVideo } from "react-icons/fa";
import { CiLocationArrow1 } from 'react-icons/ci';
import { usePopup } from "@/context/PopupProvider";

const page = () => {
  const backgroundImage = {
  backgroundImage: "url('/assets/images/aboutus/Aboutus-back.webp')", 
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#000"
  }

  const backgroundSecond = {
    backgroundImage: "url('/assets/images/aboutus/who-we-are.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000"
  }

  const { openPopup } = usePopup();

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
        <section className='py-15 bg-primary/10'>
          <div className='container mx-auto'>
          <div className='px-5'>
             <div className=''>
                <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Top Lithuania Consultants in Delhi</h3>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>When it is about choosing the right assistance for studying abroad, trust and experience matter a lot. As leading Lithuanian consultants in Delhi, Indo European has been assisting learners achieve their international education ambitions with transparency and confidence.</p>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>TWith a strong presence in the study abroad sector, we have assisted several students in achieving their objectives in Europe. Our method is straightforward: we comprehend each student's objectives and provide truthful, precise, and tailored advice.</p>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>We at Indo European are your long-term partners in creating a global future, not just consultants.</p>
             </div>
          </div>
          </div>
        </section>
        <section className='bg-cover bg-center bg-no-repeat md:rounded-bl-[180px]' style={backgroundSecond}>
          <div className=''>
          <div className='container mx-auto'>
             <div className='max-w-125 py-10 px-5 mx-auto lg:mx-0'>
                <h3 className='text-xl sm:text-3xl md:text-4xl font-medium text-white uppercase'>Who we are ?</h3>
                <p className='text-justify mt-5 text-base md:text-lg font-regular text-white'>Indo-European is one of the most trusted study abroad consultants in India, specializing in European destinations such as Latvia, Lithuania, and other popular study hubs.</p>
                <p className='text-justify mt-2 text-base md:text-lg font-regular text-white'>With years of experience and in-depth industry knowledge, we have built a strong reputation for providing reliable and result-oriented services. Our team consists of experienced counselors and visa experts who understand every step of the admission and visa process.</p>
             </div>
          </div>
          </div>
        </section>
        <section className='py-15'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 px-5'>
            <div className=''>
               <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary'>Our experience that sets us apart from others</h3>
               <p className='text-justify mt-8 text-base md:text-lg font-regular'>When selecting Lithuanian consultants in Delhi, experience is essential, and Indo European offers years of demonstrated experience in effectively mentoring students.</p>
               <div className='text-justify mt-3 text-base md:text-base font-regular'>
                <ul className='space-y-1 my-5'>
                  <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>20+ Years of Study Abroad Counseling Experience</p></li>
                  <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>Robust network of universities throughout Europe</p></li>
                  <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>Thorough understanding of the application and visa processes</p></li>
                  <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>Proficiency with intricate student profiles</p></li>
                </ul>
                </div>
                <p className='text-justify mt-3 text-base md:text-lg font-regular'>Our expertise enables us to streamline every step of the process, from selecting the ideal course to obtaining a visa, making your trip easy and stress-free.</p>
               </div>
               <div className=''>
                 <Image width={540} height={480} src={'/assets/images/aboutus/aboutus-4.svg'} alt="Top Lithuania Consultants in Delhi"/>
               </div>
            </div>
          </div>
        </section>
        <section className='bg-primary/10 rounded-tr-[180px]'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 px-5'>
            <div className=''>
                 <Image width={540} height={700} src={'/assets/images/aboutus/proven-record.webp'} alt="Top Lithuania Consultants in Delhi"/>
               </div>
            <div className='my-12 px-5'>
               <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary'>Proven track record of success</h3>
               <p className='text-justify mt-6 text-base md:text-lg font-regular'>In Indo-Europe, our students' achievements serve as a gauge of our own success. As trusted Lithuania consultants in Delhi.</p>
               <p className='text-justify text-base md:text-lg font-regular'>In Indo-European, our success is measured by the success of our students. As trusted Lithuania consultants in Delhi, we are proud of our solid performance history.</p>
               <div className='text-justify mt-3 text-base md:text-base font-regular'>
                <ul className='space-y-1 my-5'>
                  <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>High rate of visa approval</p></li>
                  <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>Thousands of student placements that are successful</p></li>
                  <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>Results that are consistent over several intakes</p></li>
                  <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>High levels of student satisfaction</p></li>
                </ul>
                </div>
                <p className='text-justify mt-3 text-base md:text-lg font-regular'>Our methodical approach and professional advice guarantee that students get accepted and begin their international journey with success.</p>
                <div className='mt-8'>
                <button onClick={() => openPopup(true)} className='text-white px-5 py-3 rounded-md bg-primary hover:bg-primary/75 duration-500 ease-in-out cursor-pointer'><CiLocationArrow1 className='size-5 text-white inline-block'/>&nbsp; Apply Now</button>
                </div>
               </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container mx-auto">
            <div className="py-14 px-6 flex flex-col items-center text-center">
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                Need Guidance for Study Abroad?
              </h3>
              
              <p className="mb-6 text-base lg:text-lg max-w-2xl">
                Our experts are here to help you choose the right university, course, and country. 
                Get personalized guidance tailored to your goals.
              </p>
              
              <div className="flex gap-4 flex-wrap justify-center">
                <Link 
                  href="https://zoom.us/j/91022278457#success"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 text-white px-6 py-2 rounded-lg transition duration-500 ease-in-out shadow-md"
                >
                <FaVideo className="size-5" />
                  Connect with Us
                </Link>

              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default page