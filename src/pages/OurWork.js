import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

// Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  photoAnimation,
  lineAnimation,
  fade,
  slider,
  sliderContainer,
} from "../animation";

const OurWork = () => {
  return (
    <StlWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <StlFrame1 variants={slider} />
        <StlFrame2 variants={slider} />
        <StlFrame3 variants={slider} />
        <StlFrame4 variants={slider} />
      </motion.div>
      <StlMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img src={athlete} alt="athlete" variants={photoAnimation} />
          </Hide>
        </Link>
      </StlMovie>
      <StlMovie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/the-racer">
          <motion.img
            src={theracer}
            alt="the racer"
            variants={photoAnimation}
          />
        </Link>
      </StlMovie>
      <StlMovie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/good-times">
          <motion.img
            src={goodtimes}
            alt="Good Times"
            variants={photoAnimation}
          />
        </Link>
      </StlMovie>
    </StlWork>
  );
};

// Styled Componenets
const StlWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;
  }
`;

const StlMovie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    width: 100%;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const StlFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const StlFrame2 = styled(StlFrame1)`
  background: #ff8efb;
`;
const StlFrame3 = styled(StlFrame1)`
  background: #8ed2ff;
`;
const StlFrame4 = styled(StlFrame1)`
  background: #8effa0;
`;

export default OurWork;
