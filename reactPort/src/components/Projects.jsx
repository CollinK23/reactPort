import React, { useEffect } from "react";
import { Project1, Project2, Project3 } from "./projectCards";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../style";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <section
      id="projects"
      className={`${styles.paddingY} ${styles.marginY} relative`}
    >
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[52%] top-[15%] rounded-full overflow-hidden pink__gradient" /> */}
      <div
        className="flex justify-center font-medium text-left text-white text-[36px] ss:text-[48px]"
        data-aos={"fade-in"}
      >
        Projects
      </div>
      <div className="flex justify-center" data-aos={"fade-in"}>
        <a
          href="https://github.com/CollinK23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline justify-center text-center button-gradient text-white p-2 my-4 sm:h-12 w-64 button-stroke">
            View My Github
          </button>
        </a>
      </div>
      <div className="project__grid">
        <Project1 data-aos={"zoom-out-right"} />
        <Project2 data-aos={"zoom-out-up"} />
        <Project3 data-aos={"zoom-out-left"} />
      </div>
      <div
        data-aos={"fade-in"}
        className="hidden sm:inline absolute z-[0] w-[60%] h-[60%] -right-[52%] top-[15%] rounded-full overflow-hidden pink__gradient "
      />
      <div
        data-aos={"fade-in"}
        className="sm:hidden  absolute z-[0] w-[60%] h-[60%] -right-[52%] top-[15%] rounded-full overflow-hidden white__gradient "
      />
      {/* <div>
        <div className="absolute display-relative z-[0] w-[30%] h-[35%] pink__gradient" />
      </div> */}
    </section>
  );
};

export default Projects;
