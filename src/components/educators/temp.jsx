// Import React and necessary dependencies
import React from "react";
import { FaYoutube } from "react-icons/fa6";
// Dummy data for educators
import educatorsData from "./educatorsData";

const Educators = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">DSA Educators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educatorsData.map((educator) => (
          <div key={educator.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={educator.image}
              alt={educator.name}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold mb-2">{educator.name}</h2>
            <p className="text-gray-600 mb-4">{educator.description}</p>
            <div className="flex space-x-4 text-black">
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
                <FaYoutube />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educators;
