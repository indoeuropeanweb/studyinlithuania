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

const Page = () => {
  const [filterEl, setFilterEl] = useState({
    searchText: "",
    university: "",
    level: "",
  });

  const [filters, setFilters] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const backgroundImage = {
    backgroundImage: "url('/assets/images/courses/courses-banner.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000",
  };

  useEffect(() => {
    if (!filters) return;

    const fetchCourses = async () => {
      try {
        setLoading(true);

        const url = `https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx/ProgramsAPI?countryid=&univid=${filters.university || ""}&levelid=${filters.level || ""}&intakeid=&searchtext=${filters.searchText || ""}`;

        const response = await axios.get(url);

        console.log("API Response:", response.data);

        setCourseData(response.data);
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
    setFilters({ ...filterEl }); // trigger API
  };

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

              <Button type="submit" loading={loading} sx={{ flex: 1 }}>
                Search
              </Button>
            </form>

            {/* <pre className="mt-4 text-xs bg-gray-100 p-2 rounded">
              {JSON.stringify(filterEl, null, 2)}
            </pre>

            <div className="mt-6">
              {loading && <p>Loading...</p>}

              {!loading && courseData && (
                <pre className="text-xs bg-gray-100 p-2 rounded">
                  {JSON.stringify(courseData, null, 2)}
                </pre>
              )}
            </div> */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;