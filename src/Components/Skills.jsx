   import React from 'react';
import Navbar from './Navbar';
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { MdOutlineWeb } from "react-icons/md";

const Skills = () => {
  
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col justify-start items-center gap-8 px-5 py-2">

        <h1 className="w-full text-3xl font-bold text-gray-800" style={{ textShadow: '1px 1px 4px white' }}>
          Technologies & Soft Skills I possess:
        </h1>

        <div className="w-full max-w-7xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Technical Skills</h2>
          <div className="flex flex-row flex-wrap justify-start items-center gap-5">

            <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <FaHtml5 className="text-6xl text-orange-500" />
              <caption className='font-semibold'>HTML</caption>
            </div>

            <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <FaCss3Alt className="text-6xl text-blue-600" />
              <caption className='font-semibold'>CSS</caption>
            </div>

            <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <RiTailwindCssFill className="text-6xl text-blue-600" />
              <caption className='font-semibold'>TailwindCss</caption>
            </div>

            <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <IoLogoJavascript className="text-6xl text-yellow-400" />
              <caption className='font-semibold'>Javascript</caption>
            </div>

            <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <FaReact className="text-6xl text-indigo-600" />
              <caption className='font-semibold'>ReactJS</caption>
            </div>

            <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <SiRedux className="text-6xl text-purple-700" />
              <caption className='font-semibold'>Redux</caption>
            </div>

            <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <AiOutlineApi className="text-6xl text-blue-400" />
              <caption className='font-semibold'>API Integration</caption>
            </div>

            <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <MdOutlineWeb className="text-6xl text-pink-500" />
              <caption className='font-semibold'>Responsive Design</caption>
            </div>

          </div>
        </div>


        <div className="w-full max-w-7xl mt-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Soft Skills</h2>
          <div className="flex flex-row flex-wrap justify-start items-center gap-5">
             
          <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <div className="text-3xl  ">👨‍💼</div>
              <caption className='font-semibold'>Leadership</caption>
            </div>

            <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <div className="text-3xl  ">🤝</div>
              <caption className='font-semibold'>TeamWork</caption>
            </div>

            <div className='bg-slate-200 w-32 h-24 rounded-md flex flex-col justify-center items-center gap-2 py-2 shadow-md shadow-slate-400 hover:scale-105 translate transition-all duration-700'>
              <div className="text-3xl ">🧠</div>
              <caption className='font-semibold'>Decision Making</caption>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;
