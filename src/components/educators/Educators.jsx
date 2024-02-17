import React, { useState, useEffect } from "react";
import educatorsData from "./educatorsData";
import EducatorCard from "./EducatorCard";

const Educators = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Add state to control the pop-in effect
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  return (
    <div
      className={`bg-gradient-to-tl from-slate-800 to-slate-700 ${
        hasLoaded ? "animate-pop-in" : ""
      }`}
    >
      <div className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
          <span className=" text-green-400">Educators</span> To Follow Along
        </h1>
        <hr className="my-2 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educatorsData.map((educator, index) => (
            <EducatorCard
              key={educator.id}
              educator={educator}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educators;
