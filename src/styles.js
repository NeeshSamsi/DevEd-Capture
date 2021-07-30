// Import Styled
import styled from "styled-components";

// Styled Components
export const StlAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const StlDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: 400;
  }
`;

export const StlImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StlHide = styled.div`
  overflow: hidden;
`;
