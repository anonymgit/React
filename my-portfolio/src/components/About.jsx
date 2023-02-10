import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Welcome ! My name is Aryan raj, and I am a computer science student with a passion for technology and problem-solving. With [0-1] years of experience in the field, I have honed my skills in Front End/Backend both React/Angular and Node,php,java and programming languages like c/c++,java,js,python etc., and I am confident in my ability to create innovative solutions for complex challenges.
        </p>

        <br />

        <p className="text-xl">
        Throughout my academic and personal projects, I have developed a strong understanding of software development principles and have gained experience in multiple programming languages, I am a fast learner and am always eager to expand my knowledge and skills.
        here , you'll find a showcase of my most recent projects below.I believe that great software is a combination of beautiful design and efficient functionality, and I am dedicated to creating products that deliver both.
        </p>
      </div>
    </div>
  );
};

export default About;
