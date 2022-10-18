import React, { useState } from "react";
import * as S from "../styles/styledOds";
import meioAmbiente from "../assets/img/meio_ambiente.jpg";
import TInf from "../assets/img/Trabalho Infantil.jpg";

function Ods() {
  const [ods, setOds] = useState(false);
  const [ods2, setOds2] = useState(false);

  const ODS = () => {
    return (
      <S.DivInfo>
        <S.H2>
          Objetivo 15. Proteger, recuperar e promover o uso sustentável dos
          ecossistemas terrestres, gerir de forma sustentável as florestas,
          combater a desertificação, deter e reverter a degradação da terra e
          deter a perda de biodiversidade
        </S.H2>
        <S.H3>Taboão da Serra realiza campanha com programação ambiental</S.H3>

        <S.Img src={meioAmbiente} alt="" />
        <p>
          A Prefeitura de Taboão da Serra, através da Secretaria de
          Desenvolvimento Urbano, Habitação e Meio Ambiente (SEHAB), promove
          neste mês a campanha Junho Verde, que tem como objetivo realizar ações
          para uma agenda ambiental positiva e em consonância com os Objetivos
          do Desenvolvimento Sustentável (ODS) - Agenda 2030 da Organização das
          Nações Unidas (ONU). Nesse sentido, a pasta realiza atividades
          direcionadas aos munícipes e servidores públicos, por meio dos
          programas Saberes Ambientais, Refloresta Taboão, Plantar & Cuidar,
          entre outras ações.{" "}
        </p>
      </S.DivInfo>
    );
  };

  const ODS2 = () => {
    return (
      <S.DivInfo>
        <S.H2>Trabalho decente e crescimento econômico</S.H2>
        <S.H3>Taboão da Serra realiza campanha com programação ambiental</S.H3>

        <S.Img src={TInf} alt="" />
        <p>
          A Prefeitura de Taboão da Serra através da Secretaria de Assistência
          Social e Cidadania realiza a campanha “Não ao trabalho em infantil,
          quem incentiva ou apoia também é responsável”.
        </p>
      </S.DivInfo>
    );
  };

  return (
    <div>
      <S.DivInfo>
        <h1>
          Os objetivos de desenvolvimento sustentável na Cidade de Taboão da
          Serra
        </h1>
      </S.DivInfo>

      <S.DivImgs>
        {/*button ODS */}
        <S.Button
          onClick={() => {
            setOds(!ods);
          }}
        >
          {ods === true ? (
            <S.Img src="https://odsbrasil.gov.br/content/ods/15.png" alt="" />
          ) : (
            <S.Img src="https://odsbrasil.gov.br/content/ods/15.png" alt="" />
          )}
        </S.Button>

        {/*button ODS2 */}
        <S.Button
          onClick={() => {
            setOds2(!ods2);
          }}
        >
          {ods2 === true ? (
            <S.ImgTwo
              src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-8.svg"
              alt=""
            />
          ) : (
            <S.ImgTwo
              src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-8.svg"
              alt=""
            />
          )}
        </S.Button>
      </S.DivImgs>
      {ods && ODS()}
      {ods2 && ODS2()}
    </div>
  );
}

export default Ods;
