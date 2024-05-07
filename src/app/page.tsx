import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import profile from "../../public/profile/Niroj Neupane.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="h-96 flex justify-center items-center">
        <div>
          <Image
            src={profile}
            alt="Niroj Neupane profile"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="ml-10">
          <h1 className="text-xl font-bold text-black">Hello</h1>
          <h1 className="text-2xl font-bold text-black">I'm Niroj Neupane</h1>
          <h1 className="text-2xl font-bold text-black">Fullstack Developer</h1>
          <div className="flex space-x-6">
            <Link href={"https://www.linkedin.com/in/niroj-neupane-42b6a928a/"}>
              {" "}
              <AiFillLinkedin className="text-5xl" />
            </Link>
            <Link href={"https://github.com/nirojneupane5"}>
              <BsGithub className="text-5xl" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
