import { MdPeopleAlt } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { FaSearch, FaRegHandshake } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

export const heroSlides = [
  {
    subtitle: "Your Expert Guide to",
    title: "Explore Top Universities and Study Opportunities in Lithuania",
    buttonText: "Explore Courses",
    link: "/courses",
    icon: "search",
  },
  {
    subtitle: "Build Your Global Career",
    title: "Unlock International Opportunities with World-Class Education",
    buttonText: "Start Your Journey",
    link: "/courses",
    icon: "earth",
  },
  {
    subtitle: "We Guide You at Every Step",
    title: "From Admission to Visa – Your Trusted Partner for Studying Abroad",
    buttonText: "Get Free Consultation",
    link: "/courses",
    icon: "handshake",
  },
];

export const stats = [
  {
    icon: FaGraduationCap,
    value: "11000+",
    text: "Scholarships awarded through Indo in one year",
  },
  {
    icon: FaEarthAmericas,
    value: "5000+",
    text: "Students successfully placed in top universities",
  },
  {
    icon: FaAward,
    value: "250+",
    text: "Partner universities across Europe",
  },
  {
    icon: MdPeopleAlt,
    value: "98%",
    text: "Visa success rate for our applicants",
  },
];

export const universities = [
  {
    src: "/assets/images/universities/1.jpg",
    alt: "Vilnius Gediminas Technical University",
  },
  {
    src: "/assets/images/universities/2.jpg",
    alt: "Vytautas Magnus University",
  },
  {
    src: "/assets/images/universities/3.jpg",
    alt: "Vilnius University",
  },
  {
    src: "/assets/images/universities/4.jpg",
    alt: "Lithuanian University of Health Sciences",
  },
  {
    src: "/assets/images/universities/5.jpg",
    alt: "Lietuvos Sporto Universitetas",
  },
  {
    src: "/assets/images/universities/6.png",
    alt: "Kauno Kolegija",
  },
  {
    src: "/assets/images/universities/7.png",
    alt: "SMK University of Applied Social Sciences",
  },
  {
    src: "/assets/images/universities/8.png",
    alt: "Klaipeda University",
  },
  {
    src: "/assets/images/universities/10.png",
    alt: "ISM University of Management and Economics",
  },
];

export const admissionData = [
  {
    title: "Courses",
    description:
      "Courses in Lithuania offer a range of Bachelor’s, Master’s, and PhD courses that seamlessly align with your ambitions and focus on practical learning across fields such as engineering, business, medicine and arts.",
  },
  {
    title: "Admission",
    description:
      "Sometimes, the Study in Lithuania admission process can be tough. In order to make your journey hassle-free, it’s necessary to learn about the admission process, visa requirements, tuition fees and deadlines. Hence, applicants may need to start preparing in advance.",
  },
  {
    title: "Working",
    description:
      "Students get a chance to work in Lithuania after studies and contribute their skills and expertise to Lithuania’s dynamic and growing professional environment while embracing the rich cultural experiences the country has to offer.",
  },
  {
    title: "Visa & PR",
    description:
      "Navigating the Lithuania Student Visa & Residence Permit is one of the crucial steps in initiating the educational journey in Lithuania. However, the right guidance makes it simple and manageable.",
  },
];

export const studyBenefits = [
  {
    title: "Quality of Life",
    description:
      "In Lithuania, the cost of living is relatively lower than in other European countries, while maintaining high standards in healthcare, education, and overall services. It offers a great quality of life for international students and ranks well in global quality of life indices.",
  },
  {
    title: "Safety and Student-Friendly Country",
    description:
      "Lithuania is considered one of the safest countries in Europe with a low crime rate, providing a welcoming and secure environment for international students.",
  },
  {
    title: "Cultural Heritage",
    description:
      "Lithuania offers a rich cultural history with traditional arts, music, and vibrant festivals, giving students a unique cultural experience.",
  },
  {
    title: "Tech Hub",
    description:
      "Lithuania is emerging as a growing tech hub with strong development in IT, startups, and innovation-driven industries.",
  },
  {
    title: "European Union Membership",
    description:
      "As a member of the European Union, Lithuania provides residents with benefits like the freedom to travel and work across EU countries.",
  },
  {
    title: "Affordable Tuition Fees",
    description:
      "Lithuania offers affordable tuition fees starting from as low as €2000 per year, making it a budget-friendly destination for international students.",
  },
  {
    title: "English-Taught Programs",
    description:
      "Many universities in Lithuania offer a wide range of programs in English across Bachelor’s, Master’s, and PhD levels.",
  },
  {
    title: "Work Opportunities for International Students",
    description:
      "International students can work part-time while studying, helping them gain experience and support their living expenses.",
  },
  {
    title: "Post-Study Career Option",
    description:
      "Graduates can explore job opportunities in Lithuania and across Europe in growing sectors such as IT, Engineering, Business, and Technology.",
  },
];


export const getIcon = (icon) => {
  switch (icon) {
    case "search":
      return <FaSearch className="inline-block" />;
    case "earth":
      return <FaEarthAmericas className="inline-block" />;
    case "handshake":
      return <FaRegHandshake className="inline-block" />;
    default:
      return null;
  }
};



