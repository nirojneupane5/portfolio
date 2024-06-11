"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-10">
      <h2 className="text-5xl font-bold text-black text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-8 top-0 w-[4px] h-full bg-black origin-top duration-150"
        />
        <ul className="w-full flex flex-col items-start justify-between">
          <li className="my-8 first:mt-0 last:mb-0 flex flex-col  justify-between">
            <div>
              <h2 className="text-2xl font-bold capitalize">
                School Leaving Certificate
              </h2>
              <p className="text-lg capitalize font-medium">
                Rainbow English Secondary School
              </p>
              <p className="text-lg font-medium ">GPA: 3.7</p>
              <p>Suryabinayak Bhaktapur</p>
            </div>
          </li>
          <li className="my-8 first:mt-0 last:mb-0 flex flex-col  justify-between">
            <div>
              <h2 className="text-2xl font-bold capitalize">+2</h2>
              <p className="text-lg capitalize font-medium">
                V.S. Niketan Secondary School
              </p>
              <p className="text-lg font-medium ">GPA: 3.2</p>
              <p>Min Bhawan, Kathmandu</p>
            </div>
          </li>
          <li className="my-8 first:mt-0 last:mb-0 flex flex-col  justify-between">
            <div>
              <h2 className="text-2xl font-bold capitalize">+2</h2>
              <p className="text-xl capitalize font-semibold">
                Tribhuvan University
              </p>
              <p className="text-lg capitalize font-medium">
                Nepal Commerce Campus
              </p>
              <p className="text-lg capitalize font-medium">
                Bachelor in Information Management
              </p>
              <p>Min Bhawan, Kathmandu</p>
              <p className="font-light">Currently Enrolled</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
