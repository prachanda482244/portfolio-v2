import React from "react";

interface TitleProps {
  title: string;
  index: string;
  extraclass?: string;
}
const Title: React.FC<TitleProps> = ({
  title = "About",
  index = "01",
  extraclass = "justify-start",
}) => {
  return (
    <div className={`flex gap-2  ${extraclass} mb-4 items-end`}>
      <span className="text-[22px] text-teal-300">{index}.</span>
      <p className="text-[25px] text-gray-300 font-semibold capitalize">
        {title}
      </p>
      <div className=" border w-1/4 items-center border-gray-500 mb-4"></div>
    </div>
  );
};

export default Title;
