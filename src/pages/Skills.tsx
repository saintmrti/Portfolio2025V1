import DividerSection from "../components/shared/DividerSection";
import SkillsCarousel from "../components/skills/SkillsCarousel";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto">
        <DividerSection title="Skills" />
        <div className="h-96 flex justify-center items-center">
          <SkillsCarousel />
        </div>
      </div>
    </section>
  );
};
export default Skills;
