import { BiLinkExternal } from "react-icons/bi";
import Layout from "@/components/Layout";
import profilepic from "../../public/profile/Developer.png";
import lightbulb from "../../public/light bulb.svg";
import Image from "next/image";
import AniminatedText from "@/components/AniminatedText";
import Link from "next/link";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <main className="flex lg:items-center w-full lg:min-h-screen px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full">
        <div className="lg:w-1/2">
          <Image
            src={profilepic}
            alt="profile pic"
            className="object-cover w-full h-80 lg:h-auto rounded-full"
            priority
          />
        </div>
        <div className="lg:w-1/2">
          <AniminatedText
            text="Turning Vision Into Reality With Code And Design"
            className="!text-left"
          />
          <p className="my-4 text-sm lg:text-base font-medium  text-black">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center justify-center lg:justify-start self-start mt-2">
            <Link
              href="/Niroj_Neupane.pdf"
              target={"_blank"}
              className="flex items-center bg-black text-white p-2.5 px-6 rounded-lg font-semibold text-lg hover:text-black hover:bg-white duration-300 border-2 solid border-transparent hover:border-black"
            >
              Resume <BiLinkExternal className="mx-2" />
            </Link>
            <Link
              href="mailto:nirojneupane5@gmail.com"
              target={"_blank"}
              className="ml-4 font-semibold capitalize underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image
          src={lightbulb}
          alt="light bulb"
          className="h-full w-full hidden lg:block"
          priority
        />
      </div>
    </main>
  );
}
