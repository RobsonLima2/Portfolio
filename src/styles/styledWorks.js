import styled from "styled-components";

export const ContainerW = styled.section`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    margin: auto 0;
  }
`;

export const BoxOne = styled.div`
  width: 300px;
  height: 250px;
  margin: 8vh 0 0vh 0;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-left: 20px;
  border-radius: 15%;

  @media (max-width: 780px) {
    width: 400px;
    height: 380px;
  }

  @media (max-width: 390px) {
    width: 200px;
    height: 170px;
  }
`;

export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 8vh;
  background-image: linear-gradient(180deg, transparent 0%, #000 100%);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const H2Box = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: bold;
  font-weight: 900;
  color: #fffaf0;
`;
