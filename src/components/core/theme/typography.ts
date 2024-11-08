import styled, { css } from "styled-components";
import tokens from "./tokens";

export type TypographyProps = {
  accent?: boolean;
  bold?: boolean;
  centered?: boolean;
  color?: string;
  demi?: boolean;
  error?: boolean;
  light?: boolean;
  lowercase?: boolean;
  medium?: boolean;
  onAccent?: boolean;
  onSecondary?: boolean;
  regular?: boolean;
  underline?: boolean;
  uppercase?: boolean;
};

const TextBaseComponent = styled.p<TypographyProps>``;

export const textProps = css<TypographyProps>`
  ${({ light, theme }) => light && `opacity: ${theme.opacities.lightText};`}
  ${({ uppercase }) => uppercase && "text-transform: uppercase;"}
  ${({ lowercase }) => lowercase && "text-transform: lowercase;"}
  ${({ underline }) => underline && "text-decoration: underline;"}
  ${({ centered }) => centered && "text-align: center;"}
  ${({ accent, theme }) => accent && `color: ${theme.colors.accent};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ error, theme }) => error && `color: ${theme.colors.error};`}
  ${({ onAccent, theme }) => onAccent && `color: ${theme.colors.accent_on};`}
  ${({ onSecondary, theme }) =>
    onSecondary && `color: ${theme.colors.secondary_on};`}
  ${({ bold }) => bold && "font-weight: bold;"}
  ${({ demi }) => demi && "font-weight: 600;"}
    font-family: 'Host Grotesk', sans-serif;
`;

const BodyLarge = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.LARGE}px;
  line-height: ${tokens.text.lineHeight * 3.5}px;
  ${textProps}
`;

const BodyMedium = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.MEDIUM}px;
  line-height: 20px;
  ${textProps}
`;

const BodySmall = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.SMALL}px;
  line-height: ${tokens.text.lineHeight * 3}px;
  ${textProps}
`;

export const Heading1 = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.HEADING_LARGE}px;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.text.fontSize.MEDIUM}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    font-size: ${tokens.text.fontSize.MEDIUM}px;
  }
  ${textProps}
`;

const Heading2 = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.HEADING_MEDIUM}px;
  ${textProps}
`;

const Heading3 = styled(TextBaseComponent)`
  font-size: ${tokens.text.fontSize.HEADING_SMALL}px;
  line-height: ${tokens.text.lineHeight}px;
  ${textProps}

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.text.fontSize.HEADING_SMALL}px;
  }
`;

export const Typography = {
  BodyLarge,
  BodyMedium,
  BodySmall,
  Heading1,
  Heading2,
  Heading3,
};
