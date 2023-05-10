import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";

export const Section = styled.section`
  background-color: ${colors.bgPrimary};

  ${(props) =>
        props.isSecondary &&`
            background-color: ${colors.bgSecondary};
        `
    }
`;

export const Inner = styled.div`
  padding: 64px 24px;

  @media screen and (${breakpoints.tablet}) {
    padding: 72px 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 90px 0;
    max-width: 930px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1280px;
  }
`;

export const Title = styled.h2`
  max-width: 550px;
  margin-bottom: 32px;
  font-size: 28px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 36px;
  }

  ${(props) =>
    props.isCentered && `
    margin: 0 auto;
    margin-bottom: 32px;
    text-align: center;
  `}
`;

export const Subtitle = styled.p`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  color: ${colors.textSecondary};
  font-size: 16px;
  margin-bottom: 48px;
`;

export const SectionHeading = styled.div`
    margin-bottom: 64px;

    @media(${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`;