import React, { useEffect } from "react";
import { wordle } from "./covers";
import "../Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Project3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section id="project3" className="glass__background">
      <div>
        <a
          href="https://github.com/CollinK23/wordle-clone"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos={"zoom-out-left"}>
            <img src={wordle}></img>
            {/* <div class="img__overlay"></div> */}
          </div>
        </a>
        <div data-aos={"fade-up"}>
          <h1 className="text-white text-[30px] font-bold sm:font-semibold pt-4">
            Wordle Clone
          </h1>
          <p className="sm:text-[16px] text-[18px] text-white font-small pb-6">
            Unlimited Wordle made with python using pygame module.
            <br />
            <li className="list-none pt-4">
              <a
                className="mr-4 text-white font-small sm:font-medium border-b-2 sm:hover:border-white border-white sm:border-gray-600 transition duration-300 ease-in-out"
                href="https://github.com/CollinK23/wordle-clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                View On Github{" "}
                <i className="sm:text-[16px] text-[18px] fa-solid fa-arrow-right transform -rotate-45"></i>
              </a>
            </li>
            <li className="project__links pt-4 text-[16px]">
              <a>Python</a>
            </li>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project3;
