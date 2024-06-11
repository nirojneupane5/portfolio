"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
type TDetailsProps = {
  degree: string;
  university?: string;
  name: string;
  address: string;
  program?: string;
  gpa?: string;
  enroll?: string;
};
const Details = ({
  degree,
  university,
  name,
  address,
  gpa,
  program,
  enroll,
}: TDetailsProps) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 flex flex-col  justify-between">
      <div>
        <h2 className="text-2xl font-bold capitalize">{degree}</h2>
        <p className="text-xl capitalize font-semibold">
          {university && university}
        </p>
        <p className="text-lg capitalize font-medium">{name}</p>
        <p className="text-lg capitalize font-medium">{program && program}</p>
        <p className="text-lg font-medium ">{gpa && <div>GPA:{gpa}</div>}</p>
        <p>{address}</p>
        <p className="font-light">{enroll && enroll}</p>
      </div>
    </li>
  );
};

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
          <Details
            degree="School Leaving Certificate"
            name="Rainbow English Secondary School"
            address="Suryabinayak Bhaktapur"
            gpa="3.7"
          />
          <Details
            degree="+2"
            name="V.S. Niketan"
            address="Min Bhawan, Kathmandu"
            gpa="3.7"
          />
          <Details
            degree="Bachelor"
            university="Tribhuvan University"
            name="Nepal Commerce Campus"
            program="Bachelor in Information Management"
            address="Min Bhawan, Kathmandu"
            enroll="Currently Enrolled"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
