"use client";
import { motion } from "framer-motion";

type TSkillProps = {
  name: string;
  x: string;
  y: string;
};
export const Skill = ({ name, x, y }: TSkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center bg-black text-white px-6 py-3 cursor-pointer rounded-full font-bold absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
