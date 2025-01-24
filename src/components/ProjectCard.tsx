import { useEffect } from "react";
import { gsap } from "gsap";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const ProjectCard = ({
  title,
  description,
  image,
  tech,
  links,
  reverse,
}: any) => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div
      className={`project-card   flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } space-y-6 md:space-y-0 md:spacex-6`}
    >
      {/* Image */}
      <div className="w-full h-96  md:w-[60%] overflow-hidden rounded-lg shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-ull object-covers transform hover:scale-105 transition-transform duration-500 blur-[2px] hover:blur-0"
        />
      </div>

      {/* Text */}
      <div
        className={`w-full flex flex-col ${
          reverse ? "items-start" : "items-end"
        }  md:w-[40%] gap-3`}
      >
        <p className="text-teal-300 font-semibold tracking-wide text-sm">
          Featured Project
        </p>
        <h4 className="text-2xl font-semibold ">{title}</h4>
        <div className="relative">
          <p
            style={{ boxShadow: "0 10px  30px -15px #020c1bb3" }}
            className={`text-sm rounded-md bg-[#112240] p-4 py-10  w-[calc(40vw+10px)]  text-[#a8b2d1] tracking-tighter mb-4 ${
              reverse ? "texl-left" : "text-right"
            }`}
          >
            {description}
          </p>
          <p></p>
        </div>
        <div className="flex items-center capitalize gap-4 text-[#7e8394] ">
          {tech.map((item: any, i: number) => (
            <span key={i}>{item}</span>
          ))}
        </div>

        <div className="flex items-center space-x-4 text-2xl">
          {/* GitHub Link */}
          <a href={links.github}>
            <FiGithub />
          </a>
          <a href={links.external}>
            <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};
