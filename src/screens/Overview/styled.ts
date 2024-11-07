import styled from "styled-components";
import tokens from "../../components/core/theme/tokens";

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    flex-direction: column;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    flex-direction: column;
  }
`;

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
  gap: 32px;
  padding:${tokens.padding.CONTAINER * 2}px; 0;

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
  flex-direction: row;
  gap: ${tokens.padding.BASELINE * 2}px;
  justify-content: center;
  align-items: flex-start; /* Align to top instead of stretching */
  flex-wrap: wrap; /* Allow wrapping to the next row on small screens */

  @media (max-width: ${tokens.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledGuide = styled.span<{ color: string }>`
display: inline-block;
width: 10px;
height: 10px:
background-color: ${(props) => props.color};
margin-right: 5px;

`;
