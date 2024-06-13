import { Skill } from "./Skill";
const Skills = () => {
  return (
    <div>
      <h1 className="mt-10 text-3xl lg:text-5xl font-bold text-center mb-4">
        Skills
      </h1>

      <div className="hidden w-full h-screen relative lg:flex items-center justify-center rounded-full bg-circularlight">
        <div className="flex items-center justify-center bg-black text-white p-8 cursor-pointer rounded-full hover:scale-105 duration-300 font-bold">
          WEB
        </div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="18vw" y="2vw" />
        <Skill name="ReactJs" x="0vw" y="11vw" />
        <Skill name="NextJs" x="-20vw" y="-15vw" />
        <Skill name="Node & Express" x="-20vw" y="-5vw" />
        <Skill name="MongoDB" x="-10vw" y="-15vw" />
        <Skill name="Tailwind" x="-13vw" y="12vw" />
        <Skill name="Typescript" x="13vw" y="12vw" />
        <Skill name="React Hook Form" x="25vw" y="-8vw" />
        <Skill name="Zod" x="12vw" y="-10vw" />
        <Skill name="Zustand" x="-0vw" y="-19vw" />
        <Skill name="Tanstack Query & Table" x="30vw" y="0vw" />
      </div>

      <div className="lg:hidden text-xl font-bold text-black text-justify space-y-2">
        <h1>HTML</h1>
        <h1>CSS</h1>
        <h1>Javascript</h1>
        <h1>React.js</h1>
        <h1>Node.js</h1>
        <h1>Express.js</h1>
        <h1>MongoDB</h1>
        <h1>MySql</h1>
        <h1>Typescript</h1>
        <h1>Tailwind</h1>
        <h1>React Hook Form</h1>
        <h1>Zod</h1>
        <h1>Tanstack Query</h1>
        <h1>Tanstack Table</h1>
        <h1>Zustand</h1>
      </div>
    </div>
  );
};

export default Skills;
