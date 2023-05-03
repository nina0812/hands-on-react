import Section from "../components/Section/Section";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import coursesMock from "../utils/mock/courses";
import Loader from "../components/Loader/Loader";

const Coursee = () => {
  const { id } = useParams();

  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    //course.id je int, a id iz url-a je string
    courses && setCourse(courses.find((course) => course.id === parseInt(id)));
  }, [courses, id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : course ? (
        <Section title={course.title}>
          <SingleCourse
            imgSrc={course.imgSrc}
            imgAlt={course.imgAlt}
            content={course.content}
          />
        </Section>
      ) : (
        <p>No course found.</p>
      )}
    </>
  );
};

export default Coursee;
