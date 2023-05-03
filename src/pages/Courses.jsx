import React from "react";
import Section from "../components/Section/Section";
import Course from "../components/Course/Course";
import { Grid } from "../utils/styles/generalStyles";
import { useState, useEffect } from "react";
import coursesMock from "../utils/mock/courses";
import Loader from "../components/Loader/Loader";
import SearchBar from "../components/SearchBar/SearchBar";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
      setIsLoading(false);
      setFilteredData(coursesMock);
    }, 1000);
  }, []);

  const HandleSearch = (name) => {
    const filteredResults = filteredData.filter((course) =>
      course.title.toLowerCase().includes(name.toLowerCase())
    );
    setCourses(filteredResults);
  };

  return (
    <>
      <Section
        title="Browse our all courses"
        subtitle="We recommend that you choose one of the featured courses. If you don't find anything for you here, search for courses in detail on the courses page."
      >
        <SearchBar
          placeholder="Enter course name..."
          onValueChange={HandleSearch}
          disabled={isLoading}
        />
        {isLoading ? (
          <Loader />
        ) : courses ? (
          <Grid>
            {courses.map((course) => (
              <Course
                key={course.id}
                imgSrc={course.imgSrc}
                imgAlt={course.imgAlt}
                title={course.title}
                subtitle={course.subtitle}
                time={course.time}
                id={course.id}
              />
            ))}
          </Grid>
        ) : (
          <p>No featured courses available.</p>
        )}
      </Section>
    </>
  );
};

export default Courses;
