import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

const Page = async ({ params }: { params: { slug: string } }) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { slug } = params;
  const { data } = await supabase.from("projects").select("title,detail").eq("slug", slug).single();
  if (!data) {
    return notFound();
  }
  return (
    <div>
      <div className="prose-headings:text-white prose w-[90%] sm:w-4/5 mx-auto  text-white">
        <Markdown>{data.detail}</Markdown>
      </div>
    </div>
  );
};

export default Page;
