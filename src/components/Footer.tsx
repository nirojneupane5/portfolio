import Link from "next/link";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
        <div className="flex items-center">
          Build by <span className="text-pink-500 text-2xl px-1">&#9825;</span>{" "}
          <Link href="/" className="underline underline-offset-2">
            Niroj Neupane
          </Link>
        </div>
        <Link href="/" target={"_blank"}>
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
