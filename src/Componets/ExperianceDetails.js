import React from "react";
import useSelectorCostom from "./useSelector";
import SectionHeading from "./SectionHeadinf";

const ExperianceDetails = () => {
  const { ExperianceDetail } = useSelectorCostom();

  console.log(ExperianceDetail);
  return (
    // Designation: "TREANEE",
    //   Company_Name: "Newton Scholl",
    //   Start_Date: "01/12/2022",
    //   end_Date: "01/12/2022",
    //   Experiance_Type: "Internship and Certifications",

    //   Skill_1: "Full Stack Web Development and Problem Solving",
    //   Skill_2: "Technical Stack Learnt: HTML, CSS, JavaScript, React ,",
    //   Skill_3:
    //     "Participated in various coding competitions held by Newton School ,",
    //   Skill_4: "Worked on various projects",

    <div className="ExperianceDetails mt-2 ">
      {ExperianceDetail.map((itms, i) => {
        return (
          <>
            {/* <div className="topic-heading mt-2 " key={i}>
              <span className="line-border"></span>{" "}
              <h3 className=" d-inline ms-2">{itms?.Experiance_Type}</h3>
            </div> */}

            <SectionHeading heading={itms?.Experiance_Type} />

            <div className="mt-2">
              <div className="expe-company-name d-flex w-100 justify-content-between text-center">
                <div className=" d-flex align-items-center">
                  <h4>{itms?.Company_Name} </h4>
                  <h5> {itms?.Designation}</h5>{" "}
                </div>
                <date>
                  {itms?.Start_Date} To {itms?.end_Date}
                </date>
              </div>
              <div>
                <ul>
                  <li>{itms?.Skill_1}</li>
                  <li>{itms?.Skill_2}</li>
                  <li>{itms?.Skill_3}</li>
                  <li>{itms?.Skill_4}</li>
                </ul>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ExperianceDetails;
