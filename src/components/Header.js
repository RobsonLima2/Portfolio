import React from "react";
import * as S from "../styles/styledHeader";

function Header() {
  return (
    <S.HeaderContainer>
      <S.Container>
        <div>Logo</div>
        <S.ContainerMenu>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </S.ContainerMenu>
      </S.Container>
    </S.HeaderContainer>
  );
}

export default Header;
