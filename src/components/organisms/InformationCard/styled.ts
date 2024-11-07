import styled from "styled-components";
import tokens from "../../core/theme/tokens";
import { Typography } from "../../core/theme/typography";

export const IconContainer = styled.div`
  font-size: 48px;
  margin-bottom: ${tokens.margin.BASELINE * 2}px;
`;

export const Content = styled.div`
  margin-bottom: ${tokens.margin.BASELINE * 2}px;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

export const Text = styled(Typography.BodySmall)`
  color: #666;
  margin-top: ${tokens.margin.BASELINE}px;
`;

export const Footer = styled.div`
  margin-top: ${tokens.margin.BASELINE * 2}px;
  font-size: 0.9rem;
  color: #888;
`;
