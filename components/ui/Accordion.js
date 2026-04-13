import { IoIosArrowDown } from "react-icons/io";

    export const faqData = [
    {
      title: "1. Why should I choose Lithuania for higher education?",
      content: "Lithuania offers a high-quality education along with globally recognised degrees and low tuition fees. Indian students even benefit from their multiple English-taught programs, friendly environment and part-time work options along with international career opportunities. ",
    },
    {
      title: "2. Is IELTS mandatory for Lithuania?",
      content: "Not always. Some universities accept students without IELTS if they have studied in an English medium or pass an internal interview.",
    },
    {
      title: "3. How much does it cost to live in Lithuania?",
      content: "The average cost of living in Lithuania is €400 to €700 per month. This includes accommodation, food, transport, and personal expenses.",
    },
    {
      title: "4. How long does it take to get a Lithuania student visa?",
      content: "The visa process usually takes 2 to 6 weeks, depending on the application and embassy processing time.",
    },
    {
      title: "5. Do I need health insurance for Lithuania?",
      content: "Yes, health insurance is mandatory for visa approval and to stay in Lithuania.",
    },
  ];


export const AccordionItem = ({ title, content, isOpen, onClick }) => {

  return (
    <div className="shadow-sm shadow-gray-400 px-3 rounded-sm my-2 bg-white max-w-lg">
      <button
        onClick={onClick}
        className="w-full text-left py-4 flex justify-between items-center cursor-pointer"
      >
        <span className="font-medium">{title}</span>
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <IoIosArrowDown className="size-5"/>
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};
