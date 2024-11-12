import styled from "styled-components";
import tokens from "../../core/theme/tokens";

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${tokens.gap.LARGE * 2}px;
  padding:${tokens.padding.CONTAINER * 2}px; 20px;


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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${tokens.padding.BASELINE * 2}px;
  background-color: green;
  justify-items: center;
  align-items: flex-start;
  padding: ${tokens.padding.CONTAINER}px;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${tokens.padding.BASELINE * 1.5}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    grid-template-columns: 1fr;
    gap: ${tokens.padding.BASELINE}px;
  }
`;

export const StyledGuide = styled.span<{ color: string }>`
  display: inline-block;
  background-color: ${(props) => props.color};
  margin-right: ${tokens.margin.BASELINE * 0.5}px;
`;
