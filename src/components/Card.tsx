import React, { useEffect, useRef } from "react";
import { CiFolderOn } from "react-icons/ci";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { CardProps } from "../types/types";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Card: React.FC<CardProps> = ({
  title,
  description,
  tech,
  externalLink,
  githubLink,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (cardRef.current && titleRef.current) {
      cardRef.current.addEventListener("mouseenter", () => {
        gsap.to(cardRef.current, { y: -10, duration: 0.3, ease: "power1" });
        gsap.to(titleRef.current, { color: "#5eead4", duration: 0.3 });
      });

      cardRef.current.addEventListener("mouseleave", () => {
        gsap.to(cardRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(titleRef.current, { color: "#ccd6f6", duration: 0.3 });
        // Revert to original color
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#112240] w-full h-[340px] p-6 transition-all"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <CiFolderOn className="text-5xl" />
          <span className="flex items-center gap-2 text-gray-400">
            {githubLink !== null && (
              <Link to={githubLink} target="_blank">
                <FiGithub className="text-xl " />
              </Link>
            )}
            {externalLink !== null && (
              <Link to={externalLink} target="_blank">
                <FiExternalLink className=" text-xl" />
              </Link>
            )}
          </span>
        </div>
        <div className=" h-[210px] flex flex-col gap-2">
          <p
            ref={titleRef}
            style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 1)" }}
            className="text-[#ccd6f6] mt-4 font-semibold text-lg"
          >
            {title}
          </p>

          <p
            style={{ textShadow: "2px 2px 30px rgba(0, 0, 0, 1)" }}
            className="text-sm text-gray-500 poppins-regular  "
          >
            {description}
          </p>
        </div>

        <div className="flex items-center text-sm mt-1 poppins-light capitalize gap-3 text-[#c0c1c2] ">
          {tech?.map((item: any, i: number) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
