import AniminatedText from "@/components/AniminatedText";
import Layout from "@/components/Layout";
import profile from "../../../public/profile/Niroj Neupane.jpg";
import type { Metadata } from "next";
import Image from "next/image";

import Skills from "./Skills";
import Experience from "./Experience";

export const metadata: Metadata = {
  title: "Niroj Neupane | About",
  description: "Niroj Neupane about page",
};

const AboutPage = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-4">
        <AniminatedText
          text="Passion Fuels Purpose!"
          className="mb-4 !text-5xl"
        />
        <div className="grid grid-cols-8 gap-16 w-full">
          <div className="col-span-3 flex flex-col items-start justify-start text-justify">
            <h1 className="py-4 text-lg font-bold uppercase text-black/75">
              Biography
            </h1>
            <p className="font-medium">
              Hi, I'm Niroj Neupane, a web developer with a passion for creating
              beautiful, functional, and user-centered digital experiences. With
              5 months of experience in the field. I am always looking for new
              and innovative ways to bring my clients' visions to life.
            </p>
            <p className="font-medium">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium my-4">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-black rounded-2xl" />
            <Image
              src={profile}
              alt="Niroj Neupane"
              className="object-cover h-full w-full rounded-2xl"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-between item-end">
            <div className="flex flex-col item-end justify-center">
              <span className="inline-block text-7xl font-bold">5+</span>
              <h2 className="text-xl font-medium text-black/75 capitalize">
                Project Completed
              </h2>
            </div>
            <div className="flex flex-col item-end justify-center">
              <span className="inline-block text-7xl font-bold">5</span>
              <h2 className="text-xl font-medium text-black/75 capitalize">
                months of experience
              </h2>
            </div>
            <div className="flex flex-col item-end justify-center">
              <span className="inline-block text-7xl font-bold">2+</span>
              <h2 className="text-xl font-medium text-black/75 capitalize">
                satisfied client
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
      </Layout>
    </main>
  );
};

export default AboutPage;
