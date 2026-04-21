import axios from "axios";

const SendData = async (user, url) => {
  try {
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
      EnqDate: new Date("20, Apr, 2026").toISOString(),
      Dob: "",
      PrefferedCallBackTime: user?.CallBackTime || 2,
      HighestQualifcation: user?.highestQualification || "",
      PrefferedBranchID: 0,
      LandingPageUrl: "https://www.studyinlithuania.in",
      PhonenoOTPStatus: "0",
    };

    const res = await axios.get(url, { params: details });

    return { data: res.data };
  } catch (error) {
    return { error };
  }
};

export default SendData;