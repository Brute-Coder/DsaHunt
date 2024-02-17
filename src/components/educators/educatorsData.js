import {
  loveBabbar,
  striver,
  adityaVarma,
  mike,
  pepcoding,
} from "../../assets/educatorsImg";

const educatorsData = [
  {
    id: 1,
    name: "Raj Vikramaditya",
    socialMedia: {
      youtube: "https://www.youtube.com/@takeUforward",
      linkedin: "https://www.linkedin.com/in/rajstriver/",
      website: "https://takeuforward.org/",
    },
    image: striver,
    description:
      "Widely famous for intuitive problem-solving and language-independent explanations.",
  },
  {
    id: 2,
    name: "Love Babbar",
    socialMedia: {
      youtube: "https://www.youtube.com/@LoveBabbar",
      linkedin: "https://www.linkedin.com/in/love-babbar-38ab2887/",
      github: "https://github.com/loveBabbar",
    },
    image: loveBabbar,
    description:
      "One of the finest DSA educators on YouTube, specifically in DSA with C++. ",
  },
  {
    id: 3,
    name: "Mazar",
    socialMedia: {
      youtube: "https://www.youtube.com/@codestorywithMIK",
      linkedin: "https://www.linkedin.com/in/mazhar-imam-khan-95a34ab3/",
      github: "https://github.com/MAZHARMIK/Interview_DS_Algo",
    },
    image: mike,
    description:
      "Explaining challenging LeetCode problems with proper intuition. He writes stories, not just code.",
  },
  {
    id: 4,
    name: "Aditya Varma",
    socialMedia: {
      youtube: "https://www.youtube.com/@TheAdityaVerma",
      linkedin: "https://www.linkedin.com/in/adityaverma1999/",
      github: "https://github.com/skjha1/Aditya-verma-youtube-playlist-code",
    },
    image: adityaVarma,
    description:
      "Learn DSA by recognizing common patterns from question to question with a desi approach.",
  },
  {
    id: 5,
    name: "Sumeet Malik",
    socialMedia: {
      youtube: "https://www.youtube.com/@Pepcoding",
      linkedin: "https://www.linkedin.com/in/sumeet-malik-ab650410/",
      website: "https://www.pepcoding.com/",
    },
    image: pepcoding,
    description:
      "One of the best educators to learn DSA in Java with in-depth dry runs.",
  },

  // Add more educators as needed
];

export default educatorsData;
