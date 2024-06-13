import { AiFillGithub } from "react-icons/ai";
import AniminatedText from "@/components/AniminatedText";
import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import elearning from "../../../public/elearning.png";
import netflix from "../../../public/netflix.png";
import ecommerce from "../../../public/ECommerce.png";

export const metadata: Metadata = {
  title: "Niroj Neupane | Project",
  description: "Niroj Neupane project",
};

type TFeatureProps = {
  title: string;
  description?: string;
  summary?: string;
  img: StaticImageData;
  link: string;
  github: string;
  type: string;
};
const FeatureProject = ({
  type,
  title,
  description,
  summary,
  img,
  link,
  github,
}: TFeatureProps) => {
  return (
    <article className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-xl shadow-2xl border-2 border-solid border-black lg:px-5 lg:py-3">
      <Link
        href={link}
        target={"_blank"}
        className="lg:w-1/2 overflow-hidden cursor-pointer rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="object-cover w-full h-auto"
          priority
        />
      </Link>
      <div className="lg:w-1/2 flex flex-col items-start justify-between px-2">
        <span className="text-pink-500 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="text-4xl font-bold text-black my-2 ">{title}</h2>
        </Link>
        <p className="text-xl font-medium my-2 text-justify">{summary}</p>
        <Link href={github} target={"_blank"} className="flex items-center ">
          <AiFillGithub className="text-5xl" />{" "}
          <span className="text-lg font-medium bg-black text-white px-2 py-2 rounded-lg">
            Visit Project
          </span>
        </Link>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center px-3">
      <AniminatedText text="Imagination Trumps Knowledge!" className="mb-5" />
      <div className="grid grid-cols-1 gap-24">
        <div>
          <FeatureProject
            title="Elearning Platform"
            summary="This platform aims to provide a seamless learning experience, combining the latest technologies with an intuitive user interface and powerful backend functionalities."
            link="/"
            img={elearning}
            type="Feature Project"
            github="https://github.com/nirojneupane5/elearning-client.git"
          />
        </div>
        <div>
          <FeatureProject
            title="Netflix clone"
            link="https://nirojneupane5.github.io/netflix-clone/"
            img={netflix}
            type="Project 1"
            github="https://github.com/nirojneupane5/netflix-clone.git"
          />
        </div>
        <div>
          <FeatureProject
            title="Ecommerce"
            link="/"
            img={ecommerce}
            type="Project 2"
            github="https://github.com/nirojneupane5/ecommerce.git"
          />
        </div>
      </div>
    </main>
  );
};

export default Project;
