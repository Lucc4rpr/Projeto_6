import styled from "styled-components";
import { cores } from "../../Global";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
  height: 300px;
  background-color: ${cores.bege};
`;

export const LogoSocialDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  ul {
    display: flex;
    gap: 8px;
  }
`;

export const FooterCopy = styled.p`
color: ${cores.vermelho};
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  width: 480px;
`;
