import React from "react";
import { NavLink } from "react-router-dom";
import { hero03 } from "../../assets/mainImg";
import Herotext from "./Herotext";
function Home() {
  return (
    <>
      <main className="">
        <section className="py-5">
          <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-10 md:flex-row">
            <div className="mb-14 lg:mb-0 lg:w-1/2">
              <h1
                className=" max-w-xl text-[2.9rem] leading-none text-white font-extrabold font-sans text-center 
              lg:text-left lg:text-5xl lg:leading-tight mb-5 lg:pr-2"
              >
                <Herotext />
              </h1>
              <p className=" max-w-xl text-center text-white lg:text-left lg:max-w-md">
                An <span className=" text-green-400">open-source</span> platform
                where valuable DSA learning resources are collaboratively
                compiled{" "}
                <span className=" text-green-400">
                  by the community for the community.
                </span>
              </p>
              <div className=" lg:justify-start flex justify-center mt-7 ">
                <NavLink to="/roadmap">
                  <button
                    type="button"
                    className="bg-green-500 text-white px-5 py-2 rounded-sm hover:bg-green-700 cursor-pointer hover:scale-105"
                  >
                    Roadmap
                  </button>
                </NavLink>
              </div>
            </div>
            <div className=" lg:w-1/2  relative">
              <img
                src={hero03}
                className="shadow-lg transform transition-transform duration-300 hover:scale-105 scale-100 "
                alt="Hero Image"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
