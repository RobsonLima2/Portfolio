import React from "react";
import * as S from "../styles/styledHeader";

function Menu({ link1, link2, link3, link4 }) {
  return (
    <S.ContainerNav>
      <S.Ul>
        <S.Li>
          <S.NavLink to="/">{link1}</S.NavLink>
        </S.Li>
        <S.Li>
          <S.NavLink to="/about">{link2}</S.NavLink>
        </S.Li>
        <S.Li>
          <S.NavLink to="/ods">{link3}</S.NavLink>
        </S.Li>
        <S.Li>
          <S.NavLink to="/works">{link4}</S.NavLink>
        </S.Li>
      </S.Ul>
    </S.ContainerNav>
  );
}
export default Menu;
