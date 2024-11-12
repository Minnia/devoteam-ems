import styled from "styled-components";
import { themes } from "../../../core/theme/theme";
import tokens from "../../../core/theme/tokens";
import { Button } from "antd";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: ${themes.light.background};
  color: ${themes.light.text};
  padding: ${tokens.padding.BASELINE * 4};
`;

export const StyledButton = styled(Button)`
  padding: 0 ${tokens.padding.BASELINE * 4}px;
  height: 48px;
  background-color: ${themes.light.error};
  border: none;
  color: ${themes.light.text};

  &:hover {
    background-color: ${themes.light.error};
    color: ${themes.light.text};
  }
`;
