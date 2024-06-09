import Logo from "./Logo";
import CustomLink from "./CustomLink";
import Account from "./Account";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/project" title="Project" className="mx-4" />
        <CustomLink href="/article" title="Article" className="ml-4" />
      </nav>
      <Account />
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
