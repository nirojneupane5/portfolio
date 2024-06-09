import Layout from "@/components/Layout";
import profilepic from "../../public/profile/Niroj Neupane.jpg";
import Image from "next/image";
import AniminatedText from "@/components/AniminatedText";
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
            <AniminatedText text="Turning Vision Into Reality With Code And Design" />
            <p>
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
          </div>
        </div>
      </Layout>
    </main>
  );
}
