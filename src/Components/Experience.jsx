import React, { useState } from "react";
import Navbar from "./Navbar";

const experiences = [
  {
    company: "Vector Skill Academy, Indore",
    role: "Training",
    duration: "June 2024 – November 2024",
    tasks: [
      "Designed and developed responsive web pages and interactive SPAs using HTML, CSS, JavaScript, and React.js, ensuring seamless cross-device compatibility and efficient state management with Redux, Hooks, and Context API.",
      "Implemented dynamic content rendering, asynchronous data fetching with AJAX, and optimized frontend performance by leveraging advanced ES6+ features.",
      "Adhered to SDLC principles to deliver well-structured solutions and collaborated with cross-functional teams to resolve complex data and system performance issues effectively.",
    ],
    certificateLink: "/VSA.pdf",
  },
  {
    company: "Exposys Data Lab, Bengaluru",
    role: "Web Developer Trainee",
    duration: "March 2023 – May 2023",
    tasks: [
      "Developed reusable React.js components, optimized state management, and implemented advanced ES6+ features like destructuring, arrow functions, and promises for efficient and clean code.",
      "Built and integrated RESTful APIs to ensure seamless communication between frontend and backend systems, enhancing application performance.",
      "Collaborated effectively on team projects, utilizing Git for version control and managing contributions to maintain a streamlined development workflow.",
    ],
    certificateLink: "/ExposysDataLabs.pdf",
  },
];

const Experience = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (certificateLink) => {
    setModalData(certificateLink);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-100">
      <Navbar />
      <div className="flex flex-1 flex-col items-start px-6 py-16">
        <h2 className="w-full text-3xl font-bold mb-8 text-blue-600">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-5 bg-slate-200 shadow-lg rounded-lg border hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.company}
              </h3>
              <p className="text-sm text-gray-600 italic mb-4">
                {exp.role} – {exp.duration}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <button
                onClick={() => openModal(exp.certificateLink)}
                className="mt-6 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
              >
                View Certificate
              </button>
            </div>
          ))}
        </div>

         
        {modalData && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-3/4 lg:w-1/2 relative">
               
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-3xl font-semibold"
              >
                &times;
              </button>
              <iframe
                src={modalData}
                className="w-full h-96"
                title="Certificate"

              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
