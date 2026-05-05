"use client";
import { IoIosArrowForward, IoIosDocument } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaArrowRight, FaUniversity } from 'react-icons/fa';
import Form from '@/components/layouts/form/Form';
import { GiPayMoney } from "react-icons/gi";
import { MdCardTravel } from "react-icons/md";
import { IoBedOutline, IoDocumentAttach, IoDocumentTextOutline, IoLanguage, IoDocumentAttachOutline, IoDocumentOutline, IoPersonAdd } from "react-icons/io5";
import { BiBookReader, BiSolidSelectMultiple } from "react-icons/bi";
import { SiGoogledocs, SiHtmlacademy } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa6";
import { RiParentFill, RiEnglishInput, RiDiscountPercentLine } from "react-icons/ri";
import { GrDocument } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineDocumentCurrencyPound, HiClipboardDocumentCheck } from "react-icons/hi2";
import { PiCoins } from "react-icons/pi";
import { AiFillBank } from "react-icons/ai";
import { IoIosPerson, IoIosBusiness } from "react-icons/io";
import { TiDocumentText } from "react-icons/ti";
import { CgTranscript } from "react-icons/cg";
import { BsPassport } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";

const page = () => {

    const backgroundImage = {
      backgroundImage: "url('/assets/images/services/services-banner.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#000",
    };

  return (
    <div>
      <section
        className="h-80 flex justify-center items-center"
        style={backgroundImage}
      >
        <div className="bg-black/50 h-full w-full flex justify-center items-center">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
              Services
            </h1>
            <ul className="flex justify-center items-center mt-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <IoIosArrowForward className="mx-2" />
              <li>Services</li>
            </ul>
          </div>
        </div>
      </section>
        <section className='py-15 bg-primary/10'>
          <div className='container mx-auto'>
          <div className='px-5'>
             <div className=''>
                <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary mb-8 text-center'>Complete Study in Lithuania Guidance for Indian Students</h3>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>Planning to study in Lithuania? We provide complete guidance to make your journey smooth and hassle-free. From selecting the right course and university to handling admission, visa process, and post-arrival support, our experts assist you at every step.</p>
                <p className='text-justify mt-2 text-base md:text-lg font-regular'>With a transparent process and personalized approach, we ensure you move forward with confidence and achieve your study abroad goals successfully.</p>
             </div>
          </div>
          </div>
        </section>
        <section className='py-15'>
                  <div className='container mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 px-5'>
                    <div className=''>
                      <div className='my-5'>
                       <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary'>Lithuanian University Admission for Indian Students</h3>
                       <p className='text-justify mt-8 text-md md:text-base font-regular'>Thinking about studying in Europe? Lithuania is rapidly becoming the best choice for Indian students due to its globally recognized degrees, affordable education, and quick admission process. If you are searching for Lithuanian university admission, understanding the process and requirements may help you reserve your seat without any burden.</p>
                       <p className='text-justify mt-3 text-md md:text-base font-regular'>Lithuanian universities have an easy and welcoming admissions process. Many colleges offer a variety of English-language programs, especially in disciplines like business, engineering, IT, and healthcare. To apply, students must choose their course, confirm their eligibility, and fill out an online form.</p>
                       </div>
                       <Link href={'/admission'} className='text-sm lg:text-md px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/85 duration-500 ease-in-out'>Read more &nbsp;<FaArrowRight className='size-3 inline-block'/></Link>
                       </div>
                       <div className=''>
                         <Image width={540} height={480} src={'/assets/images/services/admission-process.svg'} alt="Admission Process for Study in Lithuania"/>
                       </div>
                    </div>
                  </div>
            </section>
        <section className='py-15 bg-primary/10 rounded-bl-[180px]'>
                  <div className='container mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 px-5'>
                      <div className=''>
                         <Image width={540} height={480} src={'/assets/images/services/visa-process.png'} alt="Visa Process for Study in Lithuania"/>
                      </div>
                      <div className=''>
                      <div className='my-5'>
                       <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary'>How Indian Students Can Get Lithuania Study Visa | Full Process &amp; Requirements</h3>
                       <p className='text-justify mt-8 text-md md:text-base font-regular'>Are you interested in studying in Europe? Then you will have to understand the Lithuanian student visa process. Indian students can begin their study abroad journey with ease thanks to Lithuania&#39;s quick and straightforward visa application process.</p>
                       <h5 className='text-base sm:text-lg md:text-xl font-semibold text-primary mt-3'>Visa approval tips</h5>
                      <ul className='space-y-1 my-3'>
                        <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>Kindly prepare all the correct and complete documents.</p></li>
                        <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>Explain your purpose of study clearly.</p></li>
                        <li className='flex items-center gap-1'><FaStar className='text-secondary text-lg'/>&nbsp;	<p>Keep authentic and strong financial proof</p></li>
                      </ul>
                       </div>
                       <Link href={'/visa-and-residence-permit'} className='text-sm lg:text-md px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/85 duration-500 ease-in-out'>Read more &nbsp;<FaArrowRight className='size-3 inline-block'/></Link>
                      </div>
                    </div>
                  </div>
            </section>
        <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-primary">Grab Your Free Consultation Now !</h2>
          <div className="flex-col-reverse flex md:flex-row justify-center items-center gap-10 mt-16">
              <Form />
            <div className="">
                <div className="">
                   <Image className="mx-auto" width={360} height={360} src={'/assets/images/services/girl-jump.png'} alt="Study in Lithuania - Study Abroad Consultants"/>
                </div>
            </div>
          </div>
        </div>
      </section>
        <section className='py-15 bg-primary/10 rounded-tr-[180px]'>
                  <div className='container mx-auto'>
                    <div className='mx-5'>
                      <div className='my-5'>
                       <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary'>Indian Education Loan for Study in Lithuanias</h3>
                       <p className='text-justify mt-8 text-md md:text-base font-regular'>Want to study in Europe but are concerned about the money? Indian Education Loan for Lithuanian Studies: Make Your Dream of International Education Come True Stress-Free. “A lot of Indian students are now looking at Lithuania for its affordable tuition fees and quality education, and education loans help bridge the gap seamlessly". </p>
                       </div>
                       <div className='my-10'>
                         <h4 className='text-base sm:text-lg md:text-xl font-semibold text-primary'>What Can You use an Education Loan For?</h4>
                         <p className='text-justify mt-3 text-md md:text-base font-regular'>Normally, An Lithuania Bank Lithuanian Education Loan for study in Lithuania covers the following:</p>
                         <div className='mt-3'>
                           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5'>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <FaUniversity className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium'>University Tuition Fees</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <GiPayMoney className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium'>Lodging Expenses</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <MdCardTravel className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium'>Travel Expenses</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <IoBedOutline className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium'>Cost of living</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <BiBookReader className='size-10 mx-auto text-primary'/>
                                   <span className='font-medium'>Study Material &amp; Insurance </span>
                               </div>
                           </div>
                         </div>
                       </div>
                      <div className='my-10'>
                       <h4 className='text-base sm:text-lg md:text-xl font-semibold text-primary'>Eligibility for Education Loan</h4>
                       <p className='text-justify mt-3 text-md md:text-base font-regular'>To apply for a study loan for Lithuania, students generally need the following</p>
                         <ul className='mt-5 flex flex-col gap-4'>
                          <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><SiGoogledocs className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Admission letter from a recognized Lithuanian university</span></li>
                          <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><FaGraduationCap className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Strong academic background</span></li>
                          <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><RiParentFill className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Co-applicant (usually parents/guardians)</span></li>
                          <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><IoDocumentAttach className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Proof of income of co-applicant</span></li>
                         </ul>
                       </div>
                      <div className='my-10'>
                       <h4 className='text-base sm:text-lg md:text-xl font-semibold text-primary'>Documents Required</h4>
                           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center gap-5 my-5'>
                               <div className='relative text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <GrDocument className='size-10 mx-auto text-primary'/>
                                   <span className='font-medium text-sm'>Admission/Offer Letter</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <SiHtmlacademy className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium text-sm'>Academic Certificates</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <MdCardTravel className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium text-sm'>Passport &amp; ID Proof</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <RxAvatar className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium text-sm'>Income Proof of Co-Applicant</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <HiOutlineDocumentCurrencyPound className='size-10 mx-auto text-primary'/>
                                   <span className='font-medium text-sm'>Bank <br />Statements</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <PiCoins className='size-10 mx-auto text-primary'/>
                                   <span className='font-medium text-sm'>Loan Application Form</span>
                               </div>
                           </div>
                       </div>
                      <div className='my-10'>
                       <h4 className='text-base sm:text-lg md:text-xl font-semibold text-primary'>Banks & Loan Options in India</h4>
                       <p className='text-justify mt-3 text-md md:text-base font-regular'>Education loans for Indian students are available from:</p>
                         <ul className='mt-5 flex flex-col gap-4'>
                          <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><AiFillBank className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Nationalized banks (SBI, Bank of Baroda, etc.)</span></li>
                          <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><IoIosPerson className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Private banks</span></li>
                          <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><IoIosBusiness className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>NBFCs (Non-Banking Financial Companies)</span></li>
                         </ul>
                         <p className='text-justify mt-5 text-md md:text-base font-regular'>Some loans may require collateral, while others offer unsecured education loans for studies abroad based on eligibility.</p>
                       </div>
                       </div>
                  </div>
            </section>
            <section className='py-12'>
             <div className='container mx-auto'>
              <div className='mx-5'>
                <div className='my-5'>
                       <h3 className='text-lg sm:text-xl md:text-3xl font-semibold text-primary text-center'>How Indian Students Can Get Scholarships in Lithuania </h3>
                       <p className='text-justify mt-8 text-md md:text-base font-regular'>Searching for pocket-friendly education in Europe? The Lithuanian scholarships for Indian students are the best way to reduce the study expenditure and make international students more accessible. This is because of the low tuition fees and the increasing number of scholarship opportunities for international students that make Lithuania a destination of choice.  </p>
                </div>
                <div className='my-10'>
                    <h4 className='text-base sm:text-lg md:text-xl font-semibold text-primary'>Scholarships in Lithuania – Types </h4>
                    <p className='text-justify mt-3 text-md md:text-base font-regular'>Lithuania offers a range of scholarships for Indian students according to their academic profile and program:</p>
                    <ul className='mt-5 flex flex-col gap-4'>
                      <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><FaUniversity className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Government Scholarships (managed by Lithuanian government programs)</span></li>
                      <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><FaGraduationCap className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>University Scholarships (merit- or academic-based)</span></li>
                      <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><RiDiscountPercentLine className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Partial Tuition Fee Waivers (discount on course fees)</span></li>
                      <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><GoProjectRoadmap className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Erasmus+ Scholarships (for mobility/exchange projects)</span></li>
                    </ul>
                </div>
                <div className='my-10'>
                    <h4 className='text-base sm:text-lg md:text-xl font-semibold text-primary'>Eligibility Criteria</h4>
                    <p className='text-justify mt-3 text-md md:text-base font-regular'>Students usually need to apply for a scholarship in Lithuania:</p>
                    <ul className='mt-5 flex flex-col gap-4'>
                      <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><TiDocumentText className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Good academic records (min. 60 - 75 % or equivalent)</span></li>
                      <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><SiGoogledocs className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Admission offer from a university in Lithuania</span></li>
                      <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><IoLanguage className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Proof of English language proficiency (IELTS/TOEFL or MOI)</span></li>
                      <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><IoIosDocument className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Letters of recommendation (if applicable)</span></li>
                      <li className='flex items-center gap-3 bg-primary/10 rounded-full pe-3 shadow-sm shadow-primary/75 hover:-translate-y-2 duration-500 ease-in-out'><div className='w-10 h-10 rounded-full bg-primary flex justify-center items-center'><HiClipboardDocumentCheck className='inline-block text-white size-4'/></div>&nbsp;	<span className='text-primary font-medium'>Powerful Statement of Purpose (SOP)</span></li>
                    </ul>
                </div>
                 <div className='my-10'>
                       <h4 className='text-base sm:text-lg md:text-xl font-semibold text-primary'>Documents Required</h4>
                           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center gap-5 my-5'>
                               <div className='relative text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <CgTranscript className='size-10 mx-auto text-primary'/>
                                   <span className='font-medium text-sm'>Academic Transcripts</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <BsPassport className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium text-sm'>Passport <br /> Copy</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <IoDocumentOutline className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium text-sm'>University Admission Letter</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <IoDocumentAttachOutline className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium text-sm'>SOP (Statement of Purpose)</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <IoDocumentTextOutline className='size-10 mx-auto text-primary'/>
                                   <span className='font-medium text-sm'>CV or <br />Resume</span>
                               </div>
                               <div className='text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <RiEnglishInput className='size-10 mx-auto text-primary'/>
                                   <span className='font-medium text-sm'>English Language Proof</span>
                               </div>
                           </div>
                 </div>
                 <div className='my-10'>
                       <h4 className='text-base sm:text-lg md:text-xl font-semibold text-primary'>How to Apply for Scholarships in Lithuania</h4>
                           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-8 my-10'>
                               <div className='relative text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <span className='text-sm lg:text-md absolute -top-5 -left-5 bg-primary text-white px-2 py-1 rounded-2xl'>Step 1</span>
                                   <FaUniversity className='size-10 mx-auto text-primary'/>
                                   <span className='font-medium text-sm'>Choose Course <br />and <br />University</span>
                               </div>
                               <div className='relative text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <span className='text-sm lg:text-md absolute -top-5 -left-5 bg-primary text-white px-2 py-1 rounded-2xl'>Step 2</span>
                                   <RiDiscountPercentLine className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium text-sm'>Check Scholarship Availability on University Websites</span>
                               </div>
                               <div className='relative text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <span className='text-sm lg:text-md absolute -top-5 -left-5 bg-primary text-white px-2 py-1 rounded-2xl'>Step 3</span>
                                   <IoPersonAdd className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium text-sm'>Apply Along with Admission Application</span>
                               </div>
                               <div className='relative text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <span className='text-sm lg:text-md absolute -top-5 -left-5 bg-primary text-white px-2 py-1 rounded-2xl'>Step 4</span>
                                   <IoDocumentAttach className='size-10 mx-auto text-primary'/>
                                    <span className='font-medium text-sm'>Submit required Documents before Deadlines</span>
                               </div>
                               <div className='relative text-center flex flex-col justify-center items-center gap-5 rounded-lg bg-white px-3 py-6 shadow-lg shadow-gray-500 hover:scale-105 duration-500 ease-in-out'>
                                   <span className='text-sm lg:text-md absolute -top-5 -left-5 bg-primary text-white px-2 py-1 rounded-2xl'>Step 5</span>
                                   <BiSolidSelectMultiple className='size-10 mx-auto text-primary'/>
                                   <span className='font-medium text-sm'>Wait for<br /> Selection<br /> Results</span>
                               </div>
                           </div>
                 </div>
              </div>
             </div>
            </section>
        {/* <section className="">
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
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 text-white px-6 py-2 rounded-lg transition duration-500 ease-in-out shadow-md"
                >
                  <BiSupport className="size-5" />
                  Get Free Counseling
                </Link>

              </div>
            </div>
          </div>
        </section> */}
    </div>
  )
}

export default page