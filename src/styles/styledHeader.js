import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  height: 90px;
  background-color: #000000;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    background-color: #070719;
    height: 130px;
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 50px;
`;

export const Container = styled.div`
  /* max-width: 1280px; */
  width: 100%;
  margin: 0 auto;
  color: #daa520;
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerNav = styled.nav`
  @media (max-width: 450px) {
    display: initial;
    flex-direction: column;
  }
`;

export const P = styled.p`
  display: none;

  @media (max-width: 450px) {
    display: none;
    font-size: 40px;
  }
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const NavLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-weight: 600;
  color: #daa520;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    transition-duration: 2s;
  }
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const Li = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Btn = styled.button`
  width: 30px;
  height: 38px;
  font-size: 35px;
  margin-bottom: 20px;
  cursor: pointer;
  display: initial;
  color: #daa520;
  background-color: transparent;
  border: none;

  @media (max-width: 450px) {
    font-size: 25px;
  }
`;
