import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex h-16 justify-center space-x-6 bg-black text-white items-center">
      <Link href="/" className="hover:text-blue-500 text-white">
        Home
      </Link>
      <Link href="/about" className="hover:text-blue-500  text-white">
        About
      </Link>
    </div>
  );
};
