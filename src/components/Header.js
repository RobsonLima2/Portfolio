import React, { useState } from "react";
import * as S from "../styles/styledHeader";
import R from "../assets/img/R_icon.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../components/Menu";
import Home from "../components/Home";
import About from "../components/About";
import Works from "../components/Works";
import Ods from "../components/ODS";

function Header() {
  const [open, setOpen] = useState();

  return (
    <>
      <BrowserRouter>
        <S.Header>
          <S.Container>
            <div>
              <S.Img src={R} alt="Logo Robson" />
            </div>
            {open && (
              <Menu link1="Home" link2="About" link3="Ods" link4="Works" />
            )}
            <S.Btn
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open === true ? "x" : "≡"}
            </S.Btn>
          </S.Container>
        </S.Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ods" element={<Ods />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Header;
