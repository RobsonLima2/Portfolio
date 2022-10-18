import styled from "styled-components";

export const ContainerAbout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  margin: auto;
  margin-top: 10px;

  @media (max-width: 1080px) {
    text-align: center;
  }
`;

export const BoxAbout = styled.div`
  display: flex;
  margin-bottom: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
  }
`;

export const ImgAbout = styled.img`
  width: 335px;
  height: 250px;
  border-radius: 50%;
  border: solid 2px yellow;
  object-fit: cover;

  @media (max-width: 1080px) {
    margin: auto;
    margin-bottom: 20px;
  }

  @media (max-width: 360px) {
    margin: auto;
    width: 235px;
    height: 230px;
  }
`;

export const Icons = styled.div`
  width: 265px;
  height: 45px;
  display: flex;
  justify-content: space-evenly;
  margin: 1.6rem;
  padding: 5px;
  margin-left: 40px;
  cursor: pointer;
  align-items: center;
  font-size: 2rem;
`;

export const ImgIcon = styled.i`
  color: white;
  font-size: 2rem;
`;

export const ImgIconL = styled.i`
  color: #0e76a8;
`;

export const ImgIconI = styled.i`
  color: #bc2a8d;
`;

export const ContainerH4 = styled.div`
  width: 735px;
  color: rgb(224, 168, 13);
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  @media (max-width: 1080px) {
    margin-left: 0;
    width: 650px;
    margin: auto;
  }

  @media (max-width: 680px) {
    font-size: 1.5rem;
    width: 350px;
    margin: auto;
  }

  @media (max-width: 360px) {
    margin: auto;
    font-size: 1.3rem;
  }
`;

export const H4 = styled.h4`
  text-align: center;

  @media (max-width: 1080px) {
    text-align: center;
  }
`;

export const BoxSkill = styled.div`
  width: 735px;
  margin-left: 410px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 5rem;

  @media (max-width: 1080px) {
    justify-content: space-around;
    margin-left: 310px;
    width: 630px;
    font-size: 2rem;
  }
  @media (max-width: 985px) {
    font-size: 1.5rem;
    margin-left: 10px;
    width: 340px;
  }
`;

export const Linha = styled.div`
  background-color: white;
  width: 60px;
  height: 8px;
  text-align: center;
  margin-top: 15px;
  border-radius: 10px;
  margin-bottom: 34.5px;
`;

export const IconSkill = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50%;
`;
