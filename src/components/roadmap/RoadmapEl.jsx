import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
function RoadmapEl({
  children,
  heading,
  paragraph,
  flag = false,
  url,
  buttonText = "Learn More",
  buttonStyle = "",
}) {
  return (
    <>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(34, 197, 94)", color: "#fff" }}
      >
        <h3 className=" text-center font-bold text-xl text-gray-800">
          {heading}
        </h3>
        <p className=" text-gray-700">{paragraph}</p>
        {flag && (
          <a href={url} target="_blank">
            <button
              className={` bg-green-500 p-2 mt-3 rounded-md font-semibold transition-transform transform hover:scale-105
              hover:bg-green-600 ${buttonStyle}`}
            >
              {buttonText}
            </button>
          </a>
        )}
        {children}
      </VerticalTimelineElement>
    </>
  );
}

export default RoadmapEl;
