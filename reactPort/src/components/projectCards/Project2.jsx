import React, { useEffect } from "react";
import { trades } from "./covers";
import "../Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Project2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section id="project2" className="glass__background">
      <div>
        <a
          href="https://collink5.sg-host.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos={"zoom-out-up"}>
            <img src={trades}></img>
            {/* <div class="img__overlay"></div> */}
          </div>
        </a>
        <div data-aos={"fade-up"}>
          <h1 className="text-white text-[30px] font-bold sm:font-semibold pt-4">
            NBA Trade Machine
          </h1>
          <p className="sm:text-[16px] text-[18px] text-white font-small pb-6">
            NBA trade simulator with data webscrapped using Beautiful Soup.
            <br />
            <li className="list-none pt-4">
              <a
                className="mr-4 text-white font-small sm:font-medium border-b-2 sm:hover:border-white border-white sm:border-gray-600 transition duration-300 ease-in-out"
                href="https://github.com/CollinK23/NBATradeMachine"
                target="_blank"
                rel="noopener noreferrer"
              >
                View On Github{" "}
                <i className="sm:text-[16px] text-[18px] fa-solid fa-arrow-right transform -rotate-45"></i>
              </a>
              <a
                className="mr-4 text-white font-small sm:font-medium border-b-2 sm:hover:border-white border-white sm:border-gray-600 transition duration-300 ease-in-out"
                href="https://collink5.sg-host.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Server{" "}
                <i className="sm:text-[16px] text-[18px] fa-solid fa-arrow-right transform -rotate-45"></i>
              </a>
            </li>
            <li className="project__links pt-4 text-[16px]">
              <a>JavaScript</a>
              <a>Python</a>
              <a>HTML</a>
              <a>CSS</a>
            </li>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project2;
