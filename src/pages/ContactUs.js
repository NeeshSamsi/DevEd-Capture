import React from "react";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { titleAnimation } from "../animation";

// Import Styled
import styled from "styled-components";

import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <StlContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <StlTitle>
        <StlHide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </StlHide>
      </StlTitle>
      <div>
        <StlHide>
          <StlSocial variants={titleAnimation}>
            <StlCircle />
            <h2>Send us a message.</h2>
          </StlSocial>
        </StlHide>
        <StlHide>
          <StlSocial variants={titleAnimation}>
            <StlCircle />
            <h2>Send an email.</h2>
          </StlSocial>
        </StlHide>
        <StlHide>
          <StlSocial variants={titleAnimation}>
            <StlCircle />
            <h2>Social Media.</h2>
          </StlSocial>
        </StlHide>
      </div>
      <ScrollTop />
    </StlContact>
  );
};

// Styled Components
const StlContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 0.8rem;
  }
`;

const StlTitle = styled.div`
  margin: 4rem;
  color: black;

  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const StlHide = styled.div`
  overflow: hidden;
`;

const StlSocial = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;

const StlCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export default ContactUs;
