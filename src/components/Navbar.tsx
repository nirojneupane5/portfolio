import Logo from "./Logo";
import CustomLink from "./CustomLink";
import Account from "./Account";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full px-4 lg:px-32 py-8 font-medium ">
      <Hamburger />
      <div className="hidden lg:flex justify-between items-center w-full ">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/project" title="Project" className="mx-4" />
        </nav>
        <Account />
      </div>
      <div className="lg:absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
