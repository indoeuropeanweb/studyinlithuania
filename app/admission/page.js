import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import Image from "next/image";
import { admissionProcessData } from '@/utils/clientdata/admission';
import { LuCalendarClock } from "react-icons/lu";
import { BsPassport } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { SiReaddotcv } from "react-icons/si";
import { PiStudent } from "react-icons/pi";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import Form from '@/components/layouts/form/Form';

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
        <section className='py-15 bg-primary/10'>
          <div className='container mx-auto'>
          <div className='px-5'>
             <div className=''>
                <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Lithuania Admission Process for Indian Students</h3>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>Want to learn in Lithuania? Understanding admission strategies is the primary and necessary step towards your education. Lithuania has gained popularity for studies and career growth. It is known for its affordability, recognized degrees, and quick admission process. </p>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>Whether you are getting admission to a bachelor&#39;s or a master&#39;s, the Lithuanian admissions process is quick, smooth, and student-friendly. With the help of the right assistance, you may finish your study in Lithuanian admissions without any hassle or delays.</p>
             </div>
          </div>
          </div>
        </section>
        <section className='py-12'>
          <div className='container mx-auto'>
           <div className=''>
              <div className=''>
                 <h5 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Lithuania&#39;s Admission Process — Step by Step</h5>
                 <p className='text-justify text-base md:text-lg font-regular'>To get admitted into a university, it is very essential to follow the appropriate Lithuanian
admission process. Keep your eyes on the below given points:</p>
                 <div className='flex justify-center items-center flex-col lg:flex-row gap-5'>
                 <div className='my-10 space-y-3 max-w-140'>
                  {admissionProcessData.map((data, index) => {
                    return  <div className='' key={index}>
                          <h5 className='text-base lg:text-lg font-semibold text-primary'>{data.title}</h5>
                          <p className='text-sm lg:text-base'>{data.description}</p>
                     </div>
                  })}
                 </div>
                 <div>
                  <Image className='rounded-md' width={540} height={1080} src={'/assets/images/admission/Admission-Process.webp'} alt="Study in Lithuania"/>
                 </div>
                 </div>
              </div>
           </div>
          </div>
        </section>
        <section className='py-12 bg-primary/10'>
          <div className='container mx-auto'>
            <h5 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Lithuania Intake 2026 - Necessary Timelines</h5>
            <p className='text-justify text-base md:text-lg font-regular'>Having knowledge about the application timeline is very important for an easy and smooth
Lithuanian admission process. Lithuania majorly gives two intakes:</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-3'>
              <div className='space-y-8'>
                <div className='shadow-lg shadow-gray-500 rounded-lg bg-white'>
                   <h5 className='px-2 py-3 rounded-bl-2xl rounded-t-lg bg-primary text-white'><LuCalendarClock className='size-6 inline-block'/> September intake (important intake)</h5>
                   <ul className='mt-3 p-3 space-y-2'>
                    <li><span className='font-semibold'>Application start:</span><br /> <span className='text-gray-600'>January-February 2026</span></li>
                    <li><span className='font-semibold'>Application Deadline:</span> <br /><span className='text-gray-600'>May-June 2026</span></li>
                    <li><span className='font-semibold'>Classes begin:</span><br /> <span className='text-gray-600'>September 2026</span></li>
                   </ul>
                </div>
                 <div className='shadow-lg shadow-gray-500 rounded-lg bg-white'>
                   <h5 className='px-2 py-3 rounded-bl-2xl rounded-t-lg bg-primary text-white'><LuCalendarClock className='size-6 inline-block' />  February intake(limited courses)</h5>
                   <ul className='mt-3 p-3 space-y-2'>
                    <li><span className='font-semibold'>Application start:</span> <br /><span className='text-gray-600'>October-November 2025</span></li>
                    <li><span className='font-semibold'>Apllication Deadline:</span> <br /> <span className='text-gray-600'>December 2025-January 2026</span></li>
                    <li><span className='font-semibold'>Classes begin:</span><br /> <span className='text-gray-600'>February 2026</span></li>
                   </ul>
                </div>
              </div>
              <div className=''>
               <Image width={400} height={540} src={'./assets/images/admission/admission-intake.svg'} alt="2026 Study in Lithuania Intake"/>
              </div>
            </div>
            <p className='text-justify text-base md:text-lg font-regular'>If you want to get the fast and smooth admission then you all are suggested to apply for the
Lithuania intake 2026 as soon as possible.</p>
          </div>
        </section>
        <section className='py-12'>
             <div className='container mx-auto'>
               <div className=''>
                <h5 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Important documents for lithuania admission</h5>
                <p className='text-justify text-base md:text-lg font-regular'>Getting your correct documents ready is a main part of the Lithuanian admission process. You may check the list of required documents:</p>
                   <div className='my-5 flex flex-col lg:flex-row justify-center items-center gap-5'>
                      <div>
                      <ul className='space-y-4'>
                        <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><BsPassport className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Valid passport</span></li>
                        <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><GrCertificate className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Academic transcripts and certificates</span></li>
                        <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><SiReaddotcv className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Updated resume/CV</span></li>
                        <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><IoDocumentTextOutline className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Statement of purpose </span></li>
                        <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><FaRegThumbsUp className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Letter of recommendation</span></li>
                        <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><PiStudent className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>English proficiency skill test (IELTS)</span></li>
                        <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><BsPersonBoundingBox className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Passport size photo</span></li>
                      </ul>
                      </div>
                      <div className=''>
                         <Image width={400} height={600} src={'/assets/images/admission/boy-with-smile.png'} alt="Admission Intake with Study in Lithuania"/>
                      </div>
                   </div>
                    <div className='py-6'>
                          <h5 className='text-md sm:text-lg md:text-2xl font-semibold text-primary mb-8'>For Visa Application -</h5>
                          <ul className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8'>
                            <li className='flex items-center gap-1 rounded-full pe-3 bg-primary/10 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full flex justify-center items-center bg-primary'><IoDocumentTextOutline className='inline-block text-white size-5'/></div>&nbsp;	<span className='text-primary font-medium'> Required offer letter from the university </span></li>
                            <li className='flex items-center gap-1 rounded-full pe-3 bg-primary/10 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full flex justify-center items-center bg-primary'><FaRegThumbsUp className='inline-block text-white size-5'/></div>&nbsp;	<span className='text-primary font-medium'> Financial proof </span></li>
                            <li className='flex items-center gap-1 rounded-full pe-3 bg-primary/10 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full flex justify-center items-center bg-primary'><PiStudent className='inline-block text-white size-5'/></div>&nbsp;	<span className='text-primary font-medium'>	Proof of tuition fee payment</span></li>
                            <li className='flex items-center gap-1 rounded-full pe-3 bg-primary/10 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full flex justify-center items-center bg-primary'><BsPersonBoundingBox className='inline-block text-white size-5'/></div>&nbsp;	<span className='text-primary font-medium'> Health insurance</span></li>
                          </ul>
                          </div>
               </div>
             </div>
        </section>
        <section className='py-12 bg-primary/10'>
          <div className='container mx-auto'>
            <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Your Global Education Begins Here</h3>
           <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'></h3>
           <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
            <Form />
           <div className=''>
                <Image className='' width={400} height={400} src={'/assets/images/admission/admission-form.png'} alt="Apply today for study abroad"/>
            </div>
           </div>
          </div>
        </section>
    </div>
  )
}

export default page