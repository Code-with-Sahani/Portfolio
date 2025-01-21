import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-600 text-white z-50 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-4">
                <div className="text-lg text-gray-300 font-semibold">
                    <Link to="/">My Portfolio</Link>
                </div>
                <div className="hidden md:flex gap-10">
                    <Link to="/" className="text-lg text-gray-300 hover:text-white transition-all duration-300">
                        Home
                    </Link>
                    <Link to="/experience" className="text-lg text-gray-300 hover:text-white transition-all duration-300">
                        Experience
                    </Link>
                    <Link to="/skills" className="text-lg text-gray-300 hover:text-white transition-all duration-300">
                        Skills
                    </Link>
                    <Link to="/projects" className="text-lg text-gray-300 hover:text-white transition-all duration-300">
                        Projects
                    </Link>
                    <Link to="/certification" className="text-lg text-gray-300 hover:text-white transition-all duration-300">
                        Certification
                    </Link>
                    <Link to="/contact" className="text-lg text-gray-300 hover:text-white transition-all duration-300">
                        Contact
                    </Link>
                </div>
                {/* Hamburger Menu for Mobile */}
                <button className="md:hidden text-white" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-slate-600 p-4`}>
                <Link to="/" className="block text-lg text-gray-300 hover:text-white py-2">
                    Home
                </Link>
                <Link to="/experience" className="block text-lg text-gray-300 hover:text-white py-2">
                    Experience
                </Link>
                <Link to="/skills" className="block text-lg text-gray-300 hover:text-white py-2">
                    Skills
                </Link>
                <Link to="/projects" className="block text-lg text-gray-300 hover:text-white py-2">
                    Projects
                </Link>
                <Link to="/certification" className="block text-lg text-gray-300 hover:text-white py-2">
                    Certification
                </Link>
                <Link to="/contact" className="block text-lg text-gray-300 hover:text-white py-2">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
