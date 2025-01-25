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
      className="min-h-screen pt-10 open-sans-light w-[70%] bg-[#0a192f]  mx-auto text-[#ccd6f6] font-mono"
    >
      <Title index="02" title="Where I've Worked" />

      <div className="flex flex-col md:flex-row pt-5 h-[calc(100vh-120px)]">
        {/* Left Side - Navigation */}
        <div className="md:w-1/3 ">
          <ul className="flex md:flex-col">
            {experiences.map((exp, index) => (
              <li
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`cursor-pointer border-l-2 px-4  text-sm tracking-wider font-light py-2 transition-all duration-300 ${
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
        <div className="md:w-2/3 pl-4 " ref={contentRef}>
          <h3 className=" text-lg text-gray-300 font-bold flex gap-[6px]">
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
          <p className="text-sm text-[#8892b0] mt-2 mb-5 tracking-wider">
            {experiences[selectedIndex].duration}
          </p>
          <div className="list-disc list-inside space-y-2 mb-4">
            {experiences[selectedIndex].details.map((detail, i) => (
              <p
                className="flex text-sm text-gray-500 items-start gap-4"
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
