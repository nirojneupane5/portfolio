import { BiLinkExternal } from "react-icons/bi";
import Layout from "@/components/Layout";
import profilepic from "../../public/profile/Niroj Neupane.jpg";
import lightbulb from "../../public/light bulb.svg";
import Image from "next/image";
import AniminatedText from "@/components/AniminatedText";
import Link from "next/link";
import HireMe from "@/components/HireMe";
export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={profilepic}
              alt="profile pic"
              className="object-cover w-full h-auto rounded-full"
            />
          </div>
          <div className="w-1/2">
            <AniminatedText
              text="Turning Vision Into Reality With Code And Design"
              className="!text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
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
      </Layout>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image src={lightbulb} alt="light bulb" className="h-full w-full" />
      </div>
    </main>
  );
}
