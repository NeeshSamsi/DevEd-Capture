import React, { useState } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";

// Import Styled Components
import { StlAbout } from "../styles";

const FaqSection = () => {
  return (
    <StlFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <Toggle>
        <div className="question">
          <h4>How do I start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              quod?
            </p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <div className="question">
        <h4>What is your Daily Schedule?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            quod?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Which payment methods do you support?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            quod?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            quod?
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StlFaq>
  );
};

// Styled Components
const StlFaq = styled(StlAbout)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: 400;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem 0;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;

    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
