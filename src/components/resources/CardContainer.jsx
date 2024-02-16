import React from "react";

function CardContainer({
  children,
  containerTitle = "Default title of the container",
}) {
  return (
    <div className="mb-3">
      <div className="text-2xl m-3 font-semibold">{containerTitle}</div>
      <hr className="my-2" />
      <div className=" flex flex-wrap ">{children}</div>
    </div>
  );
}

export default CardContainer;
