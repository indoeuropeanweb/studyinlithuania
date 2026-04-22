import axios from "axios";

const SendData = async (user, url) => {
  const details = {
    Fname: user?.name?.split(" ")[0] || "",
    Lname: user?.name?.split(" ")[1] || "",
    CountryCodeid: user?.countryID ? String(user.countryID) : "67",
    PhoneNo: user?.phone ? String(user.phone) : "",
    WhatsappNo: user?.phone ? String(user.phone) : "",
    Emailid: user?.email || "",
    EnquirySourceCategoryID: 2,
    EnquirySourceID: 85,
    EnqStageid: 1,
    branchid: 0,
    Country1: "",
    Levelid: 0,
    Intakeid: 0,
    Address1Citytext: user?.city || "",
    Isstatusid: "1",
    EnqDate: new Date().toISOString(),
    Dob: "",
    PrefferedCallBackTime: user?.CallBackTime || 2,
    HighestQualifcation: user?.highestQualification || "",
    PrefferedBranchID: 0,
    LandingPageUrl: "https://www.studyinlithuania.in",
    PhonenoOTPStatus: "0",
  };

  try {
    const res = await axios.post(url, details);
    return res.data;
  } catch (error) {
    console.error("Axios Error:", error.message);
    return null;
  }
};

export default SendData;