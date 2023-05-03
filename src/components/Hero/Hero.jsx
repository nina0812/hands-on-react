import heroImg from "../../assets/images/landing.jpg";
import { Button } from "../../utils/styles/generalStyles";
import { useNavigate } from "react-router-dom";
import {
  Hero as HeroWrapper,
  Figure,
  Img,
  Overlay,
  Content,
  ContentInner,
  TextCard,
  Title,
  Subtitle,
} from "./HeroStyle";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroWrapper>
      <Figure>
        <Img src={heroImg} alt="Speck Academy hero" />
      </Figure>
      <Overlay />
      <Content>
        <ContentInner>
          <TextCard>
            <Title>Speck Academy 2023 powered by FOI</Title>
            <Subtitle>
              Make a turnaround in your career or upgrade your current skill set
              with knowledge-based lessons from IT practice.
            </Subtitle>
            <Button onClick={() => navigate("/courses")}>
              Explore courses
            </Button>
          </TextCard>
        </ContentInner>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;
