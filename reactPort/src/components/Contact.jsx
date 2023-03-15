import React, { useEffect } from "react";
import "./Contact.css";
import styles from "../style";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <section
      id="contact"
      className={`${styles.paddingY} ${styles.marginY} relative`}
    >
      <div
        data-aos={"fade-in"}
        className="absolute z-[0] w-[60%] h-[60%] left-[20%] -bottom-[30%] rounded-full overflow-hidden white__gradient"
      />
      <div
        className="flex justify-center font-medium text-left text-white text-[36px] ss:text-[64px]"
        data-aos={"fade-in"}
      >
        Get In Touch
      </div>
      <div className="flex justify-center" data-aos={"fade-in"}>
        <a
          href="mailto:contact@collinkimball.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline justify-center text-center button-gradient text-white p-2 my-4 sm:h-12 w-64 button-stroke">
            contact@collinkimball.com{" "}
            <i className="text-[12px] fa-solid fa-arrow-right -rotate-45"></i>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
