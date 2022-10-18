import React from "react";
import * as S from "../styles/styledHome";

function Home() {
  return (
    <S.HContainer>
      <S.BoxContainer>
        <S.H2Home>Olá, sou</S.H2Home>
        <S.H1Home>Robson Lima</S.H1Home>
        <S.H2Home>Web Developer</S.H2Home>
        <S.PHome>Front-End</S.PHome>
        {/* <img src={} alt=""> */}
      </S.BoxContainer>
    </S.HContainer>
  );
}

export default Home;
