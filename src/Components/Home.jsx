import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className="w-full h-screen bg-cover bg-center flex flex-col bg-slate-100 pt-20">
            <Navbar />

            <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-16 px-6">

                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg hover:scale-105 transition-transform duration-500">
                    <img
                        src="/Images/profile_img.png"
                        alt="Profile"
                        className="w-full h-full"
                    />
                </div>

                <div className="text-center md:text-left flex flex-col items-center md:items-start gap-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-emerald-600" >
                        Frontend Developer
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700  max-w-2xl">
                        Crafting seamless digital experiences with modern technologies like{' '}
                        <span className="text-blue-600 font-medium">React</span>,{' '}
                        <span className="text-teal-600 font-medium">Redux</span>, and{' '}
                        <span className="text-purple-600 font-medium">Tailwind CSS</span>. Specializing in building
                        responsive, dynamic, and visually stunning user interfaces.
                    </p>
                    <a
                        href="#portfolio"
                        className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-500"
                    >
                        View My Work
                    </a>
                </div>
            </div>

            <div className="text-center py-4 bg-slate-600 text-white text-sm">
                © 2025  Rahul Sahani All rights reserved.
            </div>
        </div>
    );
};

export default Home;
