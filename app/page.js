"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiLocationArrow1 } from "react-icons/ci";
import { Pagination } from "swiper/modules";
import { AccordionItem, faqData } from "@/components/ui/Accordion";
import useFetch from "@/utils/customhooks/useFetch";
import "swiper/css";
import "swiper/css/pagination";
import { heroSlides, stats, universities, admissionData, studyBenefits, getIcon  } from "@/utils/clientdata/homepage";


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const {data:highestQualification, loading:loadingQualification} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetHighestQualification", "");
  const {data:CallBackTime, loading:loadingCallback} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetPreferredCallBackTime", "");
  const {data:CourseLevel, loading:loadingLevel} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetLevel", "");
  const {data:destinations, loading:loadingDestination} = useFetch("https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx", "CountryAPI", "");
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <section className="relative">
      <main className="relative min-h-140 xl:min-h-180 w-full bg-white dark:bg-black">
        <div id="hero"></div>
       <Image 
        src="/assets/images/homepage/woman-in-park.webp"
        fill
        style={{ objectFit: "cover" }}
        priority
        alt="Study Abroad Student - Study in Lithuania"
       />
      <Swiper
      modules={[Pagination]}
      autoplay={{delay: 5000}}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      className="absolute left-0 top-40 max-w-2xl z-10 ml-0!
        [&_.swiper-pagination]:bottom-0!
        [&_.swiper-pagination]:top-auto!
        [&_.swiper-pagination]:left-24!
        [&_.swiper-pagination]:text-left!
        [&_.swiper-pagination-bullet]:bg-white!
        [&_.swiper-pagination-bullet]:opacity-70
        [&_.swiper-pagination-bullet-active]:bg-white!
        [&_.swiper-pagination-bullet-active]:opacity-100
        container"
    >
  {heroSlides.map((slide, index) => (
  <SwiperSlide key={index}>
    <div className="h-full pb-10">
      <div className="px-6">
        <div className="text-white">
          <p className="text-lg md:text-xl font-medium mb-2 px-10 py-3 bg-[#0000004d] inline-block">
            {slide.subtitle}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6">
            {slide.title}
          </h1>

          <Link
            href={slide.link}
            className="inline-block bg-primary hover:bg-primarydark text-white px-6 py-3 rounded-md font-medium transition"
          >
            {getIcon(slide.icon)} &nbsp; {slide.buttonText}
          </Link>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}
    </Swiper>
      </main>
       <div className="relative lg:absolute z-20 lg:-bottom-30 lg:left-1/2 lg:-translate-x-1/2 bg-white px-3 py-5 w-full max-w-6xl rounded-lg shadow-lg">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {stats.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className="text-center">
            <Icon className="text-primary size-8 mx-auto mb-1" />

            <h4 className="text-lg md:text-xl font-semibold text-primary mb-1">
              {item.value}
            </h4>

          <p className="text-sm md:text-md">
            {item.text}
          </p>
        </div>
      );
    })}
  </div>
</div>
      </section>
      <section className="pt-15 lg:pt-40 pb-10 px-10 bg-primary/12">
        <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-medium text-center text-primary">Why Lithuania?</h2>
        <p className="text-lg lg:text-xl text-justify mt-8 font-regular">
          Planning to study in a European country but looking for something different? Study in Lithuania -
one of the safest countries with the fastest-growing education destination.
<br />
<br />
Lithuania, a country nestled in Northeastern Europe, is the Southernmost and largest of the three
Baltic states. It’s a popular study destination among international students who are looking for high-
quality European education, globally recognized degrees, low tuition fees, and excellent career
opportunities
<br />
<br />
While Lithuanian is the official language, many Lithuanian’s are fluent in English, especially those in
urban areas and among the younger population.
        </p>
        </div>
      </section>
      <section className="py-16 px-5">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-medium text-center text-primary">Our Partner Universities</h2>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-14">
            {universities.map((university, index) => {
                 return  <div className="shadow-sm shadow-secondary" key={index}>
                <Image className="rounded-md" width={135} height={65} src={university.src} alt={university.alt}/>
             </div>
            })}
          </div>
        </div>
      </section>
      <section className="bg-[url('/assets/images/homepage/girl-2.png')] bg-cover bg-center bg-no-repeat rounded-bl-[180px]">
        <div className="container mx-auto">
          <div className="py-20 max-w-175 px-8">
             <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl font-medium text-white">Applications are Open !</h2>
               {admissionData.map((data, index) => {
                return <div className="mt-4" key={index}>
                  <h4 className="uppercase font-medium text-secondary text-md lg:text-lg">{data.title}</h4>
                  <p className="text-white text-sm md:text-md mt-1">{data.description}</p>
               </div>
               })}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-medium text-center text-primary">Grab Your Free Consultation Now !</h2>
          <div className="flex-col-reverse flex md:flex-row justify-center align-center gap-10 mt-16">
            <div className="">
               <form className="shadow-sm shadow-gray-200 border-2 border-gray-200 px-8 py-8 rounded-sm">
                  <div className="grid grid-cols-2 gap-5">
                    <input className="h-10 px-3 text-sm md:text-md border border-gray-400 rounded-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Your Name"/>
                    <input className="h-10 px-3 text-sm md:text-md border border-gray-400 rounded-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Your Email"/>
                    <input className="h-10 px-3 text-sm md:text-md border border-gray-400 rounded-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="Phone Number"/>
                    <input className="h-10 px-3 text-sm md:text-md border border-gray-400 rounded-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-400" placeholder="City"/>
                    <select className="h-10 px-3 text-sm md:text-md border border-gray-400 rounded-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-400">
                      <option value={'select'}>Highest Qualifications</option>
                      {loadingQualification ? <option value={''}>No data found</option> : (highestQualification?.map((qualification, index) => {
                        return <option value={qualification.ID} key={index}>{qualification.QUALIFICATION}</option>
                      }))}
                    </select>
                    <select className="h-10 px-3 text-sm md:text-md border border-gray-400 rounded-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-400">
                      <option value={'select'}>Select Courses</option>
                      {loadingLevel ? <option value="">No data found</option> : CourseLevel?.map((course, index) => {
                        return <option value={course.QUALLEVELID} key={index}>{course.QUALDESC}</option>
                      })}
                      <option value="131">Intermediate (12th)</option>
                    </select>
                    <select className="h-10 px-3 text-sm md:text-md border border-gray-400 rounded-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-400">
                      <option value={'select'}>Select Destinations</option>
                      {loadingDestination ? <option value={''}>No data found</option> : destinations?.map((destination, index) => {
                        return <option value={destination.COUNTRYID} key={index}>{destination.COUNTRYNAME}</option>
                      })}
                    </select>
                    <select className="h-10 px-3 text-sm md:text-md border border-gray-400 rounded-sm outline-none focus:outline-none focus:ring-0 focus:border-gray-400">
                      <option value={'select'}>Best Time to Call</option>
                      {loadingCallback ? <option value={''}>No data found</option> : CallBackTime?.map((time, index) => {
                       return <option value={time.ID} key={index}>{time.CALL_BACK_TIME}</option>
                      })}
                    </select>
                  </div>
                  <button className="text-white bg-primary hover:bg-primarydark w-full mt-5 py-2 px-4 rounded-sm cursor-pointer" type="submit"><CiLocationArrow1 className="size-5 inline-block"/>&nbsp;Register</button>
               </form>
            </div>
            <div className="">
                <div className="">
                   <Image className="mx-auto w-auto h-auto" width={280} height={280} src={'/assets/images/homepage/girl-3.png'} alt="Study in Lithuania - Study Abroad Consultants"/>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary/12 rounded-tr-[180px] px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-medium text-end text-primary">Study in Lithuania - Key Benefits</h2>
          {studyBenefits.map((data, index) => {
            return   <div className="mt-5 text-end" key={index}>
             <h4 className="uppercase font-medium text-primary/85 text-md lg:text-lg">{data.title}</h4>
             <p className="text-sm md:text-md mt-1">{data.description}</p>
          </div>
          })}
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto">
           <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl font-medium text-center text-primary">Our Testimonials</h2>
           <div className="overflow-x-hidden whitespace-nowrap max-w-540 mt-12">
<div className="overflow-hidden">
  <div className="flex animate-marquee gap-5">

    <div className="shadow-gray-300 shadow-sm rounded-sm">
      <iframe
        className=""
        src="https://www.youtube.com/embed/9NZ-Sg6wRg8?si=ZzOpY54QetJ7G53X"
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <div className="shadow-gray-300 shadow-sm rounded-sm">
      <iframe
        className=""
        src="https://www.youtube.com/embed/wkj20Pwwykk?si=e2ZkffNi01E1mXLF"
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <div className="shadow-gray-300 shadow-sm rounded-sm">
      <iframe
        className=""
        src="https://www.youtube.com/embed/jQdo059h1cE?si=wudCnEVTEvyrLOyD"
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    <div className="shadow-gray-300 shadow-sm rounded-sm">
      <iframe
        className=""
        src="https://www.youtube.com/embed/9NZ-Sg6wRg8?si=ZzOpY54QetJ7G53X"
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <div className="shadow-gray-300 shadow-sm rounded-sm">
      <iframe
        className=""
        src="https://www.youtube.com/embed/wkj20Pwwykk?si=e2ZkffNi01E1mXLF"
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <div className="shadow-gray-300 shadow-sm rounded-sm">
      <iframe
        className=""
        src="https://www.youtube.com/embed/jQdo059h1cE?si=wudCnEVTEvyrLOyD"
        title="YouTube video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>
           </div>
        </div>
      </section>
      <section className="pt-20 bg-primary/12">
        <div className="container mx-auto">
          <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl font-medium text-center text-primary">Frequently Asked Questions (FAQ)</h2>
          <div className="flex-col-reverse flex md:flex-row justify-center items-center md:gap-12">
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
                <Image className="" width={420} height={720} src={'/assets/images/homepage/girl-4.png'} alt="Study in Lithuania - FAQs"/>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
