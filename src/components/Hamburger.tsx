"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {};
  return (
    <div>
      <button
        className="flex flex-col justify-start items-start lg:hidden"
        onClick={handleClick}
      >
        <GiHamburgerMenu className="text-2xl" />
      </button>
    </div>
  );
};

export default Hamburger;
