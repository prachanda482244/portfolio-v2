import { Link } from "react-router-dom";
import Card from "../components/Card";
import { otherWorthyProject } from "../constants/constants";

const NoteWorthyProjects = () => {
  return (
    <div className="poppins-semibold min-h-screen pt-5">
      <div className="flex flex-col  items-center">
        <p className="text-[25px] text-center text-gray-300 font-semibold capitalize">
          Other Noteworthy Projects
        </p>
        <Link to="/archieve" className="text-sm  py-2 font-light">
          view the archieve
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 lg:p-10 p-2 place-items-center ">
        {otherWorthyProject.map(
          ({ description, tech, title, externalLink, githubLink }) => (
            <Card
              key={title}
              title={title}
              tech={tech}
              externalLink={externalLink}
              githubLink={githubLink}
              description={description}
            />
          )
        )}
      </div>
    </div>
  );
};

export default NoteWorthyProjects;
