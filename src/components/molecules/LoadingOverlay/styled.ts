import styled from "styled-components";

export const LoadingOverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
`;
