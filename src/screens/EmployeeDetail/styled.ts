import styled from "styled-components";
import tokens from "../../components/core/theme/tokens";

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${tokens.padding.BASELINE}px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  gap: ${tokens.margin.BASELINE * 2}px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    flex-wrap: wrap;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    flex-direction: column;
  }
`;

export const FieldContainer = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: ${tokens.margin.BASELINE}px;

  @media (max-width: ${tokens.breakpoints.phone}) {
    min-width: 100%; /* Full width on small screens */
  }
`;
