import { Input } from "antd";
import styled from "styled-components";
import { themes } from "../../core/theme/theme";
import tokens from "../../core/theme/tokens";

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

  @media (max-width: ${tokens.breakpoints.laptop}) {
    padding: ${tokens.padding.CONTAINER}px;
  }
`;

export const LoginCard = styled.div`
  width: 25%;
  background-color: ${themes.light.backgroundLight};
  border-radius: ${tokens.borderRadius.BASELINE}px;
  padding: ${tokens.padding.CONTAINER}px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: ${tokens.breakpoints.laptop}) {
    width: 40%;
  }

  @media (max-width: ${tokens.breakpoints.tablet}) {
    width: 60%;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    width: 100%;
    padding: ${tokens.padding.CONTAINER}px ${tokens.padding.BASELINE * 2}px;
  }
`;

export const InputField = styled(Input)`
  border-radius: ${tokens.borderRadius.BASELINE * 0.5}px;
  margin-bottom: ${tokens.margin.BASELINE * 2}px;
  &:focus {
    box-shadow: 0 0 4px rgba(37, 117, 252, 0.5);
  }
`;
