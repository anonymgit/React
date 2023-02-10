import React from "react";
import { Progress } from "@material-tailwind/react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Angular from "../assets/Angular.png";
import Java from "../assets/java.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import cpp from "../assets/cpp.png";
import php from "../assets/php.png";
import linux from "../assets/linux.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      progressPercentage:95,
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      progressPercentage:75,
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      progressPercentage:85,
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      progressPercentage:75,
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      progressPercentage:50,
    },
    {
      id: 6,
      src: Angular,
      title: "Angular",
      style: "shadow-white",
      progressPercentage:80,
    },
    {
      id: 7,
      src: Java,
      title: "Java",
      style: "shadow-pink-400",
      progressPercentage:90,
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
      progressPercentage:88,
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-gray-400",
      progressPercentage:90,
    },
    {
      id: 10,
      src: php,
      title: "Php",
      style: "shadow-gray-400",
      progressPercentage:90,
    },
    {
      id: 10,
      src: cpp,
      title: "C++",
      style: "shadow-gray-400",
      progressPercentage:95,
    },
    {
      id: 11,
      src: linux,
      title: "linux",
      style: "shadow-gray-400",
      progressPercentage:70,
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full  "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p- inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style,progressPercentage }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <Progress value={progressPercentage} label="Progress..." color="red" className="justify-center"/>
              <div className='h-1 w-full bg-gray-300'>
              <div
                  style={{ width: `${progressPercentage}%`}}
                  className={`h-full ${
                    progressPercentage < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
              </div>
        </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
