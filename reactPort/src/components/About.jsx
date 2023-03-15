import React, { useEffect } from "react";
import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section
      id="about"
      className={`${styles.paddingY} ${styles.marginY} relative`}
    >
      <div
        className="flex justify-center font-medium text-left text-white mb-[50px] text-[36px] ss:text-[48px]"
        data-aos={"fade-in"}
      >
        About
      </div>
      <div className="sm:flex justify-center px-[50px] mx-auto w-[100%] max-w-[1100px]">
        <div>
          <div
            data-aos={"fade-right"}
            className="text-[20px] text-white mb-[50px] sm:mb-0 sm:pr-[200px] text-left font-small leading-[40px]"
          >
            I am a student at Oregon State University currently pursuing a
            degree in Computer Science with an interest in applying software
            development skills to create reliable software. I work with C/C++,
            Python, React, and JavaScript.
          </div>
        </div>
        <div
          data-aos={"fade-left"}
          className="hidden sm:flex sm:justify-center sm:justify-right"
        >
          <ul className="list-none text-[20px] text-white text-center sm:text-right font-small leading-[40px] ">
            <li>
              <a
                href="https://www.linkedin.com/in/collin-kimball-b004a622b"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 cursor-pointer hover:border-white border-gray-600 transition duration-300 ease-in-out"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/CollinK23"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b-2 cursor-pointer hover:border-white border-gray-600 transition duration-300 ease-in-out"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@collinkimball.com"
                className="border-b-2 cursor-pointer hover:border-white border-gray-600 transition duration-300 ease-in-out"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
