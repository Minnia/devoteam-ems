import styled from "styled-components";
import tokens from "../../core/theme/tokens";
import { Typography } from "../../core/theme/typography";

export const Content = styled.div`
  margin-bottom: ${tokens.margin.BASELINE * 2}px;
`;

export const Footer = styled(Typography.BodySmall)`
  margin-top: ${tokens.margin.BASELINE * 2}px;

  color: #888;

  @media (max-width: ${tokens.breakpoints.phone}) {
    font-size: 0.8rem;
    display: none;
  }
`;
