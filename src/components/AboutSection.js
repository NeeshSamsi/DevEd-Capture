import React from "react";
import home1 from "../img/home1.png";

// Import Styled Components
import styled from "styled-components";
import { StlAbout, StlDescription, StlImage, StlHide } from "../styles";

const AboutSection = () => {
  return (
    <StlAbout>
      <StlDescription>
        <div className="title">
          <StlHide>
            <h2>We work to make</h2>
          </StlHide>
          <StlHide>
            <h2>
              your <span>dreams</span>
            </h2>
          </StlHide>
          <StlHide>
            <h2>come true.</h2>
          </StlHide>
        </div>
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
