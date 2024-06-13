import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full border-t-2 border-solid border-black px-3">
      <div>{new Date().getFullYear()} &copy; All Right Reserved</div>
      <div className="flex items-center">
        Build by <span className="text-pink-500">&#9825;</span>{" "}
        <Link href="/" className="underline underline-offset-3">
          Niroj Neupane
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
