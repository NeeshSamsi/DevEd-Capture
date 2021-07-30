import React from "react";
import home1 from "../img/home1.png";

// Import Styled Components
import { StlAbout, StlDescription, StlImage, StlHide } from "../styles";

// Import Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, photoAnimation, fade } from "../animation";

const AboutSection = () => {
  return (
    <StlAbout>
      <StlDescription>
        <motion.div>
          <StlHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StlHide>
          <StlHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span>
            </motion.h2>
          </StlHide>
          <StlHide>
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </StlHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for an photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StlDescription>
      <StlImage>
        <motion.img
          src={home1}
          alt="Guy with a camera"
          variants={photoAnimation}
        />
      </StlImage>
    </StlAbout>
  );
};

export default AboutSection;
