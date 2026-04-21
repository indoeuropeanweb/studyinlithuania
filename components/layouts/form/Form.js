"use client"
import { useState, useEffect } from "react";
import useFetch from "@/utils/customhooks/useFetch";
import SendData from "@/utils/customhooks/SendData";
import { CiLocationArrow1 } from "react-icons/ci";

const Form = () => {
  const initialForm = {
    name:"",
    email:"",
    phone:"",
    city:"",
    countryID: 67,
    highestQualification:"",
    CallBackTime:"",
    CourseLevel:"",
    destination:""
  }

const [user, setUser] = useState(initialForm);
const [touched, setTouched] = useState({});
const [errors, setErrors] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false)
const [resData, setResData] = useState({});

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

  if(resData.service === "Emaildulicate"){
    newErrors.email = "Email ID Already Exist !"
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

useEffect(() => {
  if (isSubmitted) {
    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
    return () => clearTimeout(timer);
  }
}, [isSubmitted]);

const handleChange = (e) => {
  const { name, value } = e.target;
  setUser((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  try {
    const {data, service, status} = await SendData(
      user,
      "https://crm.indoeuropean.in/WebService/Lead.asmx/OnlineLead"
    );

    setResData(data.status);
    console.log(data);
    if (data.status === "Emaildulicate" || data.data === "Email Id Allready Exist") {
      setErrors({
        email: "Email ID already exists!"
      });
      return; 
    }
    if (data.status === "Mobiledulicate" || data.data === "Mobile No Allready Exist") {
      setErrors({
        phone: "Mobile No. already exists!"
      });
      return; 
    }

    setUser(initialForm);
    setIsSubmitted(true);

  } catch (err) {
    console.error(err);
    setErrors({
      api: "Something went wrong. Please try again."
    });
  }
};

  const {data:highestQualification, loading:loadingQualification} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetHighestQualification", "");
  const {data:CallBackTime, loading:loadingCallback} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetPreferredCallBackTime", "");
  const {data:CourseLevel, loading:loadingLevel} = useFetch("https://crm.indoeuropean.in/WebService/Lead.asmx", "GetLevel", "");
  const {data:destinations, loading:loadingDestination} = useFetch("https://crm.indoeuropean.in/WebService/CourseFinder/Programs_api.asmx", "CountryAPI", "");
  const {data:countryID, loading:loadingCountryID} = useFetch("https://crm.indoeuropean.in/webService/lead.asmx", "GetCountryCode", "");

  return (
    <div className="relative overflow-hidden w-full">
    <div
    className={`transition-all duration-700 ease-in-out ${
      isSubmitted
        ? "translate-x-full scale-95 opacity-0"
        : "translate-x-0 scale-100 opacity-100"
    }`}
  >
      <form className="shadow-sm shadow-gray-200 border-2 border-gray-200 px-8 py-8 rounded-sm" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
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
        <div
    className={`absolute inset-0 flex flex-col items-center justify-center bg-white transition-all duration-700 ease-in-out ${
isSubmitted
  ? "translate-x-0 scale-100 opacity-100"
  : "-translate-x-full scale-95 opacity-0"
    }`}
  >
    <div className="text-center">
       <video
        width="240"
        autoPlay
        muted
        loop
        className="mx-auto"
      >
         <source src="/assets/images/videos/form-submit.mp4" type="video/mp4" />
      </video>
      <h2 className="text-2xl font-bold text-green-600">Thank You!</h2>
      <p className="text-gray-600 mt-2">
        Your form has been submitted successfully.
      </p>
      <p className="text-gray-500">
        We’ll contact you shortly.
      </p>
    </div>
  </div>
    </div>
  )
}

export default Form