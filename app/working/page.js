"use client"
import { IoIosArrowForward } from 'react-icons/io'
import Link from 'next/link'
import Image from 'next/image'
import { GrCafeteria, GrDeliver } from "react-icons/gr";
import { FaHeadset, FaShop, FaUserNurse } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { TbClockHour2, TbTruckDelivery } from "react-icons/tb";
import { FaRegCalendarAlt, FaLaptopCode } from 'react-icons/fa';
import { MdOutlineEngineering } from "react-icons/md";

const page = () => {

const backgroundImage = {
    backgroundImage: "url('/assets/images/working/working-back.webp')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000"
}

const backgroundCTA = {
   backgroundImage: "url('/assets/images/working/working-explore.webp')",
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
        <div className='px-10 bg-black/50 h-full w-full flex justify-center items-center flex-col'>
             <h1 className='uppercase text-xl md:text-2xl lg:text-4xl text-white font-bold mt-5 text-center'>Working</h1>
             <ul className='flex justify-center items-center mt-3 text-white'>
              <li><Link className='hover:underline' href="/">Home</Link></li>&nbsp;
              <IoIosArrowForward className='size-5'/>
              &nbsp;
              <li>Working</li>
             </ul>
         </div>
        </section>
        <section className='py-15 bg-primary/10'>
          <div className='container mx-auto'>
          <div className='px-5'>
             <div className=''>
                <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Post Study Work in Lithuania | Jobs & Stay Back Options</h3>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>Planning to study in Europe and confused about job opportunities after studies? Then choose to work in Lithuania, where you can gain international experience. Lithuania offers a student-friendly work environment and allows international students to pursue their studies while working part-time. </p>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>For Indian students hoping to pursue a global career, working in Lithuania has become a desirable option due to the country's expanding economy, robust IT sector, and rising need for qualified experts.</p>
             </div>
          </div>
          </div>
        </section>
        <section className='py-15'>
          <div className='container mx-auto'>
            <div className='px-5'>
            <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Work regulations for international students in Lithuania</h3>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-10'>
            <div className=''>
             <p className='text-justify mt-2 text-base md:text-lg font-regular'>Before joining any company to work, it is important to fully understand the laws and regulations regarding work in Lithuania:</p>
             <ul className='my-3'>
              <li><span className='font-semibold text-base lg:text-lg text-primary'>During Studies</span><p className='text-sm lg:text-base'>International students may work up to 20 hours per week during their classes or studies.</p></li>
              <li><span className='font-semibold text-base lg:text-lg text-primary'>During Holidays</span><p className='text-sm lg:text-base'>Students can do the full-time job during their semester breaks and holidays.</p></li>
              <li><span className='font-semibold text-base lg:text-lg text-primary'>Full-Time Studies</span><p className='text-sm lg:text-base'>Students enrolling in full-time studies are not required to get a separate work permit.</p></li>
             </ul>
             <p className='text-justify mt-2 text-base md:text-lg font-regular'>The above given rules are very friendly and beneficial for students who maintain jobs in Lithuania along with their studies.</p>
  
          </div>
          <div>
            <Image className='rounded-md' width={540} height={480} src={'/assets/images/working/working-lithuania-2.jpg'} alt="Top Lithuania Consultants in Delhi"/>
          </div>
             </div>
          </div>
                  </div>
        </section>
        <section className='bg-primary/10 py-12 rounded-bl-[180px]'>
           <div className='container mx-auto'>
            <div className='px-5'>
              <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Part-time work opportunities in Lithuania for students</h3>
              <p className='text-justify mt-2 text-base md:text-lg font-regular'>Searching for part-time jobs in Lithuania is comparatively smooth in main cities. Students may find several job roles as per their comfortability and skills.</p>
             <div className='my-5'>
                <h5 className='font-semibold text-base lg:text-lg text-primary'>Famous part-time job options:</h5>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center mt-10'>
                     <div className='flex flex-col justify-center items-center p-5 shadow-md shadow-amber-600 rounded-md hover:scale-105 duration-300 ease-in-out cursor-pointer bg-white'>
                        <FaShop className='size-10 text-secondary'/>
                         <span className='mt-2 text-center text-xs lg:text-sm font-medium text-gray-500'>Supermarket <br />and retail jobs</span>
                     </div>
                     <div className='flex flex-col justify-center items-center p-5 shadow-md shadow-amber-600 rounded-md hover:scale-105 duration-300 ease-in-out cursor-pointer bg-white'>
                        <GrCafeteria className='size-10 text-secondary'/>
                         <span className='mt-2 text-center text-xs lg:text-sm font-medium text-gray-500'>Restaurant, cafes,<br /> and hospitality roles</span>
                     </div>
                     <div className='flex flex-col justify-center items-center p-5 shadow-md shadow-amber-600 rounded-md hover:scale-105 duration-300 ease-in-out cursor-pointer bg-white'>
                        <FaHeadset className='size-10 text-secondary'/>
                         <span className='mt-2 text-center text-xs lg:text-sm font-medium text-gray-500'>Customer support<br /> and call centers</span>
                     </div>
                     <div className='flex flex-col justify-center items-center p-5 shadow-md shadow-amber-600 rounded-md hover:scale-105 duration-300 ease-in-out cursor-pointer bg-white'>
                        <GrDeliver className='size-10 text-secondary'/>
                        <span className='mt-2 text-center text-xs lg:text-sm font-medium text-gray-500'>Logistics<br /> and delivery jobs</span>
                     </div>
                     <div className='flex flex-col justify-center items-center p-5 shadow-md shadow-amber-600 rounded-md hover:scale-105 duration-300 ease-in-out cursor-pointer bg-white'>
                        <IoHomeOutline className='size-10 text-secondary'/>
                        <span className='mt-2 text-center text-xs lg:text-sm font-medium text-gray-500'>Remote work and <br />freelancing for interested learners </span>
                     </div>
                </div>
                <p className='mt-5 text-justify text-base md:text-lg font-regular'>Several students who work in Lithuania also get job opportunities within their university, such as positions as research or administrative assistants. </p>
             </div>
             </div>
           </div>
        </section>
        <section className='py-12'>
           <div className='container mx-auto'>
            <div className='px-5'>
            <div className='flex justify-center items-center gap-10 flex-col-reverse lg:flex-row'>
            <div className='max-w-125'>
            <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-5'>Salary Information for Students Working in Lithuania</h3>
            <p className='text-justify mt-2 text-base md:text-lg font-regular'>When preparing jobs in Lithuania, it is important to understand the earning possibilities.</p>
            <ul className='space-y-3 my-5'>
               <li className='flex items-center text-sm lg:text-base font-medium'><div className='p-2 bg-primary rounded-full inline-block'><TbClockHour2 className='size-4 text-white'/></div>&nbsp;	Average hourly wage for part-time work: €4 to €8</li>
               <li className='flex items-center text-sm lg:text-base font-medium'><div className='p-2 bg-primary rounded-full inline-block'><FaRegCalendarAlt className='size-4 text-white'/></div>&nbsp;	Part-time income: around €300 to €800 each month</li>
            </ul>
            <p className='text-justify mt-2 text-base md:text-lg font-regular'>The type of work you do, where you work, and your level of experience all affect your pay. Even if they might not be able to pay for everything, part-time work really aids in controlling living expenses.</p>
            <p className='text-justify mt-2 text-base md:text-lg font-regular'>Students in Lithuania who have part-time employment also acquire useful work experience abroad, which enhances their professional profile.</p>
            </div>
            <div className=''>
              <Image className='' width={480} height={640} src="/assets/images/working/payscale-lithuania.svg" alt="Study and Work in Lithuania"/>
            </div>
           </div>
           </div>
           </div>
        </section>
        <section className='py-12 bg-primary/10 rounded-tr-[180px]'>
          <div className='container mx-auto'>
            <div className='px-5'>
            <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-5 text-center'>Lithuania Job Opportunities After Graduation</h3>
            <p className='text-justify mt-2 text-base md:text-lg font-regular'>The availability of professional prospects following graduation is one of the main benefits of choosing jobs in Lithuania.</p>
            <h5 className='text-base sm:text-lg md:text-xl font-medium text-primary mt-5'>Top Industries with Strong Demand:</h5>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10'>
               <div className='relative flex justify-center items-center flex-col p-8 shadow-lg shadow-gray-400 rounded-lg cursor-pointer bg-white'>
                 <div className='absolute left-0 top-0 p-2 bg-secondary rounded-lg'><FaLaptopCode className='size-10 text-white' /></div>
                 <h5 className='font-semibold text-lg lg:text-xl'>IT</h5>
                 <span className='text-center'>IT, or information technology</span>
               </div>
               <div className='relative flex justify-center items-center flex-col gap-1 p-8 shadow-lg shadow-gray-400 rounded-lg cursor-pointer bg-white'>
                 <div className='absolute left-0 top-0 p-2 bg-secondary rounded-lg'><MdOutlineEngineering className='size-10 text-white' /></div>
                 <h5 className='font-semibold text-lg lg:text-xl'>Engineer</h5>
                <span className='text-center'>Manufacturing and Engineering</span>
               </div>
               <div className='relative flex justify-center items-center flex-col gap-1 p-8 shadow-lg shadow-gray-400 rounded-lg cursor-pointer bg-white'>
                 <div className='absolute left-0 top-0 p-2 bg-secondary rounded-lg'><FaUserNurse className='size-10 text-white' /></div>
                 <h5 className='font-semibold text-lg lg:text-xl'>Hospital</h5>
                 <span className='text-center'>Healthcare and Life Sciences </span>
               </div>
               <div className='relative flex justify-center items-center flex-col gap-1 p-8 shadow-lg shadow-gray-400 rounded-lg cursor-pointer bg-white'>
                <div className='absolute left-0 top-0 p-2 bg-secondary rounded-lg'><TbTruckDelivery className='size-10 text-white' /></div>
                <h5 className='font-semibold text-lg lg:text-xl'>Delivery</h5>
                <span className='text-center'>Logistics and Supply Chain</span>
               </div>
            </div>
            <p className='text-justify mt-10 text-base md:text-lg font-regular'>International graduates have excellent career chances in Lithuania due to the increased demand in these fields.</p>
          </div>
          </div>
        </section>
         <section className='py-12'>
           <div className='container mx-auto'>
            <div className='flex justify-center items-center gap-10 flex-col-reverse lg:flex-row px-5'>
            <div className='max-w-125'>
            <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-5'>Post Study Work Lithuania – Stay Back Options</h3>
            <p className='text-justify mt-2 text-base md:text-lg font-regular'>After finishing their study, students can apply for post-study work Lithuania options to continue their careers in the country.</p>
            <h5 className='text-base sm:text-lg md:text-xl font-medium mt-5 text-primary'>Stay-Back Permit Details:</h5>
            <ul className='space-y-3 my-5'>
               <li className='flex items-center text-sm lg:text-base font-medium'>1. After graduation, students can apply for a temporary residency permit.</li>
               <li className='flex items-center text-sm lg:text-base font-medium'>2. This enables them to remain in Lithuania and look for employment.</li>
               <li className='flex items-center text-sm lg:text-base font-medium'>3. They can turn it into a work permit once they start working.</li>
            </ul>
            <p className='text-justify mt-2 text-base md:text-lg font-regular'>The Post Study Work Lithuania option facilitates student's transition from school to full-time work in Europe.</p>
            </div>
            <div className=''>
              <Image className='' width={480} height={640} src="/assets/images/working/stay-back.svg" alt="Study and Work in Lithuania"/>
            </div>
           </div>
           </div>
        </section>
        <section className='bg-primary/10' style={backgroundCTA}>
         <div className='container mx-auto'>
            <div className='py-12 max-w-160 px-5'>
            <h5 className='text-lg sm:text-xl md:text-2xl font-medium mt-5 text-tertiary'>Ready to Work in Lithuania After Your Studies?</h5>
            <p className='text-justify mt-2 text-base md:text-lg font-regular text-gray-700'>Explore job opportunities, understand stay-back options, and start your career in Europe with expert guidance from <Link className='decoration-0 hover:underline text-tertiary font-medium' href={'https://indoeuropean.in'} target='_blank'>Indo-European Study Abroad Consultants</Link>.</p>
            <div className='mt-10 space-x-3'>
              {/* <Link className='font-semibold hover:underline text-sm md:text-base text-primary' href={'/contact'}>Check Eligibility</Link> */}
              <Link className='font-medium text-sm md:text-base text-primary bg-white hover:text-white hover:bg-primary border-2 border-primary px-5 py-2 rounded-md duration-500 ease-in-out' href={'/contact'}>Get Free Counseling</Link>
              <Link className='font-medium text-sm md:text-base text-white bg-primary hover:bg-primary/75 border-2 border-primary px-5 py-2 rounded-md duration-500 ease-in-out' href={'/contact'}>Apply Now</Link>
            </div>
            </div>
         </div>
        </section>
    </div>
  )
}

export default page