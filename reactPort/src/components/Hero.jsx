import React from "react";
import styles from "../style";

const Hero = () => (
  <section
    id="home"
    className={`flex flex-col h-screen relative px-[6.5vw] sm:mb-16 mb-6 ${styles.paddingY}`}
  >
    <div className={`flex-1 ${styles.flexStart}  flex-col z-[10] `}>
      <div className="flex flex-col  w-full">
        <h1
          className="flex justify-center sm:justify-start font-medium 
        text-center mt-12 sm:text-left sm:text-[12vw]
        text-[90px] text-white leading-[100%]"
        >
          Collin <br></br>Kimball
        </h1>
        <div className="flex sm:hidden justify-center">
          <a href="#projects">
            <button className="flex justify-center text-center button-gradient text-white p-2 my-4 w-48 button-stroke">
              Projects
            </button>
          </a>
        </div>
      </div>
    </div>
    <div className=" sm:hidden absolute z-[0] w-[60%] h-[60%] -right-[52%] top-[15%] rounded-full overflow-hidden pink__gradient " />
    <div className=" sm:hidden absolute z-[0] w-[40%] h-[40%] -right-[35%] top-[10%] rounded-full overflow-hidden purple__gradient " />
    {/* <div>
      <div className="absolute z-[0] w-[30%] h-[35%] bottom-100 pink__gradient" />
      <div className="absolute z-[0] w-[30%] h-[35%] bottom-100 pink__gradient overflow-hidden" />
    </div> */}
  </section>
);

export default Hero;
