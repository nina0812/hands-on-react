import styled from "styled-components";
import { breakpoints } from "../../utils/styles/theme";

export const SingleCourse = styled.article`
  @media screen and (${breakpoints.tablet}) {
    display: flex;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 220px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 32px;

  @media screen and (${breakpoints.tabletSmall}) {
    height: 300px;
  }

  @media screen and (${breakpoints.tablet}) {
    height: 350px;
    width: 350px;
    flex-shrink: 0;
    margin-right: 48px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    height: 450px;
    width: 500px;
    margin-right: 90px;
  }
`;

export const Image = styled.img`
  width: 100%; /*image preuzima maksimalnu sirinu i visinu od parenta (figure)*/
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 150%;
`;
