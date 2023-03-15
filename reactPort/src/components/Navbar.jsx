import { useState } from "react";
import { ckwhite, menu, close, resume } from "../assets";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY > 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  function handleClick(e, targetId) {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  }

  window.addEventListener("scroll", setFixed);

  return (
    <nav className={/*fix ? "navbar__color fixed" :*/ "navbar__color"}>
      <a href="">
        <img src={ckwhite} alt="logo" className="w-[65px] h-[45px]" />
      </a>

      <div>
        <ul id="navbar" className={toggle ? "#navbar active" : "#navbar"}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleClick(e, "projects")}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleClick(e, "contact")}>
              Contact
            </a>
          </li>
          <li>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume__mobile"
            >
              Resume
            </a>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button className="button-gradient text-white p-2 my-4 h-12 w-36 button-stroke">
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div id="mobile">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
