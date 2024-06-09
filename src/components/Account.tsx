"use client";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import { motion } from "framer-motion";
const Account = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap">
      <motion.a
        href="https://twitter.com"
        target={"_blank"}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <AiFillGithub className="text-[40px] mr-3" />
      </motion.a>
      <motion.a
        href="https://twitter.com"
        target={"_blank"}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <AiFillLinkedin className="text-[40px] mx-3" />
      </motion.a>
      <motion.a
        href="https://twitter.com"
        target={"_blank"}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <AiFillTwitterCircle className="text-[40px] mx-3" />
      </motion.a>
      <motion.a
        href="https://twitter.com"
        target={"_blank"}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <BsInstagram className="text-[40px] mx-3" />
      </motion.a>
      <motion.a
        href="https://twitter.com"
        target={"_blank"}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <AiFillFacebook className="text-[40px] ml-3" />
      </motion.a>
    </nav>
  );
};

export default Account;
