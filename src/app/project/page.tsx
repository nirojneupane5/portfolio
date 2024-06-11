import AniminatedText from "@/components/AniminatedText";
import Layout from "@/components/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niroj Neupane | Project",
  description: "Niroj Neupane project",
};

const Project = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Layout className="pt-4">
        <AniminatedText text="Imagination Trumps Knowledge!" />
      </Layout>
    </main>
  );
};

export default Project;
