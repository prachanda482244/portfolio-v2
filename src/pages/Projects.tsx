// Projects.jsx

import { ProjectCard } from "../components/ProjectCard";
import Title from "../components/Title";
import { projects } from "../constants/constants";

const Projects = () => {
  return (
    <div className="bg-[#0A192F] text-[#CCD6F6] ">
      <div className="container mx-auto px-4">
        <Title index="03" title="Some Things I’ve Built" />
        <div className="space-y-12 pt-4">
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
    </div>
  );
};

export default Projects;
