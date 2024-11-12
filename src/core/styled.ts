import { Button, Typography } from "antd";
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
  $spacing?: number;
  $paddingX?: number;
  $paddingY?: number;
  $center?: boolean;
  $direction?: "row" | "column";
  $fullScreen?: boolean;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "row"};
  gap: ${({ $spacing }) => $spacing || 0}px;
  padding-top: ${({ $paddingY }) => $paddingY}px;
  padding-bottom: ${({ $paddingY }) => $paddingY}px;
  padding-left: ${({ $paddingX }) => $paddingX}px;
  padding-right: ${({ $paddingX }) => $paddingX}px;

  ${({ $center }) =>
    $center &&
    `
      justify-content: center;
      align-items: center;
    `}

  ${({ $fullScreen }) =>
    $fullScreen &&
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
  $width?: number;
  $center?: boolean;
  $horizontal?: boolean;
  $navbarPadding?: number;
}>`
  width: 100vw;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding-left: ${(props) => props.$navbarPadding}px;
  justify-content: ${({ $center }) => ($center ? "center" : "flex-start")};
  align-items: ${({ $center }) => ($center ? "center" : "flex-start")};
  overflow-x: ${({ $horizontal }) => ($horizontal ? "auto" : "hidden")};
  overflow-y: hidden;
`;

export const FullWidthContainer = styled.div<{ $direction?: "row" | "column" }>`
  display: flex;
  justify-content: center;
  flex-direction: ${({ $direction }) => $direction || "row"};
  align-items: ${({ $direction }) =>
    $direction === "column" ? "center" : "flex-start"};

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
  height?: number;
}>`
  border-radius: ${tokens.borderRadius.BASELINE}px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: ${tokens.padding.BASELINE * 2}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${themes.light.beige};
  text-align: center;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  transition: transform 0.2s ease;
  cursor: pointer;
  min-width: ${({ $minWidth }) => ($minWidth ? `${$minWidth}px` : "600px")};

  @media (max-width: ${tokens.breakpoints.laptop &&
    tokens.breakpoints.tabletLarge}) {
    min-width: 50%;
    padding: ${tokens.padding.BASELINE * 0.5}px;
  }

  @media (max-width: ${tokens.breakpoints.tablet}) {
    width: 100%;
    padding: ${tokens.padding.BASELINE}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${tokens.padding.BASELINE}px;
    margin: 0 auto;
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

  &:hover {
    transform: scale(1.02);
  }
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

export const InfoButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${tokens.text.fontSize.SMALL}px;
  color: ${themes.light.accent};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: blue;
  }
`;

export const StyledButton = styled(Button)<{
  color: string;
  $textColor: string;
}>`
  background-color: ${({ color }) => color};
  color: ${({ $textColor }) => $textColor};
  width: 100%;
  border: none;
  &:hover {
    color: ${themes.light.redHover} !important;
    border: 1px solid ${themes.light.redHover} !important;
  }
`;

export const NavbarAwareFlexContainer = styled(FlexContainer)<{
  $navbarWidth?: number;
}>`
  width: calc(100vw - ${(props) => props.$navbarWidth}px);
`;
