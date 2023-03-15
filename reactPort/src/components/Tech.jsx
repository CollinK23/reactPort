import React, { useEffect } from "react";
import { django, git, html, js, python, mysql, react, css, clogo, cplusplus,} from "../assets"; //prettier-ignore
import "./Tech.css";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../style";

const Tech = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <section
      id="about"
      className={`${styles.paddingY} ${styles.marginY} relative`}
    >
      <div
        data-aos={"fade-in"}
        className="absolute z-[0] w-[60%] h-[60%] -left-[52%] top-[15%] rounded-full overflow-hidden pink__gradient"
      />
      <div
        className="flex justify-center font-medium text-center text-white mb-[50px] text-[36px] ss:text-[48px]"
        data-aos={"fade-in"}
      >
        Technical Skills
      </div>
      <div className="skill__grid">
        <div>
          <img
            className="pointer-events-none skill-image"
            src={clogo}
            data-aos={"fade-in"}
          />
          <h1 className="text-[20px] -mt-8 text-white text-center font-medium">
            C
          </h1>
        </div>
        <div>
          <img
            className="pointer-events-none skill-image"
            src={cplusplus}
            data-aos={"fade-in"}
          />
          <h1 className="text-[20px] -mt-8 text-white text-center font-medium">
            C++
          </h1>
        </div>
        <div>
          <img
            className="pointer-events-none skill-image"
            src={python}
            data-aos={"fade-in"}
          />
          <h1 className="text-[20px] -mt-8 text-white text-center font-medium">
            Python
          </h1>
        </div>
        <div>
          <img
            className="pointer-events-none skill-image"
            src={js}
            data-aos={"fade-in"}
          />
          <h1 className="text-[20px] -mt-8 text-white text-center font-medium">
            JavaScript
          </h1>
        </div>
        <div>
          <img
            className="pointer-events-none skill-image"
            src={react}
            data-aos={"fade-in"}
          />
          <h1 className="text-[20px] -mt-8 text-white text-center font-medium">
            ReactJS
          </h1>
        </div>
        <div>
          <img
            className="pointer-events-none skill-image"
            src={django}
            data-aos={"fade-in"}
          />
          <h1 className="text-[20px] -mt-8 text-white text-center font-medium">
            Django
          </h1>
        </div>
        <div>
          <img
            className="pointer-events-none skill-image"
            src={html}
            data-aos={"fade-in"}
          />
          <h1 className="text-[20px] -mt-8 text-white text-center font-medium">
            HTML
          </h1>
        </div>
        <div>
          <img
            className="pointer-events-none skill-image"
            src={css}
            data-aos={"fade-in"}
          />
          <h1 className="text-[20px] -mt-8 text-white text-center font-medium">
            CSS
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Tech;
