import styled from "styled-components";
import tokens from "../../core/theme/tokens";
import { FlexContainer } from "../../core/styled";

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CenteredContainer = styled.div<{ $navbarPadding?: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.gap.LARGE * 2}px;
  padding-left: ${(props) => props.$navbarPadding}px;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    padding: ${tokens.padding.BASELINE * 2}px 0;
    gap: ${tokens.padding.BASELINE * 2}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    padding: ${tokens.padding.BASELINE}px 0;
    gap: ${tokens.padding.BASELINE * 2}px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.padding.BASELINE * 2}px;
  justify-content: center;
  align-items: flex-start;
  padding: ${tokens.padding.CONTAINER}px;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    gap: ${tokens.padding.BASELINE * 1.5}px;
    margin: 0 auto;
  }

  @media (max-width: ${tokens.breakpoints.tabletLarge}) {
    gap: ${tokens.padding.BASELINE}px;
    justify-content: center;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    gap: ${tokens.padding.BASELINE}px;
  }
`;

export const StyledGuide = styled.span<{ color: string }>`
  display: inline-block;
  background-color: ${(props) => props.color};
  margin-right: ${tokens.margin.BASELINE * 0.5}px;
`;
