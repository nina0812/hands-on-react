import React from 'react'
import PropTypes from 'prop-types'
import "./course.scss";
import { Link } from "react-router-dom";

const Course = ({imgSrc, imgAlt, title, subtitle, time}) => {
  return (
    <article className="Course">
    <Link to="/course">
    <figure className="Course-Figure">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="Course-Img"
      />
    </figure>
    <h3 className="Course-Title">{title}</h3>
    <p className="Course-Subtitle">{subtitle}</p>
    <p className="Course-Time">{time}</p>
    </Link>
   </article>
  )
}

Course.propTypes = {
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    time: PropTypes.string
}

export default Course