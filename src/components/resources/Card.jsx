import React, { useState, useEffect } from "react";
function Card({
  imageUrl = "#",
  imageAlt = "alt Text For the Image",
  name = "default",
  description = "default text about the resources",
  buttonUrl = "#",
  buttonText = "Visit Site",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`resource-Card transition-transform transform ${
        visible
          ? "scale-100 transition-transform duration-700 ease-out"
          : "scale-0"
      } hover:scale-105`}
    >
      <div className="relative h-[300px] w-[250px] rounded-md m-3">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{name}</h1>
          <p className="mt-2 text-sm text-gray-300">{description}</p>
          <a href={buttonUrl} target="_blank">
            <button
              className="mt-2 inline-flex cursor-pointer items-center text-sm 
        font-semibold text-white bg-green-500 p-2 hover:scale-105"
            >
              {buttonText} &rarr;
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
