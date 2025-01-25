import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Title from "../components/Title";
import { FaCaretRight } from "react-icons/fa";
import { experiences } from "../constants/constants";

const Worked = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [selectedIndex]);

  return (
    <section
      id="experience"
      className="min-h-screen pt-10 open-sans-light  md:w-[70%] bg-[#0a192f]  mx-auto text-[#ccd6f6] font-mono"
    >
      <Title index="02" title="Where I've Worked" />

      <div className="flex flex-col md:flex-row pt-5 h-[calc(100vh-120px)]">
        {/* Left Side - Navigation */}
        <div className="md:w-1/3  ">
          <ul className="flex md:flex-col overflow-hidden overflow-x-scroll md:overflow-x-hidden max-sm:items-center scrollbar scrollbar-thumb-gray-500 scrollbar-track-[#0a182d]  py-2 px-1 md:py-0">
            {experiences.map((exp, index) => (
              <li
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`cursor-pointer md:border-l-2 whitespace-nowrap md:whitespace-normal px-4 border md:border-0 text-xs md:text-sm tracking-wider font-light py-2 transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-[#11284f] text-[#64ffda] border-teal-300 font-bold"
                    : "text-[#8892b0] hover:text-[#64ffda] border-gray-500"
                }`}
              >
                {exp.company}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-2/3  pl-4 md:pt-0 pt-3 " ref={contentRef}>
          <h3 className=" text-sm md:text-lg text-gray-300 font-bold flex gap-[6px]">
            <span className="tracking-wide">
              {experiences[selectedIndex].role}
            </span>{" "}
            @
            <a
              href={experiences[selectedIndex].link}
              className="text-[#64ffda]"
            >
              {experiences[selectedIndex].company}
            </a>
          </h3>
          <p className="text-xs md:text-sm text-[#8892b0] mt-2 mb-5 tracking-wider">
            {experiences[selectedIndex].duration}
          </p>
          <div className="list-disc list-inside space-y-4  md:space-y-2 mb-4">
            {experiences[selectedIndex].details.map((detail, i) => (
              <p
                className="flex text-xs md:text-sm text-gray-500 items-start gap-4"
                key={i}
              >
                <FaCaretRight className="text-teal-300 mt-1 text-sm" />
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Worked;
