import React from "react";
import PropTypes from "prop-types";
import {
  Section as SectionWrapper,
  Inner,
  Title,
  Subtitle,
} from "./SectionStyle";

const Section = ({ title, subtitle, children }) => {
  return (
    <SectionWrapper>
      <Inner>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
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
