import React from "react";
import { FaYoutube, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import educatorsData from "./educatorsData";

const Educators = () => {
  return (
    <div className="  bg-gradient-to-tl from-slate-800 to-slate-700">
      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Educators To Follow Along
        </h1>
        <hr className=" my-2 mb-4 " />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educatorsData.map((educator) => (
            <div
              key={educator.id}
              className="bg-white p-4 rounded-md shadow-md mb-4"
            >
              <div className=" flex flex-wrap">
                <div className="w-1/2">
                  <img
                    src={educator.image}
                    alt={educator.name}
                    className="object-cover mb-4 rounded-full w-100"
                  />
                  {console.log(educator.image)}
                </div>
                <div className="flex w-1/2 space-y-4 text-black flex-col items-center">
                  <a
                    className=" mt-2"
                    href={educator.socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={45} color="red" />
                  </a>
                  <a
                    href={educator.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={45} color="#0A66C2" />
                  </a>
                  <a
                    href={educator.socialMedia.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareGithub size={45} />
                  </a>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-black">
                {educator.name}
              </h2>
              <p className="text-gray-600 mb-4">{educator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educators;
