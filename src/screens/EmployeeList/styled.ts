import styled from "styled-components";
import tokens from "../../core/theme/tokens";

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flexdirection: row;
  justifycontent: center;
  alignitems: center;
`;

export const CompactTableWrapper = styled.div`
  margin-top: ${tokens.margin.BASELINE * 3.5}px;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    margin-top: 2rem;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    margin-top: 3rem;
  }
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${tokens.breakpoints.phone}) {
    justify-content: center;
  }
`;
