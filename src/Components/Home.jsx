import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col bg-gray-100 pt-20">
            <Navbar />
            <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-16 px-6">
               
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg hover:scale-105 transition-transform duration-500">
                    <img
                        src="/Images/profile_img.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-center md:text-left flex flex-col items-center md:items-start gap-6">
                    <h1
                        className="text-4xl md:text-5xl font-extrabold text-slate-700"
                        style={{ textShadow: '2px 2px 2px skyblue' }}
                    >
                        Hi, I'm Rahul Sahani
                    </h1>
                    <p className="text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed">
                    A <span className='font-semibold  text-slate-700'>Frontend Developer</span> & specialize in crafting seamless digital experiences with modern technologies like{' '}
                        <span className="text-blue-600 font-medium">React</span>,{' '}
                        <span className="text-teal-600 font-medium">Redux</span>, and{' '}
                        <span className="text-purple-600 font-medium">Tailwind CSS</span>. 
                        I specialize in building responsive, dynamic, and visually stunning user interfaces, delivering user-centric and impactful solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <a
                            href="/Resume.pdf"
                            download="Rahul_Sahani_Resume.pdf"
                            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500"
                        >
                            Download Resume
                        </a>  
                    </div>
                </div>
            </div>
            <div className="text-center py-4 bg-slate-700 text-white text-sm">
                © 2025 Rahul Sahani | All rights reserved.
            </div>
        </div>
    );
};

export default Home;
