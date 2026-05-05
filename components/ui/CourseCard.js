import React from 'react'
import Image from "next/image";
import { SlBookOpen } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import {usePopup} from "@/context/PopupProvider";

const CourseCard = ({UnivName, LevelName, Program, StudyArea, Duration, Language, LanguageProficiency, Description}) => {
  
  const {openPopup} = usePopup()
  
  return (
  <div className="h-full flex flex-col justify-between px-5 py-5 rounded-md shadow-sm shadow-gray-500">
  
  <div className="flex justify-between items-center border-b-2 border-gray-300 pb-3">
    <div className="flex items-center gap-2">
      <Image
        className="rounded-full"
        height={40}
        width={40}
        src={"/assets/images/courses/lithuania-flag.png"}
        alt="Study in Lithuania Flag"
      />
      <div>
        <h3 className="text-base lg:text-lg font-medium">
          {Program.slice(0, 25)}...
        </h3>
        <h5 className="text-xs lg:text-sm font-medium text-gray-500">
          {UnivName}
        </h5>
      </div>
    </div>
    {LevelName === "Bachelor" ? <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
      Bachelor
    </span>: <span className="px-4 py-2 rounded-full bg-tertiary/10 text-tertiary font-medium">
      Master
    </span>}
  </div>

  <div className="my-5">
    <ul className="space-y-3">
      
      <li className="flex items-start gap-2">
        <div className="w-6 h-6 flex items-start justify-center text-primary shrink-0">
          <SlBookOpen className="w-5 h-5" />
        </div>
        <p className="text-sm lg:text-md font-medium">
          Study Area:
          <span className="text-xs lg:text-sm font-normal text-gray-700 ml-1">
          {StudyArea}
        </span>
        </p>
      </li>

      <li className="flex items-start gap-2">
        <div className="w-6 h-6 flex items-start justify-center text-primary shrink-0">
          <FaRegClock className="w-5 h-5" />
        </div>
        <p className="text-sm lg:text-md font-medium">
          Duration:
          <span className="text-xs lg:text-sm font-normal text-gray-700 ml-1">
            {Duration}
          </span>
        </p>
      </li>

      <li className="flex items-start gap-2">
        <div className="w-6 h-6 flex items-start justify-center text-primary shrink-0">
          <IoLanguage className="w-5 h-5" />
        </div>
        <p className="text-sm lg:text-md font-medium">
          Language of Teaching:
          <span className="text-xs lg:text-sm font-normal text-gray-700 ml-1">
            {Language}
          </span>
        </p>
      </li>

      <li className="flex items-start gap-2">
        <div className="w-6 h-6 flex items-start justify-center text-primary shrink-0">
          <PiStudent className="w-5 h-5" />
        </div>
        <p className="text-sm lg:text-md font-medium">
          English Proficiency Requirement:
          <span className="text-xs lg:text-sm font-normal text-gray-700 ml-1">
            {LanguageProficiency.slice(0, 120)}...
          </span>
        </p>
      </li>

    </ul>
  </div>

  <div>
    <p className="text-xs lg:text-sm text-gray-600">
      {Description.slice(0, 200)}...
    </p>
  </div>

  <div className="flex justify-end mt-4">
    <button onClick={() => openPopup(true)} className="text-sm lg:text-md px-3 py-2 bg-primary text-white rounded-md cursor-pointer hover:bg-primary/85 duration-500 ease-in-out">
      <CiLocationArrow1 className="size-5 inline-block"/>&nbsp; Apply Now
    </button>
  </div>
</div>
  )
}

export default CourseCard