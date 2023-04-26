import React from 'react'
import PropTypes from 'prop-types'
import "./SingleCourse.scss";

const SingleCourse = ({imgSrc, imgAlt, content}) => {
  return (
    <article className="SingleCourse">
      <figure className="SingleCourse-Figure">
          <img 
          src= {imgSrc}
          alt={imgAlt} 
          className="SingleCourse-Image"
          />
      </figure>
      <p className="SingleCourse-Content">{content}</p>
    </article>
  )
}

SingleCourse.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  content: PropTypes.string,
}

export default SingleCourse;