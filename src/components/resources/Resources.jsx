import React from "react";
import Card from "./Card";
import {
  striver,
  babbar,
  neetcode,
  leetcode,
  geeksforgeeks,
  codingninja,
  hackerrank,
  dp,
  graph,
  recursion,
} from "../../assets/resourcesImg";
import CardContainer from "./CardContainer";

function Resources() {
  return (
    <div className="bg-gradient-to-tl from-slate-800 to-slate-700">
      <div className="container mx-auto mt-8 ">
        <CardContainer containerTitle="<span style='color: #4ade80 '> SDE Sheets </span>To Follow">
          <Card
            imageUrl={striver}
            imageAlt="image of raj vikramaditya"
            name="Striver's SDE Sheet"
            description="One of the famous SDE sheet in DSA Commuinity."
            buttonUrl="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
          />
          <Card
            imageUrl={babbar}
            imageAlt="image of Love Babbar"
            name="Babbars's SDE Sheet"
            description="Repository of more than 450+ Handpicked Questions."
            buttonUrl="https://450dsa.com/"
          />
          <Card
            imageUrl={neetcode}
            imageAlt="image of neetcode founder"
            name="Neetcode 150"
            description="Collection of 150 frequently asked interview questions."
            buttonUrl="https://neetcode.io/practice"
          />
        </CardContainer>
        <CardContainer containerTitle="<span style='color: #4ade80 '> Platforms </span>For Practice">
          <Card
            imageUrl={leetcode}
            imageAlt="leetcode logo"
            name="LeetCode"
            description="One of the best modern coding platform to boost skills."
            buttonUrl="https://leetcode.com/problemset/"
            buttonText="Practice"
          />
          <Card
            imageUrl={geeksforgeeks}
            imageAlt="geeks for geeks logo"
            name="GeeksForGeeks"
            description="Practice from vast question set and explore quality articals."
            buttonUrl="https://www.geeksforgeeks.org/"
            buttonText="Practice"
          />
          <Card
            imageUrl={codingninja}
            imageAlt=" coding ninja logo"
            name="Code Studio"
            description="Compete with coders from your university "
            buttonUrl="https://www.codingninjas.com/studio/home"
            buttonText="Practice"
          />
          <Card
            imageUrl={hackerrank}
            imageAlt=" hacker rank logo"
            name="HackerRank"
            description="Practice for badge and stars, upgrade and get recognition."
            buttonUrl="https://www.hackerrank.com/dashboard"
            buttonText="Practice"
          />
        </CardContainer>
        <CardContainer containerTitle="<span style='color: #4ade80 '> Playlists </span>To Binge">
          <Card
            imageUrl={recursion}
            imageAlt="ai generated cp art"
            name="Recursion"
            description="Get good grasp on Recursion using the curated playlist."
            buttonUrl="https://www.youtube.com/playlist?list=PLDzeHZWIZsTqBmRGnsCOGNDG5FY0G04Td"
            buttonText="Watch Now"
          />
          <Card
            imageUrl={dp}
            imageAlt="ai generated art"
            name="Dynamic Programming"
            description="Most recomended DP playlist on youtube."
            buttonUrl="https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go"
            buttonText="Watch Now"
          />
          <Card
            imageUrl={graph}
            imageAlt="ai generated graph art"
            name="Graph Series"
            description="Get your hands on Graph with Ease and build concepts."
            buttonUrl="https://www.youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw"
            buttonText="Watch Now"
          />
        </CardContainer>
      </div>
    </div>
  );
}

export default Resources;
