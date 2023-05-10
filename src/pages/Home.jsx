import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import Course from "../components/Course/Course";
import Loader from "../components/Loader/Loader";

import { useState, useEffect } from "react";
import { Grid } from "../utils/styles/generalStyles";
import coursesMock from "../utils/mock/courses";

const Home = () => {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Hero />
      <Section
        isCentered="true"
        title="Open your new possibilities"
        subtitle="We recommend that you choose one of the featured courses. If you don't find anything for you here, search for courses in detail on the courses page."
      >
        {isLoading ? (
          <Loader />
        ) : courses ? (
          <Grid>
            {courses.map(
              (course, index) =>
                index < 4 && (
                  <Course
                    key={course.id}
                    imgSrc={course.imgSrc}
                    imgAlt={course.imgAlt}
                    title={course.title}
                    subtitle={course.subtitle}
                    time={course.time}
                    id={course.id}
                  />
                )
            )}
          </Grid>
        ) : (
          <p>No featured courses available.</p>
        )}
      </Section>
    </>
  );
};

export default Home;
