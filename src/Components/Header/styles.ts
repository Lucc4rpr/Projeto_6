import { Link } from "react-router-dom";
import styled from "styled-components";
import fundo from "../../assets/images/fundo.png";
import { cores } from "../../Global";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: ${cores.vermelho};
  font-weight: 900;
  background-image: url(${fundo});
  background-size: cover;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelho};
`;
