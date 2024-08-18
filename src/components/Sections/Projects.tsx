import CardPorject from "@/components/CardPorject";
import { Database, Tables } from "../../../database.types";

const Projects = ({ projects }: { projects: Tables<"projects"> }) => {
  return (
    <>
      <h1
        className={
          "text-xl mb-4 mt-10 font-bold  bg-gradient-to-br from-orange-600 to-amber-300 text-transparent bg-clip-text"
        }
      >
        Projects
      </h1>
      <div className="grid gap-5 md:grid-cols-2">
        {Array.isArray(projects) &&
          projects.map((project) => <CardPorject key={project.id} project={project} />)}
      </div>
    </>
  );
};

export default Projects;
