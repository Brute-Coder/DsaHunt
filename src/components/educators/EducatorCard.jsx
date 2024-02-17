import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { FaYoutube, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";

const EducatorCard = ({ educator, onMouseEnter, onMouseLeave }) => {
  const [isHovered, setHovered] = useState(false);

  const cardSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: {
      opacity: isHovered ? 1 : 0.95,
      transform: isHovered ? "scale(1.05)" : "scale(1)",
    },
    config: { ...config.wobbly, duration: 500 },
  });

  return (
    <animated.div
      style={{
        ...cardSpring,
      }}
      onMouseEnter={() => {
        setHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => {
        setHovered(false);
        onMouseLeave();
      }}
      className="bg-white p-4 rounded-md shadow-md mb-4 cursor-pointer"
    >
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <img
            src={educator.image}
            alt={educator.name}
            className="object-cover mb-4 rounded-full w-100"
          />
        </div>
        <div className="flex w-1/2 space-y-4 text-black flex-col items-center">
          <a
            className="mt-2 hover:scale-110"
            href={educator.socialMedia.youtube}
            target="_blank"
          >
            <FaYoutube size={45} color="red" />
          </a>
          <a
            href={educator.socialMedia.linkedin}
            target="_blank"
            className=" hover:scale-110"
          >
            <FaLinkedin size={45} color="#0A66C2" />
          </a>
          {educator.socialMedia.github ? (
            <a
              href={educator.socialMedia.github}
              target="_blank"
              className=" hover:scale-110"
            >
              <FaSquareGithub size={45} />
            </a>
          ) : (
            <a
              href={educator.socialMedia.website}
              target="_blank"
              className=" hover:scale-110"
            >
              <IoIosGlobe size={45} />
            </a>
          )}
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2 text-black">{educator.name}</h2>
      <p className="text-gray-600 mb-4">{educator.description}</p>
    </animated.div>
  );
};

export default EducatorCard;
