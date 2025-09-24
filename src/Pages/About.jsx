import SectionThree from "../Components/SectionThree";
import SectionSix from "../Components/SectionSix";
import SectionEight from "../Components/SectionEight";
import AllOtherPages from "../Components/AllOtherPages";

const About = () => {
  return (
    <>
      <AllOtherPages heading={"About Us"} lastLi={"About"}/>
      <SectionThree/>
      <SectionSix/>
    </>
  );
};

export default About;
