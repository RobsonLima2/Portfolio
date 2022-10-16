import styled from "styled-components";
import imgM from "../assets/img/matrix-code.gif";

export const HContainer = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${imgM});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  position: relative;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #daa520;
  font-weight: 800;
  z-index: 10;
`;

export const H2Home = styled.h2`
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 1rem;
`;

export const H1Home = styled.h1`
  text-transform: uppercase;
  font-size: 2.8rem;
  margin-bottom: 1rem;
`;

export const PHome = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 1rem;
`;
