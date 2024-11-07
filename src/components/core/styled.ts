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
  center?: boolean;
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

  ${({ center }) =>
    center &&
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
  center?: boolean;
  horizontal?: boolean;
}>`
  ${({ width }) => (width ? `width: ${width}% ` : `width: 100%`)};
  display: flex;
  flex-direction: row;
  justify-content: ${({ center }) => (center ? "center" : "flex-start")};
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  overflow-x: ${({ horizontal }) => (horizontal ? "auto" : "hidden")};
  overflow-y: hidden;
`;

export const FullWidthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
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

export const CardContainer = styled.div<{ center?: boolean }>`
  border-radius: ${tokens.borderRadius.BASELINE}px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: ${tokens.padding.BASELINE * 2}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  min-width: 400px;
  text-align: center;
  transition: transform 0.2s ease;

  ${({ center }) =>
    center &&
    `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); 
      width: auto; 

    `}
`;

export const Label = styled(Typography)<{ bold?: boolean }>`
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  color: ${themes.light.textDark};
  font-size: ${tokens.text.fontSize.MEDIUM}px;
`;
