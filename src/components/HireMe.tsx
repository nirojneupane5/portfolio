import Link from "next/link";
import CircularText from "./Icon";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-full h-auto flex items-center justify-center relative">
        <CircularText className={"fill-black animate-spin-slow"} />
        <Link
          href="mailto:nirojneupane5@gmial.com"
          className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white shadow-md border border-solid border-black h-20 w-20 rounded-full hover:text-black hover:bg-white font-semibold duration-300"
        >
          Hire Me!!
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
