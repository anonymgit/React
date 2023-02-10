import React from 'react'
import busreservation from "../assets/portfolio/busreservation.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import notepad from "../assets/portfolio/notepad.png";
import DSA from "../assets/portfolio/dsa.png";
import nodeWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
    const portfolios = [
        {
          id: 1,
          src: busreservation,
          demo:"not available",
          sourceCode:"https://github.com/anonymgit/React/tree/main/reacthookdemo/src/projectGithubData",
        },
        {
          id: 2,
          src: notepad,
          demo:"not available",
          sourceCode:"https://github.com/anonymgit/simple-Notepad",
        },
        {
          id: 3,
          src: navbar,
          demo:"not available",
          sourceCode:"https://github.com/anonymgit/React/tree/main/reacthookdemo/src/projectGithubData",
        },
        {
          id: 4,
          src: DSA,
          demo:"not available",
          sourceCode:"https://github.com/anonymgit/Data-structures-and-Algorithms",
        },
        {
          id: 5,
          src: installNode,
          demo:"not available",
          sourceCode:"https://github.com/anonymgit/React/tree/main/reacthookdemo/src/projectGithubData",
        },
        {
          id: 6,
          src: nodeWeather,
          demo:"https://github.com/anonymgit/weatherApp",
          sourceCode:"https://github.com/anonymgit/weatherApp",
        },
      ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,sourceCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={sourceCode} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={sourceCode} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Portfolio