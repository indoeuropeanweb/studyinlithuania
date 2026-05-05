"use client";
import Form from '@/components/layouts/form/Form';
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaVideo } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io'
import { FaLocationDot } from "react-icons/fa6";

const page = () => {

  const backgroundImage = {
    backgroundImage: "url('/assets/images/contact/contact-us-back.webp')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000"
  }

  return (
    <div>
        <section className='h-80 flex justify-center items-center' style={backgroundImage}>
        <div id="hero"></div>
        <div className='px-10 bg-black/50 h-full w-full flex justify-center items-center flex-col'>
             <h1 className='uppercase text-xl md:text-2xl lg:text-4xl text-white font-bold mt-5 text-center'>Contact Us</h1>
             <ul className='flex justify-center items-center mt-3 text-white'>
              <li><Link className='hover:underline' href="/">Home</Link></li>&nbsp;
              <IoIosArrowForward className='size-5'/>
              &nbsp;
              <li>Contact Us</li>
             </ul>
         </div>
        </section>
          <section className='my-12'>
          <div className='container mx-auto'>
          <div className='rounded-lg bg-white 
                shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] 
                hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_10px_15px_-3px_rgba(0,0,0,0.1)] 
                transition-shadow duration-300 ease-in-out'>
          <h3 className='text-2xl md:text-3xl font-semibold text-primary text-center pt-5'>
            Get in Touch
          </h3>
          <div className='flex flex-col lg:flex-row justify-center items-center'>
                <div className='max-w-80 px-5'>
              <h3 className='text-primary text-lg md:text-xl mt-2 font-semibold'>Contact Info</h3>
              <p className='text-md lg:text-base mt-1'>Reach out to get expert advice on studying abroad in Lithuania.</p>
              <div className='pb-2 border-y-2 border-primary/10 my-2'>
                {/*  */}
                <ul className='flex flex-row lg:flex-col gap-2 my-3'>
                  <li className='flex flex-col lg:flex-row items-center gap-1'><div className='inline-block bg-secondary/10 p-2 rounded-full'><FaLocationDot className='size-4 text-secondary'/></div><div><h4 className='text-primary text-base md:text-md mt-2 font-semibold hidden lg:block'>Location </h4>
                <p className='text-xs lg:text-sm mt-1 font-medium text-gray-500'>
                  New Delhi
                </p></div></li>
                  <li className='flex flex-col lg:flex-row items-center gap-1'><div className='inline-block bg-secondary/10 p-2 rounded-full'><FaPhoneAlt className='size-4 text-secondary'/></div><div><h4 className='text-primary text-base md:text-md mt-2 font-semibold hidden lg:block'>Phone No</h4>
                <Link href={'tel:9650133355'} className='text-xs lg:text-sm mt-1 font-medium text-gray-500 hover:underline'>
                  +91 96501 33355
                </Link></div></li>
                  <li className='flex flex-col lg:flex-row items-center gap-1'><div className='inline-block bg-secondary/10 p-2 rounded-full'><FaVideo className='size-4 text-secondary'/></div><div><h4 className='text-primary text-base md:text-md mt-2 font-semibold hidden lg:block'>Zoom ID</h4>
                <Link href={'https://zoom.us/j/91022278457#success'} target='_blank' className='text-xs lg:text-sm mt-1 font-medium text-gray-500 hover:underline'>
                  910-2227-8457
                </Link></div></li>
                </ul>
              </div> 
              <div className='pb-2'>
                <h4 className='text-primary text-base md:text-md mt-2 font-semibold'>Follow us on Socials</h4>
                <ul className='flex gap-2 mt-2'>
                  <li className='bg-tertiary hover:bg-tertiary/85 w-8 h-8 rounded-full flex justify-center items-center'>
                    <Link href={"tel:+370-62163395"}><FaPhoneAlt className='size-5 text-white'/></Link>
                  </li>
                  <li className='bg-tertiary hover:bg-tertiary/85 w-8 h-8 rounded-full flex justify-center items-center'>
                    <Link href={"https://www.youtube.com/IEESIndoEuropean"} target='_blank'><FiYoutube className='size-5 text-white'/></Link>
                  </li>
                  <li className='bg-tertiary hover:bg-tertiary/85 w-8 h-8 rounded-full flex justify-center items-center'>
                    <Link href={"https://www.instagram.com/indo_european"} target='_blank'><FaInstagram className='size-5 text-white'/></Link>
                  </li>
                  <li className='bg-tertiary hover:bg-tertiary/85 w-8 h-8 rounded-full flex justify-center items-center'>
                    <Link href={"https://www.facebook.com/Indoeuropean.in"} target='_blank'><FaFacebook className='size-5 text-white'/></Link>
                  </li>
                </ul>
              </div> 
            </div>
            <div className='py-10 px-5'>
              <Form />
            </div>
          </div>
        </div>
            <div className='px-3 py-5'>
               <h3 className='text-primary text-base md:text-md font-semibold mt-5 mb-2'>Delhi - Head Office</h3>
                <p className='text-sm lg:text-base mt-1 font-medium text-gray-400 mb-5'>First Floor, Double Storey, 18/1 -A, II, near Metro Station Tilak Nagar, above Sona Bakers, Prem Nagar, Tihar Village, New Delhi, Delhi 110058</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2254.5057667351243!2d77.09645381811539!3d28.63541623616966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bee270eea1%3A0xa4b0610ae05bae2d!2sIndo%20European%20%7C%20Study%20Abroad%20Consultants%20-%20Head%20Office!5e1!3m2!1sen!2sin!4v1776835081619!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0, margin: "0 auto" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
               
            </div>
          </div>
        </section>
    </div>
  )
}

export default page