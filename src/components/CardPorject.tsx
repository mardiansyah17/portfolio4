"use client";
import Button from "@/components/Button";
import { Badge } from "@/components/ui/badge";
import { Tables } from "../../database.types";
import { useRouter } from "next/navigation";

function CardPorject({ project }: { project: Tables<"projects"> }) {
  const router = useRouter();
  return (
    <div className="border border-orange-300 p-3 rounded-md h-[24rem] hover:shadow-md hover:transition-all hover:duration-500 hover:shadow-orange-600 hover:-translate-y-2">
      <h2 className={"text-lg font-bold mb-1"}>{project.title}</h2>
      <div className="flex justify-between mb-4 items-center">
        <span className="text-sm">12 Mei 2024</span>
        <span className="text-orange-500">{project.categories.name}</span>
      </div>
      <div className="h-[38%]">
        <p className={"text-sm"}>{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-4 h-[25%] items-center ">
        <Badge>Dart</Badge>
        <Badge>Flutter</Badge>
      </div>
      <div className="mt-4 flex justify-center  gap-4  h-[20%] ">
        <Button
          onClick={() => router.push(`/projects/${project.slug}`)}
          size="sm"
          variant="outline"
        >
          Detail
        </Button>
        <Button
          onClick={() => window.open("https://github.com/mardiansyah17/qur_an")}
          size="sm"
          variant="outline"
        >
          Repository
        </Button>
        <Button size="sm" variant="outline">
          Demo
        </Button>
      </div>
    </div>
  );
}

export default CardPorject;
