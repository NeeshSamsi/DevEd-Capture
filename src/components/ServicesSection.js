import React from "react";
import styled from "styled-components";

// Import Images
import home2 from "../img/home2.png";

// Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

// Import Styles
import { StlAbout, StlDescription, StlImage } from "../styles";

// Import Animation Packages
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <StlServices
      variants={scrollReveal}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <StlDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StlCards>
          <StlCard>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StlCard>
          <StlCard>
            <div className="icon">
              <img src={teamwork} alt="teamwork icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StlCard>
          <StlCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StlCard>
          <StlCard>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StlCard>
        </StlCards>
      </StlDescription>
      <StlImage>
        <img src={home2} alt="" />
      </StlImage>
    </StlServices>
  );
};

// Styled Components
const StlServices = styled(StlAbout)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding-top: 2rem 0 4rem 0;
  }
`;

const StlCards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const StlCard = styled.div`
  flex-basis: 25rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
