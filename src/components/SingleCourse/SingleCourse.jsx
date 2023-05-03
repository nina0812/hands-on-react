import React from "react";
import PropTypes from "prop-types";
import {
  SingleCourse as SingleCourseWrapper,
  Figure,
  Image,
  Content,
} from "./SingleCourseStyle";

const SingleCourse = ({ imgSrc, imgAlt, content }) => {
  return (
    <SingleCourseWrapper>
      <Figure>
        <Image src={imgSrc} alt={imgAlt} />
      </Figure>
      <Content>{content}</Content>
    </SingleCourseWrapper>
  );
};

SingleCourse.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  content: PropTypes.string,
};

export default SingleCourse;
