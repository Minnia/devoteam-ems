import { Spin } from "antd";
import { FlexContainer } from "../../core/styled";
import * as S from "./styled";

const LoadingOverlay = () => (
  <S.LoadingOverlayWrapper>
    <FlexContainer center fullScreen>
      <Spin size="large" />
    </FlexContainer>
  </S.LoadingOverlayWrapper>
);

export default LoadingOverlay;
