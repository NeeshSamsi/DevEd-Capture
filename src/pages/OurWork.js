import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <Stlwork>
      <StlMovie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </StlMovie>
      <StlMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="the racer" />
        </Link>
      </StlMovie>
      <StlMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </StlMovie>
    </Stlwork>
  );
};

// Styled Componenets
const Stlwork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0;

    .line {
      height: 0.5rem;
      background: #ccc;
      margin-bottom: 3rem;
    }

    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
    }
  }
`;

const StlMovie = styled.div`
  padding-bottom: 10rem;
`;

export default OurWork;
