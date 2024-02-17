import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import RoadmapEl from "./RoadmapEl";

import "react-vertical-timeline-component/style.min.css";

function Roadmap() {
  return (
    <div className="bg-gradient-to-tl from-slate-800 to-slate-700">
      <h1 className=" text-5xl text-center py-3 font-bold">
        {" "}
        <span className=" text-green-400">Start</span> Here
      </h1>
      <VerticalTimeline>
        <RoadmapEl
          heading="Language Selection"
          paragraph="Choose a programming language that aligns with your career trajectory, such as Java, C++, or Python."
          flag={false}
          url="https://youtu.be/abhFUSxjq0E?si=g2-GPqC_0CKsLNWI&t=46"
          buttonText="Pick"
          buttonStyle="px-4"
        ></RoadmapEl>
        <RoadmapEl
          heading="Time and Space Complexity"
          paragraph="Writing an algorithm is not enough, you should also possess deep knowledge about efficiency."
          flag={false}
          url="https://youtu.be/mV3wrLBbuuE?si=1Lmpya3sOeSskK6M"
          buttonText="Know More"
        ></RoadmapEl>
        <RoadmapEl
          heading="Basics of Data Structures"
          paragraph="Start with fundamental data structures, such as arrays, strings, linked lists, stacks, and queues."
          flag={false}
        ></RoadmapEl>
        <RoadmapEl
          heading="Basics of Algorithms"
          paragraph="Learn basic algorithms, such as sorting and searching. Understand their internal workings and logic."
        ></RoadmapEl>
        <RoadmapEl
          heading="Start Basic Questions"
          paragraph="Now that you are ready for basic questions, begin with LeetCode and GeeksforGeeks easy-level questions to boost your confidence."
        ></RoadmapEl>
        <RoadmapEl
          heading="More into Algorithms"
          paragraph="As you gain confidence by solving some questions, explore additional algorithms to enhance your thinking, such as Sliding Window, Two Pointers, and Greedy."
        ></RoadmapEl>
        <RoadmapEl
          heading="Advance Data Structures"
          paragraph="Having acquired depth in algorithms, now progress towards topics like Trees, HashMap, HashSet, and Graphs. Solidify your understanding by engaging in more and more practice questions."
        ></RoadmapEl>
        <RoadmapEl
          heading="Select A Sheet"
          paragraph="It's time to choose a problem sheet. You can opt for either Striver's or Love Babbar's SDE sheet, as both are more or less the same."
        ></RoadmapEl>
        <RoadmapEl
          heading="Participate In Contest"
          paragraph="Meeting solutions under time constraints can be challenging, making participation in contests advantageous. Consider engaging in platforms such as LeetCode, CodeChef, and CodeStudio."
        ></RoadmapEl>
        <RoadmapEl
          heading="Practice and Practice"
          paragraph="You never know what the interviewer will ask. Practicing more questions will increase the probability of being well-prepared."
        ></RoadmapEl>
      </VerticalTimeline>
    </div>
  );
}

export default Roadmap;
