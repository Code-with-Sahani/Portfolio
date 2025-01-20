import React from 'react';
import Navbar from './Navbar';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  const skills = [
    { title: 'HTML', icon: <FaHtml5 className="text-6xl text-white" /> },
    { title: 'CSS', icon: <FaCss3Alt className="text-6xl text-white" /> },
    { title: 'Tailwind CSS', icon: <RiTailwindCssFill className="text-6xl text-white" /> },
    { title: 'JavaScript', icon: <IoLogoJavascript className="text-6xl text-white" /> },
    { title: 'React', icon: <FaReact className="text-6xl text-white" /> },
    { title: 'Redux', icon: <SiRedux className="text-6xl text-white" /> },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col justify-start items-center gap-8 px-5 py-20">
        <h1 className="w-full text-3xl font-bold text-gray-800 "style={{ textShadow: '2px 2px 6px white' }}>My Skills
          <span className="text-sm mt-2" style={{ textShadow: '1px 1px 4px white' }}>
          &nbsp; Technologies I am proficient in:
          </span>
        </h1>

        <div className="flex flex-wrap justify-start gap-8 w-4/5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="hover:scale-105 transform transition duration-300 bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-xl shadow-xl shadow-black/50 w-36 h-28 flex flex-col justify-between items-center text-center"
            >
              {skill.icon}
              <h2 className="text-white text-lg font-semibold mt-4">{skill.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
