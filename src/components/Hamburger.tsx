"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import CustomLink from "./CustomLink";
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        className="flex flex-col justify-start items-start lg:hidden"
        onClick={handleClick}
      >
        <GiHamburgerMenu className="text-2xl" />
      </button>
      {isOpen && (
        <div className="fixed left-32 top-56">
          <div className="flex flex-col items-center justify-center bg-amber-400 w-[200px] h-[200px] shadow-2xl rounded-3xl">
            <button
              className="text-2xl font-bold text-white absolute top-0 right-2 hover:cursor-pointer"
              onClick={handleClick}
            >
              X
            </button>
            <CustomLink href="/" title="Home" className="text-2xl font-bold" />
            <CustomLink
              href="/about"
              title="About"
              className="my-2 text-2xl font-bold"
            />
            <CustomLink
              href="/project"
              title="Project"
              className="text-2xl font-bold"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
