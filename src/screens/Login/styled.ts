import { Button, Input } from "antd";
import styled from "styled-components";
import { themes } from "../../components/core/theme/theme";
import tokens from "../../components/core/theme/tokens";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    to right,
    ${themes.light.secondaryBackground},
    ${themes.light.accent}
  );
`;

export const LoginCard = styled.div`
  width: 25%;
  background-color: #fff;
  border-radius: 8px;
  padding: ${tokens.padding.CONTAINER}px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  background-color: ${themes.light.button};
  border: none;
  &:hover {
    background-color: #1f66c1;
  }
`;

export const InputField = styled(Input)`
  border-radius: ${tokens.borderRadius.BASELINE * 0.5}px;
  margin-bottom: ${tokens.margin.BASELINE * 2}px;
  &:focus {
    border-color: #2575fc;
    box-shadow: 0 0 4px rgba(37, 117, 252, 0.5);
  }
`;
