"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiLocationArrow1 } from "react-icons/ci";
import { Pagination, Autoplay } from "swiper/modules";
import { AccordionItem, faqData } from "@/components/ui/Accordion";
import useFetch from "@/utils/customhooks/useFetch";
import "swiper/css";
import "swiper/css/pagination";
import { heroSlides, stats, universities, admissionData, studyBenefits, getIcon  } from "@/utils/clientdata/homepage";
import SendData from "@/utils/customhooks/SendData";


export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    city:"",
    countryID: 67,
    highestQualification:"",
    CallBackTime:"",
    CourseLevel:"",
    destination:""
  });
  const [touched, setTouched] = useState({});
  const [studentDetails, setStudentDetails] = useState(null);
  const [errors, setErrors] = useState({});

  const { data, loading, error } = SendData(
  studentDetails,
  "https://crm.indoeuropean.in/WebService/Lead.asmx/OnlineLead"
  );

  const details = {
    Fname: user?.name.split(" ")[0] || "",
    Lname: user?.name.split(" ")[1] || "",
    CountryCodeid: String(user.countryID) || "67",
    PhoneNo: String(user.phone) || "",
    WhatsappNo: String(user.phone) || "",
    Emailid: user?.email || "",
    EnquirySourceCategoryID: 2,
    EnquirySourceID: 88,
    EnqStageid: 1,
    branchid: 0,
    Country1: "",
    Levelid: 0,
    Intakeid: 0,
    Address1Citytext: user?.city || "",
    Isstatusid: "1",
    EnqDate: new Date(),
    Dob: "",
    PrefferedCallBackTime: user?.CallBackTime || 2,
    HighestQualifcation: user?.highestQualification || "",
    PrefferedBranchID: 0,
    LandingPageUrl: "Study in Germany Website",
    PhonenoOTPStatus: "0",
  };

const validate = () => {
  let newErrors = {};

  if (!user.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!user.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    newErrors.email = "Invalid email format";
  }

  if (!user.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(user.phone)) {
    newErrors.phone = "Enter valid 10-digit number";
  }

  if (!user.city.trim()) {
    newErrors.city = "City is required";
  }

  if (!user.highestQualification || user.highestQualification === "select") {
    newErrors.highestQualification = "Select qualification";
  }

  if (!user.CourseLevel || user.CourseLevel === "select") {
    newErrors.CourseLevel = "Select course level";
  }

  if (!user.destination || user.destination === "select") {
    newErrors.destination = "Select destination";
  }

  if (!user.CallBackTime || user.CallBackTime === "select") {
    newErrors.CallBackTime = "Select callback time";
  }

  return newErrors;
};

  const handleBlur = (e) => {
  const { name, value } = e.target;

  setTouched((prev) => ({
    ...prev,
    [name]: true,
  }));

  let error = "";

  if (!value || value === "select") {
    error = "This field is required";
  }

  if (name === "email" && value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      error = "Invalid email";
    }
  }

  if (name === "phone" && value) {
    if (!/^[0-9]{10}$/.test(value)) {
      error = "Invalid phone";
    }
  }

  setErrors((prev) => ({
    ...prev,
    [name]: error,
  }));
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;
      setStudentDetails(details);
  };

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const {data:highestQualification, loading:loadingQualification} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetHighestQualification", "");
  const {data:CallBackTime, loading:loadingCallback} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetPreferredCallBackTime", "");
  const {data:CourseLevel, loading:loadingLevel} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetLevel", "");
  const {data:destinations, loading:loadingDestination} = useFetch("https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx", "CountryAPI", "");
  const {data:countryID, loading:loadingCountryID} = useFetch("https://crm.indoeuropean.in/webService/lead.asmx", "GetCountryCode", "");
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
       <div className="container mx-auto">
      <Swiper
      modules={[Pagination, Autoplay]}
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
</div>      
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
               <form className="shadow-sm shadow-gray-200 border-2 border-gray-200 px-8 py-8 rounded-sm" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  {/* NAME */}
                  <div className="flex flex-col">
                    <input
                      name="name"
                      value={user.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`h-10 px-3 text-sm border rounded-sm outline-none 
                        ${errors.name ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}
                      `}
                    />
                    {errors.name && touched.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                      )}
                  </div>

                  <div className="flex flex-col">
                    <input
                      name="email"
                      value={user.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className={`h-10 px-3 text-sm border rounded-sm outline-none 
                        ${errors.email ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}
                      `}
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      <select
                        name="countryID"
                        value={user.countryID}
                        onChange={handleChange}
                        className="h-10 px-2 w-24 text-sm border border-gray-400 rounded-sm outline-none"
                      >
                        {loadingCountryID ? (
                          <option value="">No data</option>
                        ) : (
                          countryID?.map((c, i) => (
                            <option value={c.ID} key={i}>
                              {c.Code}
                            </option>
                          ))
                        )}
                      </select>

                      <input
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className={`flex-1 h-10 px-3 text-sm border rounded-sm outline-none 
                          ${errors.phone ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}
                        `}
                      />
                    </div>
                    {errors.phone && touched.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <input
                      name="city"
                      value={user.city}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="City"
                      className={`h-10 px-3 text-sm border rounded-sm outline-none 
                        ${errors.city ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}
                      `}
                    />
                    {errors.city && touched.city && (
                      <p className="text-red-500 text-sm">{errors.city}</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <select
                      name="highestQualification"
                      value={user.highestQualification}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`h-10 px-3 text-sm border rounded-sm outline-none 
                        ${errors.highestQualification ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}
                      `}
                    >
                      <option value="">Highest Qualification</option>
                      {loadingQualification ? (
                        <option value="">No data</option>
                      ) : (
                        highestQualification?.map((q, i) => (
                          <option value={q.ID} key={i}>
                            {q.QUALIFICATION}
                          </option>
                        ))
                      )}
                    </select>
                    {errors.highestQualification && touched.highestQualification && (
                      <p className="text-red-500 text-sm">{errors.highestQualification}</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <select
                      name="CourseLevel"
                      value={user.CourseLevel}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`h-10 px-3 text-sm border rounded-sm outline-none 
                        ${errors.CourseLevel ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}
                      `}
                    >
                      <option value="">Select Course</option>
                      {loadingLevel ? (
                        <option value="">No data</option>
                      ) : (
                        CourseLevel?.map((course, i) => (
                          <option value={course.QUALLEVELID} key={i}>
                            {course.QUALDESC}
                          </option>
                        ))
                      )}
                      <option value="131">Intermediate (12th)</option>
                    </select>
                    {errors.CourseLevel && touched.CourseLevel && (
                      <p className="text-red-500 text-sm">{errors.CourseLevel}</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <select
                      name="destination"
                      value={user.destination}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`h-10 px-3 text-sm border rounded-sm outline-none 
                        ${errors.destination ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}
                      `}
                    >
                      <option value="">Select Destination</option>
                      {loadingDestination ? (
                        <option value="">No data</option>
                      ) : (
                        destinations?.map((d, i) => (
                          <option value={d.COUNTRYID} key={i}>
                            {d.COUNTRYNAME}
                          </option>
                        ))
                      )}
                    </select>
                    {errors.destination && touched.destination && (
                      <p className="text-red-500 text-sm">{errors.destination}</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <select
                      name="CallBackTime"
                      value={user.CallBackTime}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`h-10 px-3 text-sm border rounded-sm outline-none 
                        ${errors.CallBackTime ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-400"}
                      `}
                    >
                      <option value="">Best Time to Call</option>
                      {loadingCallback ? (
                        <option value="">No data</option>
                      ) : (
                        CallBackTime?.map((t, i) => (
                          <option value={t.ID} key={i}>
                            {t.CALL_BACK_TIME}
                          </option>
                        ))
                      )}
                    </select>
                    {errors.CallBackTime && touched.CallBackTime && (
                      <p className="text-red-500 text-sm">{errors.CallBackTime}</p>
                    )}
                  </div>
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
