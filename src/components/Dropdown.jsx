import { ChevronDown } from "lucide-react";

export function Dropdown({ title = "Title", text = "Text" }) {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-black/60">{title}</span>
        <div className="flex gap-2 items-center">
          <span className="text-primary font-medium">{text}</span>
          <button className="text-primary" aria-label={`Expand ${title} options`}>
            <ChevronDown size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </>
  );
}
