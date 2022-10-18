import React from "react";
import * as S from "../styles/styledWorks.js";
import Recipes from "../assets/img/Recipes.jpg";
import Lol from "../assets/img/LOL.jpg";
import Portflow from "../assets/img/portflow.jpg";
import Finn from "../assets/img/FINN.jpg";

function Works() {
  return (
    <S.ContainerW>
      <a href="https://recipes-vnw.vercel.app/">
        <S.BoxOne>
          <S.ImgBox src={Recipes} alt="" />
          <S.TitleBox>
            <S.H2Box>Recipes</S.H2Box>
          </S.TitleBox>
        </S.BoxOne>
      </a>

      <a href="https://robsonlima2.github.io/Challenge_LOL/">
        <S.BoxOne>
          <S.ImgBox src={Lol} alt="" />
          <S.TitleBox>
            <S.H2Box>LOL</S.H2Box>
          </S.TitleBox>
        </S.BoxOne>
      </a>

      <a href="https://robsonlima2.github.io/Portflow/">
        <S.BoxOne>
          <S.ImgBox src={Portflow} alt="" />
          <S.TitleBox>
            <S.H2Box>Portflow</S.H2Box>
          </S.TitleBox>
        </S.BoxOne>
      </a>

      <a href="https://robsonlima2.github.io/Finn/">
        <S.BoxOne>
          <S.ImgBox src={Finn} alt="" />
          <S.TitleBox>
            <S.H2Box>Finn</S.H2Box>
          </S.TitleBox>
        </S.BoxOne>
      </a>
    </S.ContainerW>
  );
}

export default Works;
