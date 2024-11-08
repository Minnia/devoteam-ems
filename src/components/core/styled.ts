import { Typography } from "antd";
import styled from "styled-components";
import * as StyledSystem from "styled-system";
import tokens from "./theme/tokens";
import { themes } from "./theme/theme";

export const ClickableText = styled(Typography.Text)<{ link: string }>`
  cursor: ${({ link }) => (link ? "pointer" : "default")};

  &:hover {
    color: ${({ link }) => (link ? "blue" : "inherit")};
  }
`;

export const FlexContainer = styled.div<{
  spacing?: number;
  paddingX?: number;
  paddingY?: number;
  $center?: boolean;
  direction?: "row" | "column";
  fullScreen?: boolean;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${({ spacing }) => spacing || 0}px;
  padding-top: ${({ paddingY }) => paddingY}px;
  padding-bottom: ${({ paddingY }) => paddingY}px;
  padding-left: ${({ paddingX }) => paddingX}px;
  padding-right: ${({ paddingX }) => paddingX}px;

  ${({ $center }) =>
    $center &&
    `
      justify-content: center;
      align-items: center;
    `}

  ${({ fullScreen }) =>
    fullScreen &&
    `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.7);
      z-index: 9999;
    `}
`;

export const ScreenContainer = styled.div<{
  width?: number;
  $center?: boolean;
  horizontal?: boolean;
}>`
  ${({ width }) => (width ? `width: ${width}% ` : `width: 100%`)};
  display: flex;
  flex-direction: row;
  justify-content: ${({ $center }) => ($center ? "center" : "flex-start")};
  align-items: ${({ $center }) => ($center ? "center" : "flex-start")};
  overflow-x: scroll;
`;

export const FullWidthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const Spacer = styled.div<
  StyledSystem.FlexboxProps & StyledSystem.SpaceProps & StyledSystem.LayoutProps
>`
  ${StyledSystem.space};
  ${StyledSystem.layout};
  ${StyledSystem.flexbox};
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div<{
  $center?: boolean;
  $minWidth?: number;
}>`
  border-radius: ${tokens.borderRadius.BASELINE}px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: ${tokens.padding.BASELINE * 2}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease;
  min-width: ${({ $minWidth }) => $minWidth || 600}px;

  @media (max-width: ${tokens.breakpoints.laptop}) {
    min-width: ${({ $minWidth }) =>
      $minWidth ? `${$minWidth * 0.8}px` : "80%"};
    padding: ${tokens.padding.BASELINE * 1.5}px;
  }

  @media (max-width: ${tokens.breakpoints.tablet}) {
    min-width: ${({ $minWidth }) =>
      $minWidth ? `${$minWidth * 0.6}px` : "70%"};
    padding: ${tokens.padding.BASELINE}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    min-width: 50%; /* Allow the container to occupy more space on small screens */
    height: auto; /* Let the height adjust dynamically */
    display: flex;
    flex-direction: column; /* Ensure the content stacks vertically */
    justify-content: center;
    align-items: center;
    padding: ${tokens.padding.BASELINE}px;
    margin: 0 auto; /* Center horizontally on the screen */
  }

  ${({ $center }) =>
    $center &&
    `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    `}
`;

export const Label = styled(Typography)<{ $bold?: boolean }>`
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
  color: ${themes.light.textDark};
  font-size: ${tokens.text.fontSize.MEDIUM}px;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    font-size: ${tokens.text.fontSize.SMALL}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    font-size: ${tokens.text.fontSize.SMALL}px;
  }
`;
