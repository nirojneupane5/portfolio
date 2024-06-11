import AniminatedText from "@/components/AniminatedText";
import Layout from "@/components/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niroj Neupane | About",
  description: "Niroj Neupane about page",
};

const AboutPage = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AniminatedText text="Passion Fuels Purpose!" className="mb-2" />
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
        </div>
      </Layout>
    </main>
  );
};

export default AboutPage;
