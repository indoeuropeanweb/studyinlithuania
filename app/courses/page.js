"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import SearchIcon from "@mui/icons-material/Search";
import useFetch from "@/utils/customhooks/useFetch";
import axios from "axios";
import CourseCard from "@/components/ui/CourseCard";
import { FaSearch, FaVideo } from "react-icons/fa";
import Pagination from '@mui/material/Pagination';
import { CiLocationArrow1 } from "react-icons/ci";

const Page = () => {
  const [filterEl, setFilterEl] = useState({
    searchText: "",
    university: "",
    level: "",
  });

  const [filters, setFilters] = useState({
    searchText: "",
    university: "",
    level: "",
  });
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const coursesPerPage = 6;


  const backgroundImage = {
    backgroundImage: "url('/assets/images/courses/courses-banner.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000",
  };

  const backgroundCTA = {
   backgroundImage: "url('/assets/images/courses/courses-faq.webp')",
   backgroundSize: "cover",
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundColor: "#000"
}

  useEffect(() => {
    if (!filters) return;

    const fetchCourses = async () => {
      try {
        setLoading(true);

        const url = `https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx/ProgramsAPI?countryid=111&univid=${filters.university || ""}&levelid=${filters.level || ""}&intakeid=&searchtext=${filters.searchText || ""}`;

        const response = await axios.get(url);

        console.log("API Response:", response?.data);

        setCourseData(response?.data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [filters]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilters({ ...filterEl });
  };
  
  const totalPages = Math.ceil(courseData.length / coursesPerPage);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" }); // optional UX
  };

  const startIndex = (page - 1) * coursesPerPage;
  const selectedCourses = courseData.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const { data: universityData } = useFetch(
    "https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx",
    "UniversityAPI?countryid=111",
    ""
  );

  const { data: levelData } = useFetch(
    "https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx",
    "LevelAPI",
    ""
  );

  useEffect(() => {
    console.log("Filters:", filters);
  }, [filters]);

  useEffect(() => {
    console.log("Course Data:", courseData);
  }, [courseData]);

  return (
    <div>
      <section
        className="h-80 flex justify-center items-center"
        style={backgroundImage}
      >
        <div className="bg-black/50 h-full w-full flex justify-center items-center">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
              Explore Courses
            </h1>
            <ul className="flex justify-center items-center mt-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <IoIosArrowForward className="mx-2" />
              <li>Courses</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-8">
        <div className="container mx-auto">
          <div className="py-12 px-4 shadow rounded-md">

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4"
            >
              <Input
                placeholder="Search Course..."
                value={filterEl.searchText}
                onChange={(e) =>
                  setFilterEl((prev) => ({
                    ...prev,
                    searchText: e.target.value,
                  }))
                }
                startDecorator={<SearchIcon />}
                sx={{ flex: 2 }}
              />

              <Select
                placeholder="University"
                value={filterEl.university}
                onChange={(e, val) =>
                  setFilterEl((prev) => ({
                    ...prev,
                    university: val || "",
                  }))
                }
                sx={{ flex: 1 }}
              >
                <Option value="">All Universities</Option>
                {universityData?.map((u, i) => (
                  <Option key={i} value={u.UNIVID}>
                    {u.UNIVNAME}
                  </Option>
                ))}
              </Select>

              <Select
                placeholder="Level"
                value={filterEl.level}
                onChange={(e, val) =>
                  setFilterEl((prev) => ({
                    ...prev,
                    level: val || "",
                  }))
                }
                sx={{ flex: 1 }}
              >
                <Option value="">All Levels</Option>
                {levelData?.map((l, i) => (
                  <Option key={i} value={l.ID}>
                    {l.LevelName}
                  </Option>
                ))}
              </Select>

              <Button color="success" type="submit" loading={loading} sx={{ flex: 0.5 }}>
                <FaSearch className="size-3"/>&nbsp; Search
              </Button>
            </form>
             <div className="my-12 grid grid-cols-1 lg:grid-cols-2 gap-3">
              {courseData ? selectedCourses.map((course, index) => {
                return <CourseCard 
                key={course.Row_No}
                UnivName={course.UnivName} 
                Program={course.Program} 
                LevelName={course.LevelName} 
                StudyArea={course.Study_Area} 
                Duration={course.Duration} 
                Language={course.Launguage_Of_Teaching} 
                LanguageProficiency={course.English_Proficiency_Requirement} 
                Description={course.Program_Description}/>
              }): <div className="text-center">Loading...</div>}
             </div>
             <div className="flex justify-center items-center">
                      <Pagination
                      count={totalPages}
                      page={page}
                      onChange={handleChange}
                      color="success"
                      shape="rounded"
                    />
             </div>
          </div>
        </div>
      </section>
      <section className='bg-primary/10' style={backgroundCTA}>
         <div className='container mx-auto'>
            <div className='py-12 max-w-160 px-5'>
            <h5 className='text-lg sm:text-xl md:text-2xl font-semibold mt-5 text-primary'>Ready to Work in Lithuania After Your Studies?</h5>
            <p className='text-justify mt-2 text-base md:text-lg font-regular text-gray-700'>Explore job opportunities, understand stay-back options, and start your career in Europe with expert guidance from <Link className='decoration-0 hover:underline text-tertiary font-medium' href={'https://indoeuropean.in'} target='_blank'>Indo-European Study Abroad Consultants</Link>.</p>
            <div className='mt-10 space-x-3'>
              {/* <Link className='font-semibold hover:underline text-sm md:text-base text-primary' href={'/contact'}>Check Eligibility</Link> */}
              <Link className='font-medium text-sm md:text-base text-primary bg-white hover:text-white hover:bg-primary border-2 border-primary px-5 py-2 rounded-md duration-500 ease-in-out' href={'https://zoom.us/j/91022278457#success'}><FaVideo className='inline-block size-5'/> &nbsp;Get Expert Advice</Link>
              <button className='font-medium text-sm md:text-base text-white bg-primary hover:bg-primary/75 border-2 border-primary px-5 py-2 rounded-md duration-500 ease-in-out' onClick={() => openPopup(true)}><CiLocationArrow1 className='inline-block size-5'/> &nbsp;Apply Now</button>
            </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Page;