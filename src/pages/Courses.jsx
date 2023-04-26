import Section from "../components/Section/Section";
import Grid from "../components/Grid/Grid";
import Course from "../components/Course/Course";
import lectureImg1 from "../assets/images/lecture-1.jpg";
import lectureImg2 from "../assets/images/lecture-2.jpg";
import lectureImg3 from "../assets/images/lecture-3.jpg";
import lectureImg4 from "../assets/images/lecture-5.jpg";

const Courses = () => {
    return (
      <>
      <Section title="Browse our all courses" subtitle="We recommend that you choose one of the featured courses. If you
              don't find anything for you here, search for courses in detail on
              the courses page.">
                <Grid>
                 <Course imgSrc={lectureImg1} imgAlt="Lekcija 1" title="HTML & CSS" 
                 subtitle="Learn HTML & CSS basics..." time="100 min"/>
  
                 <Course imgSrc={lectureImg2} imgAlt="Lekcija 1" title="Version Control Systems" 
                 subtitle="Learn GIT and Gitflow basics..." time="90 min"/>
  
                 <Course imgSrc={lectureImg3} imgAlt="Lekcija 1" title="Advanced CSS" 
                 subtitle="BEM methodology, grid, flex..." time="120 min"/>

                 <Course imgSrc={lectureImg4} imgAlt="Lekcija 1" title="Advanced CSS" 
                 subtitle="BEM methodology, grid, flex..." time="120 min"/>

                 <Course imgSrc={lectureImg4} imgAlt="Lekcija 1" title="Advanced CSS" 
                 subtitle="BEM methodology, grid, flex..." time="120 min"/>

                 <Course imgSrc={lectureImg4} imgAlt="Lekcija 1" title="Advanced CSS" 
                 subtitle="BEM methodology, grid, flex..." time="120 min"/>
                </Grid>
         </Section>
      </>
    )
  }
  
  export default Courses
