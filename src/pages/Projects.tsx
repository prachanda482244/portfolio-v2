// Projects.jsx

import { ProjectCard } from "../components/ProjectCard";
import Title from "../components/Title";
import { projects } from "../constants/constants";

const Projects = () => {
  return (
    <section id="work" className=" pt-4 text-[#CCD6F6] ">
      <div className="container mx-auto px-4">
        <Title index="03" title="Some Things I’ve Built" />
        <div className="flex flex-col  md:gap-32 gap-10 pt-4">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              links={project.links}
              tech={project.tech}
              reverse={project.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
