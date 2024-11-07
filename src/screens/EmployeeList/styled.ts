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
  padding-left: 500px;
  margin-top: 20px;
  min-width: 100%;
  @media (max-width: ${tokens.breakpoints.laptop}) {
    margin-top: 50px;
  }

  @media (max-width: ${tokens.breakpoints.tablet}) {
    margin-top: 60px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    margin-top: 70px;
  }
`;

export const SearchWrapper = styled.div`
  width: 20%;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    width: 30%;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    width: 50%;
  }
`;
