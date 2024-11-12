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
