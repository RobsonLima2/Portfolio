import React from "react";
import * as S from "../styles/styledAbout";
import FotoR from "../assets/img/fotoR.jpg";
import {
  DiCss3,
  DiGithubBadge,
  DiReact,
  DiHtml5,
  DiJavascript
} from "react-icons/di";

import { AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

function About() {
  const Html = <DiHtml5 />;
  const IconReact = <DiReact />;
  const Js = <DiJavascript />;
  const Git = <DiGithubBadge />;
  const Css = <DiCss3 />;
  const Linkdin = <AiOutlineLinkedin />;
  const Instagran = <AiOutlineInstagram />;

  return (
    <S.ContainerAbout>
      <S.BoxAbout>
        <div>
          <S.ImgAbout src={FotoR} alt="foto perfil" />
          <S.Icons>
            <a href="https://github.com/RobsonLima2">
              <S.ImgIcon>{Git}</S.ImgIcon>
            </a>
            <S.ImgIconL>{Linkdin}</S.ImgIconL>
            <a href="https://www.instagram.com/robynnho/">
              <S.ImgIconI>{Instagran}</S.ImgIconI>
            </a>
          </S.Icons>
        </div>
        <S.ContainerH4>
          <S.H4>Sobre</S.H4>
          <S.Linha></S.Linha>
          <S.H4>
            Profisional com 16 anos de experiência em tecnologia no segmento de
            infraestrutura. Atualmente migrando para área de Desenvolvimento WEB
            Front-End.
          </S.H4>
        </S.ContainerH4>
      </S.BoxAbout>
      <S.BoxSkill>
        <S.IconSkill>{Html}</S.IconSkill>
        <S.IconSkill>{Css}</S.IconSkill>
        <S.IconSkill>{Js}</S.IconSkill>
        <S.IconSkill>{IconReact}</S.IconSkill>
      </S.BoxSkill>
    </S.ContainerAbout>
  );
}

export default About;
