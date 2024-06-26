import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <Link
        href="/"
        className="h-10 w-10 lg:h-16 lg:w-16 bg-black text-white flex items-center justify-center rounded-full text-xl lg:text-2xl font-bold hover:bg-red-500 duration-300"
      >
        NN
      </Link>
    </div>
  );
};

export default Logo;
