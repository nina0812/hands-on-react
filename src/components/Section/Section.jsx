import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../utils/styles/generalStyles";
import {
  Section as SectionWrapper,
  Inner,
  Title,
  Subtitle,
  SectionHeading,
} from "./SectionStyle";

const Section = ({ title, subtitle, children, isCentered=false, buttonText, handleEditing, isProfilePage }) => {
  return (
    <SectionWrapper>
    <Inner>
      {isProfilePage ? (
        <SectionHeading>
          <Title isCentered={isCentered}>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {buttonText && (
            <Button isOutline onClick={handleEditing}>
              {buttonText}
            </Button>
          )}
        </SectionHeading>
      ) : (
        <>
          <Title isCentered={isCentered}>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {buttonText && (
            <Button isOutline onClick={handleEditing}>
              {buttonText}
            </Button>
          )}
        </>
      )}
      {children}
    </Inner>
  </SectionWrapper>
  );
};


Section.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
