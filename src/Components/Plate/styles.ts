import styled from "styled-components";
import { breakpoints, cores } from "../../Global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 8px;
  width: 320px;
  height: 340px;

  background-color: ${cores.vermelho};
  color: ${cores.bege};

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
  }

  img {
    width: 300px;
    height: 167px;
    object-fit: cover;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
  h2 {
    font-size: 16px;
    font-weight: 900;
  }

`;

export const Button = styled.button`
  border: none;
  cursor: pointer;

  font-weight: 900;
  font-size: 14px;
  height: 24px;

  color: ${cores.vermelho};
  background-color: ${cores.bege};
`;

