import { IoIosArrowDown } from "react-icons/io";

    export const faqData = [
    {
      title: "Question 1",
      content: "Explore Bachelor’s, Master’s, and PhD programs in Lithuania.",
    },
    {
      title: "Question 2",
      content: "Learn about admission steps, deadlines, and requirements.",
    },
    {
      title: "Question 3",
      content: "Students can work part-time while studying in Lithuania.",
    },
    {
      title: "Question 4",
      content: "Students can work part-time while studying in Lithuania.",
    },
    {
      title: "Question 5",
      content: "Students can work part-time while studying in Lithuania.",
    },
  ];


export const AccordionItem = ({ title, content, isOpen, onClick }) => {

  return (
    <div className="shadow-sm shadow-gray-400 px-3 rounded-sm my-2 bg-white">
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
