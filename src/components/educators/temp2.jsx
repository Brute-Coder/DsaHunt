// Import React and necessary dependencies
import React from "react";
import educatorsData from "./educatorsData";

// Dummy data for educators
const EducatorsPage = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">DSA Educators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educatorsData.map((educator) => (
          <div
            key={educator.id}
            className="flex items-center bg-white p-4 rounded-md shadow-md mb-4"
          >
            <img
              src={educator.image}
              alt={educator.name}
              className="w-16 h-16 object-cover rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold mb-2">{educator.name}</h2>
              <p className="text-gray-600 mb-4">{educator.description}</p>
              <div className="flex space-x-4">
                <a
                  href={educator.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter text-blue-500 hover:text-blue-700 cursor-pointer"></i>
                </a>
                <a
                  href={educator.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in text-blue-500 hover:text-blue-700 cursor-pointer"></i>
                </a>
                <a
                  href={educator.socialMedia.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-gray-600 hover:text-gray-800 cursor-pointer"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducatorsPage;
