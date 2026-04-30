"use client"

import React, {useState} from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
import { SlDocs } from "react-icons/sl";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { GrSend } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiVisaLine } from "react-icons/ri";
import Image from 'next/image'
import { AccordionItem } from "@/components/ui/Accordion";
import { faqData } from '@/utils/clientdata/visa-pr';

const page = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const toggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  

  const backgroundImage = {
    backgroundImage: "url('/assets/images/visa-pr/visa-pr.webp')", 
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
        <section className='py-12 bg-primary/10'>
           <div className='container mx-auto'>
             <div className='mx-5'>
                <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Complete Guide to Lithuanian Visa & TRP</h3>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>Planning to study in Europe? Securing a Lithuania student visa is an important step toward turning your dream into reality. Lithuania offers a simple and efficient visa process for international students, making it easier to begin your academic journey without complications.</p>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>The Lithuania visa is designed to support students who have gotten admission from a recognized Lithuanian university. It is very simple and quick with proper guidance and documentation.</p>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>In order to ensure high success and appropriate transparency, we at Indo European help students step-by-step through the appropriate visa process.</p>
             </div>
           </div>
        </section>
        <section className='py-12'>
          <div className='container mx-auto'>
            <div className='mx-5'>
             <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Step-by-step guide to getting a Lithuanian study visa</h3>
                 <div className='flex flex-col lg:flex-row justify-center items-center gap-12'>
                  <div className='max-w-140'>
                    <ul className='space-y-3'>
                      <li className='flex items-center gap-5'>
                        <div className='p-3 rounded-full bg-secondary/10'><SlDocs className='size-8 text-secondary'/></div>
                        <div className=''>
                        <h5 className='text-base lg:text-lg font-semibold text-primary'>1. Get admission letter</h5>
                        <p className='text-justify text-sm md:text-base font-regular'>An approved admission or offer letter from an accredited Lithuanian university is the first prerequisite for obtaining a Lithuanian student visa.</p>
                        </div>
                      </li>
                      <li className='flex items-center gap-5'>
                        <div className='p-3 rounded-full bg-secondary/10'><IoDocumentAttachOutline className='size-8 text-secondary'/></div>
                        <div className=''>
                        <h5 className='text-base lg:text-lg font-semibold text-primary'>2. Arrange visa documents</h5>
                        <p className='text-justify text-sm md:text-base font-regular'>collect all the necessary documents, including financial and academic proofs.</p>
                        </div>
                      </li>
                      <li className='flex items-center gap-5'>
                        <div className='p-3 rounded-full bg-secondary/10'><GoPeople className='size-8 text-secondary'/></div>
                        <div className=''>
                        <h5 className='text-base lg:text-lg font-semibold text-primary'>3. Make an appointment at VFS</h5>
                        <p className='text-justify text-sm md:text-base font-regular'>Indian students must apply through VFS Lithuania India, which manages biometric appointments and visa filing.</p>
                        </div>
                      </li>
                      <li className='flex items-center gap-5'>
                        <div className='p-3 rounded-full bg-secondary/10'><GrSend className='size-8 text-secondary'/></div>
                        <div className=''>
                        <h5 className='text-base lg:text-lg font-semibold text-primary'>4. Send in the application</h5>
                        <p className='text-justify text-sm md:text-base font-regular'>At the VFS center, turn in your visa application and supporting documentation.</p>
                        </div>
                      </li>
                      <li className='flex items-center gap-5'>
                        <div className='p-3 rounded-full bg-secondary/10'><BsPersonWorkspace className='size-8 text-secondary'/></div>
                        <div className=''>
                        <h5 className='text-base lg:text-lg font-semibold text-primary'>5. Show up for the visa interview</h5>
                        <p className='text-justify text-sm md:text-base font-regular'>Depending on their profile, some candidates can receive an interview invitation</p>
                        </div>
                      </li>
                      <li className='flex items-center gap-5'>
                        <div className='p-3 rounded-full bg-secondary/10'><RiVisaLine className='size-8 text-secondary'/></div>
                        <div className=''>
                        <h5 className='text-base lg:text-lg font-semibold text-primary'>6. Visa Choice</h5>
                        <p className='text-justify text-sm md:text-base font-regular'>You will be granted a student visa to Lithuania upon verification. When the necessary paperwork is prepared and filed on time, the entire Lithuanian visa application process is simple.</p>
                        </div>
                      </li>
                    </ul>
                  </div>    
                  <div className=''>
                    <Image className='rounded-lg' width={420} height={640} src={'/assets/images/visa-pr/visa-pr-vertical.webp'} alt="study in lithuania"/>
                  </div>          
                 </div>
                 </div>
          </div>
        </section>
        <section className='py-12 bg-primary/10'>
          <div className='container mx-auto'>
            <div className='mx-5'>
            <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Lithuania Temporary Residence Permit (TRP) – Complete Guide</h3>
            <p className='text-justify mt-2 text-base md:text-lg font-regular'>After reaching Lithuania, students have to apply for a Lithuanian TRP (temporary residence permit) for long-term residence.</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-5'>
               <div className='p-5 bg-white shadow-xl shadow-grey-800 rounded-lg hover:scale-105 duration-500 ease-in-out'>
                  <h5 className='text-base lg:text-lg text-primary font-semibold'>The Lithuanian TRP permits foreign students to:</h5>
                  <ul className='text-primary/85 space-y-2 mt-5'>
                    <li>●	They can stay in Lithuania for their studies.</li>
                    <li>●	Can travel within the Schengen area</li>
                    <li>●	Allowed to work part-time during their studies</li>
                  </ul>
               </div>
               <div className='p-5 bg-white shadow-xl shadow-grey-800 rounded-lg hover:scale-105 duration-500 ease-in-out'>
                  <h5 className='text-base lg:text-lg text-primary font-semibold'>Key Details of Lithuania TRP:</h5>
                  <ul className='text-primary/85 space-y-2 mt-5'>
                    <li>●	Applied once in Lithuania.</li>
                    <li>●	Issued for the duration of the co5urse of study</li>
                    <li>●	Depending on the length of the course, renewable</li>
                  </ul>
               </div>
            </div>
            <p className='text-justify mt-2 text-base md:text-lg font-regular'>For students who intend to pursue long-term study in Europe, the Lithuania TRP is a crucial document.</p>
          </div>
          </div>
        </section>
        <section className='py-12'>
          <div className='container mx-auto'>
            <div className='mx-5'>
            <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Documents required for a Lithuania study visa</h3>
            <p className='text-justify mt-2 text-base md:text-lg font-regular'>Appropriate documentation is essential for a Lithuanian student visa application to be successful. The checklist is as follows:</p>
            <div className='my-5 space-y-3 gap-5 flex flex-col-reverse lg:flex-row justify-center items-center'>
              <div>
               <div className='p-5 bg-white rounded-lg'>
                  <h5 className='text-base lg:text-lg text-primary font-semibold'>Required Documents:</h5>
                  <ul className='space-y-2 mt-5 inline-block'>
                    <li>●	A valid passport and a letter of acceptance to a university</li>
                    <li>●	Transcripts and academic credentials</li>
                    <li>●	Evidence of financial resources</li>
                    <li>●	Passport-sized photos</li>
                    <li>●	Insurance for travel</li>
                    <li>●	Application for a Visa</li>
                  </ul>
                  <h5 className='text-base lg:text-lg text-primary font-semibold mt-5'>Extra prerequisites (if any):</h5>
                  <ul className='space-y-2 mt-5'>
                    <li>●	IELTS/English proficiency verification</li>
                    <li>●	Statement of Purpose (SOP)</li>
                    <li>●	Proof of accommodations</li>
                  </ul>
               </div>
            </div>
            <div>
              <Image width={400} height={400} src={'/assets/images/visa-pr/Admission-Docs.webp'} alt="Work in Lithuania"/>
            </div>
            </div>
            <p className='text-justify mt-2 text-base md:text-lg font-regular'>If you have complete documents, then your chance is high for approval of smooth processing through VFS Lithuania India.</p>
          </div>
          </div>
        </section>
      <section className="pt-20 bg-primary/12">
        <div className="container mx-auto">
          <div className='mx-5'>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-primary">Frequently Asked Questions (FAQ)</h2>
          <div className="flex-col-reverse flex md:flex-row justify-center items-center md:gap-12 py-12">
            <div className="">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={activeIndex === index}
                onClick={() => toggle(index)}
              />
            ))}
             </div>
             <div className="">
                <Image className="" width={360} height={360} src={'/assets/images/working/work-1.png'} alt="Study in Lithuania - FAQs"/>
             </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page