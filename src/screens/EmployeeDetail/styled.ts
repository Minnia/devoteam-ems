import styled from "styled-components";
import tokens from "../../core/theme/tokens";
import { FlexContainer } from "../../core/styled";
import { Checkbox } from "antd";

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: initial;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

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
    min-width: 100%;
  }
`;

export const Container = styled.div`
  margin-bottom: ${tokens.margin.BASELINE * 2.5}px;
  padding: ${tokens.padding.BASELINE}px;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    max-width: 100%;
    padding: ${tokens.padding.BASELINE * 1.5}px;
  }

  @media (max-width: ${tokens.breakpoints.phone}) {
    padding: ${tokens.padding.BASELINE}px;
  }
`;

export const StyledFlexContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${tokens.breakpoints.phone}) {
    flex-direction: row;
    align-items: flex-start;
    gap: ${tokens.margin.BASELINE}px;
  }
`;

export const StyledButtonContainer = styled(FlexContainer)`
  justify-content: center;
  gap: ${tokens.margin.BASELINE}px;
`;

export const StyledCheckbox = styled(Checkbox)`
  font-size: ${tokens.text.fontSize.SMALL}px;

  @media (max-width: ${tokens.breakpoints.phone}) {
    font-size: ${tokens.text.fontSize.SMALL * 0.9}px;
  }
`;
