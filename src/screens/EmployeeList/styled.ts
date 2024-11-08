import styled from "styled-components";
import tokens from "../../components/core/theme/tokens";

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flexdirection: row;
  justifycontent: center;
  alignitems: center;
`;

export const CompactTableWrapper = styled.div`
  margin-top: 20px;
  min-width: 100%;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    margin-top: 2rem;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    margin-top: 3rem;
  }
`;

export const SearchWrapper = styled.div`
  width: 20%;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    width: 40%;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    width: 100%;
  }
`;
