import styled from "styled-components";
import tokens from "../../../core/theme/tokens";
import { Typography } from "../../../core/theme/typography";
import { themes } from "../../../core/theme/theme";

export const Content = styled.div<{
  $paddingY?: number;
  $paddingX?: number;
  $minWidth?: number;
}>`
  margin-bottom: ${tokens.margin.BASELINE * 2}px;
  padding-top: ${({ $paddingY }) => $paddingY}px;
  padding-bottom: ${({ $paddingY }) => $paddingY}px;
  padding-left: ${({ $paddingX }) => $paddingX}px;
  padding-right: ${({ $paddingX }) => $paddingX}px;
  min-width: ${({ $minWidth }) => $minWidth}px;
`;

export const Footer = styled(Typography.BodySmall)`
  margin-top: ${tokens.margin.BASELINE * 2}px;

  color: ${themes.light.black};

  @media (max-width: ${tokens.breakpoints.phone}) {
    font-size: 0.8rem;
    display: none;
  }
`;

export const StyledIcon = styled.div<{ icon?: React.ReactNode }>`
  display: flex;
  justify-content: center;
  color: ${themes.light.accent};
`;
