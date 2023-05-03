import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Course as CourseWrapper,
  Figure,
  Img,
  Title,
  Subtitle,
  Time,
} from "./CourseStyle";

const Course = ({ imgSrc, imgAlt, title, subtitle, time, id }) => {
  return (
    <CourseWrapper>
      <Link to={`/courses/${id}`}>
        <Figure>
          <Img src={imgSrc} alt={imgAlt} />
        </Figure>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Time>{time}</Time>
      </Link>
    </CourseWrapper>
  );
};

Course.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.number,
};

export default Course;
