import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

export function Dropdown({ title = "Title", text = "Text" }) {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-black/60">{title}</span>
        <div className="flex gap-2 items-center">
          <span className="text-primary font-medium">{text}</span>
          <button
            className="text-primary"
            aria-label={`Expand ${title} options`}>
            <ChevronDown size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
