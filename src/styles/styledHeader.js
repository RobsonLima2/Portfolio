import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 90px;
  background-color: #2b2c2c;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  color: #daa520;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerMenu = styled.div`
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  li {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: #ffffff;
      transition-duration: 2s;
    }
  }
`;
