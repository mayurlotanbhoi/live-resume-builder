import React from "react";
import SectionHeadinf from "./SectionHeadinf";
import useSelectorCostom from "./useSelector";

const Skills = () => {
  const { SkillDetail } = useSelectorCostom();

  // SkillDetail: [
  //   {
  //     Computer_languages: "Java, CSS, HTML, Javascript",
  //     Software_Packages: "Express JS, React, NodeJS",
  //     Additional_Courses_Taken: "Data Structure",
  //     Soft_Skills:
  //       "Communication Skills, Leadership, Time management, Creativity",
  //   }

  return (
    <div className="skill mt-2">
      <SectionHeadinf heading={"Skills"} />

      <div className="skill-list">
        <div className=" d-flex">
          <span>Computer languages </span>
          <p>{SkillDetail?.Computer_languages}</p>
        </div>
        <div className=" d-flex">
          <span>Software Packages</span>
          <p>{SkillDetail?.Software_Packages}</p>
        </div>
        <div className=" d-flex">
          <span>Additional Courses Taken</span>
          <p>{SkillDetail?.Additional_Courses_Taken}</p>
        </div>
        <div className=" d-flex">
          <span>Soft Skills</span>
          <p>{SkillDetail?.Soft_Skills}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
