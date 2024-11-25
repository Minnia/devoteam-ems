import styled from "styled-components";
import tokens from "../../core/theme/tokens";
import { toNumber } from "../../utils/helpers.utils";

export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flexdirection: row;
  justifycontent: center;
  alignitems: center;
`;

export const CompactTableWrapper = styled.div`
  margin-top: ${tokens.margin.BASELINE * 3.5}px;
  flex: 1;
  @media (max-width: ${toNumber(tokens.breakpoints.laptop) * 1.5}px) {
    max-width: ${toNumber(tokens.breakpoints.laptop) * 0.8}px;
  }
  @media (max-width: ${tokens.breakpoints.tabletLarge}) {
    max-width: ${toNumber(tokens.breakpoints.laptop) * 0.35}px;
  }
  @media (max-width: ${tokens.breakpoints.tablet}) {
    max-width: ${toNumber(tokens.breakpoints.tablet) * 0.5}px;
    margin-top: 2rem;
  }
  @media (max-width: ${tokens.breakpoints.phone}) {
    max-width: ${toNumber(tokens.breakpoints.phone) * 0.5}px;
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
