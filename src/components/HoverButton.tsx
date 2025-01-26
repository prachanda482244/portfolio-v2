import { forwardRef } from "react";

type HoverButtonProps = {
  title: string;
};

const HoverButton = forwardRef<HTMLButtonElement, HoverButtonProps>(
  ({ title }, ref) => {
    return (
      <button
        ref={ref}
        className="relative py-3 mt-10 px-8 border border-teal-300 rounded-md text-teal-300 bg-transparent overflow-hidden group"
      >
        <span
          className="absolute inset-0 bg-teal-300
          scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left rounded-md"
        ></span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0a182d]">
          {title}
        </span>
      </button>
    );
  }
);

export default HoverButton;
