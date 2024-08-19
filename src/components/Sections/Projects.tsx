import CardPorject from "@/components/CardPorject";
import { Database, Tables } from "../../../database.types";

const Projects = ({ projects }: { projects: Tables<"projects"> }) => {
  return (
    <div className=" my-10 ">
      <h1
        className={
          "text-xl mb-4font-bold mb-4  bg-gradient-to-br from-orange-600 to-amber-300 text-transparent bg-clip-text"
        }
      >
        Projects
      </h1>
      <div className="grid gap-5 lg:grid-cols-2">
        {Array.isArray(projects) &&
          projects.map((project) => <CardPorject key={project.id} project={project} />)}
      </div>
    </div>
  );
};

export default Projects;
