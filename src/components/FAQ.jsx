import { ChevronDown, ChevronUp } from "lucide-react";
import PropTypes from "prop-types";

// FAQ Component
export const FAQ = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="w-full border-b border-gray-300 py-5 flex flex-col gap-2 ">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full text-left text-gray-800 font-medium gap-5"
        aria-expanded={isOpen}
      >
        <span className="text-primary font-medium  text-base md:text-xl">{question}</span>
        <span className="transition-transform duration-300 ease-in-out">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-primary" />
          )}
        </span>
      </button>
      {isOpen && <p className="mt-2 text-black/60 text-sm md:text-base w-11/12 font-medium">{answer}</p>}
    </div>
  );
};

FAQ.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
