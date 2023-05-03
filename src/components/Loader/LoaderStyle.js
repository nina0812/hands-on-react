import styled from "styled-components";
import { colors } from "../../utils/styles/theme";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LoaderIcon = styled.div`
  border: 4px solid ${colors.secondary};
  border-top: 4px solid ${colors.primaryDark};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
