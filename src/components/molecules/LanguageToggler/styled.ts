import { Button } from "antd";
import styled from "styled-components";

export const FlagButton = styled(Button)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LanguageTogglerContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  height: 50px;
  width: 50px;
`;
