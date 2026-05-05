import Link from 'next/link';
import Image from 'next/image';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-primary py-3'>
       <div className='container mx-auto'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6 px-4 space-x-10'>
           <div className=''>
            <div className=''>
             <Image className='' src='/assets/images/logos/light-logo.png' alt="study in lithuania" width={160} height={70}/>
            </div>
            <p className='mt-3 text-white'>Lithuania, a country with a rich cultural heritage and stunning natural landscapes, offers a lower cost of living compared to many Western European nations.</p>
           </div>
           <div className='mt-14 lg:mx-auto'>
             <h4 className='text-secondary text-base lg:text-lg font-semibold uppercase'>Helpful Links</h4>
             <ul className='mt-3 flex flex-col gap-1'>
              <li><Link className='text-white hover:text-white/85 hover:underline' href={"/"}>Home</Link></li>
              <li><Link className='text-white hover:text-white/85 hover:underline' href={"/Study"}>Study</Link></li>
              <li><Link className='text-white hover:text-white/85 hover:underline' href={"/about"}>About Us</Link></li>
              <li><Link className='text-white hover:text-white/85 hover:underline' href={"/services"}>Services</Link></li>
              <li><Link className='text-white hover:text-white/85 hover:underline' href={"/contact"}>Contact Us</Link></li>
             </ul>
           </div>
               <div className='mt-14 lg:mx-auto'>
             <h4 className='text-secondary text-base lg:text-lg font-semibold uppercase'>Resources</h4>
             <ul className='mt-3 flex flex-col gap-1'>
              <li><Link className='text-white hover:text-white/85 hover:underline' href={"/courses"}>Courses</Link></li>
              <li><Link className='text-white hover:text-white/85 hover:underline' href={"/admission"}>Admission</Link></li>
              <li><Link className='text-white hover:text-white/85 hover:underline' href={"/working"}>Working</Link></li>
              <li><Link className='text-white hover:text-white/85 hover:underline' href={"/visaandresidence"}>Visa &amp; Residence</Link></li>
              <li><Link href={"/permit"} className='text-white hover:text-white/85 hover:underline'>Permit</Link></li>
             </ul>
           </div>
            <div className='mt-14 lg:mx-auto'>
             <h4 className='text-secondary text-base lg:text-lg font-semibold uppercase'>Contact Us</h4>
             <ul className='mt-3 flex flex-col gap-1'>
              <li><IoLocationOutline className='size-6 inline-block text-white'/>&nbsp;<Link className='text-white' href={"/"}>Study in Lithuania Center</Link></li>
              <li className='mt-1'><FiPhone className='size-5 inline-block text-white'/>&nbsp;<Link className='text-white hover:text-white/85 hover:underline' href={"tel:+919650133355"}>+91 96501 33355</Link></li>
             </ul>
           </div>
         </div>
        <div className='pt-4 border-white/75 border-t-2 relative'>
           <p className='text-center text-white mb-2'>Copyright © <Link href="https://www.studyinlithuania.in" className='hover:text-gray-100'>Study in Lithuania</Link> {currentYear}</p>
           <ul className='md:absolute right-2 bottom-0 flex gap-2 justify-end mt-2'>
            <li className='bg-tertiary hover:bg-tertiary/85 w-8 h-8 rounded-full flex justify-center items-center'><Link href={"https://youtube.com"}><FiYoutube className='size-5 text-white'/></Link></li>
            <li className='bg-tertiary hover:bg-tertiary/85 w-8 h-8 rounded-full flex justify-center items-center'><Link href={"https://instagram.com"}><FaInstagram className='size-5 text-white'/></Link></li>
            <li className='bg-tertiary hover:bg-tertiary/85 w-8 h-8 rounded-full flex justify-center items-center'><Link href={"https://facebook.com"}><FaFacebook className='size-5 text-white'/></Link></li>
           </ul>
         </div>
       </div>
    </footer>
  )
}

export default Footer