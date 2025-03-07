import SkillsCarousel from "../components/skills/SkillsCarousel";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto p-10 mt-24">
        <div className="flex items-center">
          <div className="w-1/2 h-0.5 bg-secondary"></div>
          <h1 className="text-2xl">
            <span className="bg-secondary rounded-md px-8">Skills</span>
          </h1>
          <div className="w-1/2 h-0.5 bg-secondary">
            <SkillsCarousel />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};
export default Skills;
