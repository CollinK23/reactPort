import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  About,
  Tech,
  Projects,
  Contact,
  Footer,
  Glow,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div>
        <div className={`z-10 ${styles.boxWidth}`}>
          {/* <Gradient /> */}
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`z-10 ${styles.boxWidth}`}>
          <Hero />
        </div>
        <Glow />
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Tech />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
