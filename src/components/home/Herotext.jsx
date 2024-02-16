import React from "react";
import { TypeAnimation as Animate } from "react-type-animation";

function Herotext() {
  return (
    <Animate
      sequence={[
        "Build Logic, Fast Pace Your DSA Pathway",
        1000,
        "Build Logic, Fast Pace Your TLE Error",
        1000,
        "Build Logic, Fast Pace Your Brute Force Sol",
        1000,
      ]}
      speed={25}
      //style={{ fontSize: "2em" }}
      repeat={Infinity}
    />
  );
}

export default Herotext;
