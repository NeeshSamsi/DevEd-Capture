import React from "react";
import home1 from "../img/home1.png";

// Import Styled Components
import { StlAbout, StlDescription, StlImage, StlHide } from "../styles";

// Import Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <StlAbout>
      <StlDescription>
        <motion.div>
          <StlHide>
            <motion.h2>We work to make</motion.h2>
          </StlHide>
          <StlHide>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </StlHide>
          <StlHide>
            <motion.h2>come true.</motion.h2>
          </StlHide>
        </motion.div>
        <p>
          Contact us for an photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StlDescription>
      <StlImage>
        <img src={home1} alt="Guy with a camera" />
      </StlImage>
    </StlAbout>
  );
};

export default AboutSection;
