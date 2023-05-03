import styled from "styled-components";
import { colors, breakpoints } from "../../utils/styles/theme";

export const Search = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
`;

export const Input = styled.input`
  background-color: ${colors.bgPrimary};
  border: 3px solid ${colors.primaryDark};
  border-radius: 6px;
  font-size: 16px;
  padding: 15px;
  height: 20px;
  width: 180px;

  @media screen and (${breakpoints.tablet}) {
    padding: 20px;
    height: 30px;
    width: 250px;
  }
`;
