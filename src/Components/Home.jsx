import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-gray-100 pt-20">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-1 flex-col md:flex-row items-center justify-center gap-16 px-6 lg:px-20 py-10">
        
        {/* Profile Image */}
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500">
            <img
              src="/Images/profile_img.png"
              alt="Rahul Sahani"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium">
            React & Next.js Developer
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl text-center md:text-left flex flex-col items-center md:items-start">

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-5">
            🚀 Open To Frontend / React / Next.js Opportunities
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-600">
              Rahul Sahani
            </span>
          </h1>

          <h2 className="mt-4 text-xl md:text-3xl font-semibold text-slate-700">
            Frontend Developer | React.js | Next.js | TypeScript
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Frontend Developer specializing in{" "}
            <span className="font-semibold text-blue-600">React.js</span>,{" "}
            <span className="font-semibold text-sky-600">Next.js</span>,{" "}
            <span className="font-semibold text-indigo-600">TypeScript</span>,
            and modern web technologies.
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Experienced in building{" "}
            <span className="font-semibold text-purple-600">
              AI-powered SaaS applications
            </span>
            , scalable web platforms, secure authentication systems, and
            API-driven solutions using React, Node.js, PostgreSQL, Prisma,
            Clerk, Stripe, and OpenAI APIs.
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Passionate about creating high-performance, responsive, and
            user-centric digital experiences with clean architecture,
            modern UI/UX principles, and scalable development practices.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Prisma",
              "OpenAI API",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white shadow-md rounded-full text-sm font-medium text-slate-700 hover:scale-105 transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="/Resume.pdf"
              download="Rahul_Sahani_Resume.pdf"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/Code-with-Sahani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-slate-700 text-slate-700 font-semibold rounded-full hover:bg-slate-700 hover:text-white transition duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Project Highlights */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-3">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              AI SaaS Platform
            </span>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              OpenAI Integration
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Clerk Authentication
            </span>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
              Stripe Payments
            </span>

            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
              OCR System
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-4 text-center text-sm">
        © 2026 Rahul Sahani | Frontend Developer | React.js • Next.js • TypeScript
      </footer>
    </div>
  );
};

export default Home;
