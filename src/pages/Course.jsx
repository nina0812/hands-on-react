import Section from "../components/Section/Section";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import lectureImg1 from "../assets/images/lecture-1.jpg";

const Course = () => {
    return (
      <>
      <Section title="HTML & CSS">
            <SingleCourse imgSrc={lectureImg1} imgAlt="Lekcija 1"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, impedit eveniet ipsum omnis laudantium eum provident deleniti facilis. Repellat, numquam dolorem. Vitae eligendi velit labore delectus voluptas, ea fuga molestias! 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos fugiat delectus maiores, ex minus doloribus labore voluptatem earum amet sit commodi facilis quos impedit beatae. Quod sint laudantium consequatur!Lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam facilis vel aliquid dignissimos corrupti, totam qui. Ipsam commodi veniam natus quos provident reiciendis. Suscipit culpa libero pariatur velit ipsa fuga.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi minus esse saepe ipsa, mollitia architecto expedita ut et nobis alias. Natus quibusdam itaque porro id aspernatur temporibus cum perspiciatis."/>
        </Section>
      </>
    )
  }
  
  export default Course;