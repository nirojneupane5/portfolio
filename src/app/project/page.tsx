import { AiFillGithub } from "react-icons/ai";
import AniminatedText from "@/components/AniminatedText";
import Layout from "@/components/Layout";
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
    <article className="w-full flex items-center justify-between rounded-xl shadow-2xl border-2 border-solid border-black px-5 py-3">
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 overflow-hidden cursor-pointer rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="object-cover w-full h-auto"
          priority
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between px-2">
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

const SpecialProject = ({
  type,
  title,
  description,
  summary,
  img,
  link,
  github,
}: TFeatureProps) => {
  return (
    <article className="w-full flex flex-col items-start justify-between rounded-xl shadow-2xl border-2 border-solid border-black py-2">
      <Link
        href={link}
        target={"_blank"}
        className="w-full overflow-hidden cursor-pointer rounded-lg px-2"
      >
        <Image
          src={img}
          alt={title}
          className="object-cover w-full h-60 rounded-md"
          priority
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between px-2">
        <span className="text-pink-500 font-medium text-lg w-full">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="text-4xl font-bold text-black my-2 w-full">{title}</h2>
        </Link>
        <Link href={github} target={"_blank"} className="flex items-center ">
          <AiFillGithub className="text-2xl" />{" "}
          <span className="text-md font-medium bg-black text-white px-1 py-1 rounded-lg ml-2">
            Visit Project
          </span>
        </Link>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Layout className="pt-4">
        <AniminatedText text="Imagination Trumps Knowledge!" className="mb-5" />
        <div className="grid grid-cols-12 gap-24">
          <div className="col-span-12">
            <FeatureProject
              title="Elearning Platform"
              summary="This platform aims to provide a seamless learning experience, combining the latest technologies with an intuitive user interface and powerful backend functionalities."
              link="/"
              img={elearning}
              type="Feature Project"
              github="https://github.com/nirojneupane5/elearning-client.git"
            />
          </div>
          <div className="col-span-6">
            <SpecialProject
              title="Netflix clone"
              link="https://nirojneupane5.github.io/netflix-clone/"
              img={netflix}
              type="Project 1"
              github="https://github.com/nirojneupane5/netflix-clone.git"
            />
          </div>
          <div className="col-span-6">
            <SpecialProject
              title="Ecommerce"
              link="/"
              img={ecommerce}
              type="Project 2"
              github="https://github.com/nirojneupane5/ecommerce.git"
            />
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default Project;
