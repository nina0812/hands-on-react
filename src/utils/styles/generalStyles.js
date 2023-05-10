import styled, { css } from "styled-components";
import { breakpoints, colors, fonts } from "./theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";

export const Button = styled.button`
  padding: 12px 20px;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  transition: background-color 0.3s ease-out;
  outline: none;
  border: none;
  margin-right: 32px;

  ${(props) =>
    props.isSecondary &&
    `
  padding: 16px 20px;
  `}

  ${(props) =>
    props.isOutline &&
    `
  background-color: ${colors.secondary};
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  `}

  &:hover {
    background-color: ${colors.primaryDark};

    ${(props) =>
      props.isOutline &&
      `
  color: ${colors.secondary};
  `}
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 32px;

  @media screen and (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Form = styled(FormFormik)`
  @media screen and (${breakpoints.tabletSmall}) {
    max-width: 400px;



    ${props => props.isCentered && `
            margin: 0 auto;
        `}
      
  }
`;

export const FormRow = styled.div`
  //wrapper
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0; //na zadnjem disable
  }
`;

const FieldStyle = css`
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};

  &:focus {
    border: 1px solid ${colors.textPrimary};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const Field = styled(FieldFormik)`
  ${FieldStyle};
`;

export const Select = styled.select`
  ${FieldStyle};
`;

export const Option = styled.option``;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: ${colors.primary};
  padding-top: 8px;
`;

export const Label=styled.p`
margin-bottom: 8px;
`;

export const Password=styled.div`
background-color: ${colors.bgSecondary};
height: 400px;
width: 400px;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 10px;
padding: 30px 20px;
margin-top: 20px;


${props => props.isOnlyText && `
            height: 150px;
            width: 400px;
        `}

${props => props.isRight&& `
  position: relative;
  top: -700px;
  left: 550px;

        `}
        ${props => props.isRightt && `
  position: relative;
  top: -480px;
  left: 500px; `}
`;


export const SectionWrapper=styled.div`
  display:flex;
  justify-content: space-between;
`;

export const Title=styled.h3`
margin-bottom: 10px;
`
