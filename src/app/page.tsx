import Image from "next/image";
import profile from "../../public/profile/Niroj Neupane.jpg";
export default function Home() {
  return (
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
      </div>
    </div>
  );
}
