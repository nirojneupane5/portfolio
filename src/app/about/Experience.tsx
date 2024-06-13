import React from "react";

const Experience = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl lg:text-5xl font-bold text-black text-center mb-2">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <div className="my-10">
          <h3 className="text-2xl font-semibold capitalize">
            Company: Edit Enterprise
          </h3>
          <p className="text-xl font-normal">Postion: Frontend Developer</p>
          <p className="text-lg font-light">Time: 2023/12/03 - 2024/05/03</p>
          <h4 className="text-xl font-bold text-black">Project</h4>
          <p className="text-lg font-normal text-black">
            News portal website with Nextjs
          </p>
          <p className="text-lg font-normal text-black">
            News portal dashboard with Reactjs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
