import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

const MovieDetail = async () => {
  const history = useHistory();
  const url = history.location.pathname;

  return (
    <div>
      <h1>Movie Detail</h1>
    </div>
  );
};

// Styled Components
const StlDetails = styled.div``;

const StlHeadline = styled.div``;

export default MovieDetail;
