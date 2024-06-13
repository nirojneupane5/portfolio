import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-full border-t-2 border-solid border-black px-3 py-2 mt-4 text-base font-medium sm:text-2xl sm:font-bold">
      <div className="flex flex-col sm:flex-row">
        <div className="text-center">{new Date().getFullYear()}</div>
        <div> &copy; All Right Reserved</div>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="text-center">Build by </div>
        <Link href="/" className="underline underline-offset-3">
          Niroj Neupane
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
