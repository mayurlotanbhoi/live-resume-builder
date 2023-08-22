import React from "react";
import useSelectorCostom from "./useSelector";
import SectionHeading from "./SectionHeadinf";

const EducationalDetais = () => {
  const { EducatinalDetail } = useSelectorCostom();
  //   console.log(EducatinalDetail);

  //   CGPA_Percentage: "74%";
  //   Degree_Examination: "Bachelor of Engineering";
  //   Institution_Board: "Shri.Jaykumar Rawal Institute of Technology, Dondaicha";
  //   Year: 1980;

  return (
    <div className="ducationalDetais ">
      {/* <div className="topic-heading mt-2">
        <span className="line-border"></span>{" "}
        <h3 className=" d-inline ms-2">Education</h3>
      </div> */}
      <SectionHeading heading={"Education"} />

      <table className=" w-100 mt-3">
        <thead>
          <tr>
            <th>Year</th>
            <th>Degree/Examination</th>
            <th>Institution/Board</th>
            <th>CGPA/Percentage</th>
          </tr>
        </thead>
        <tbody>
          {EducatinalDetail.map((items, i) => {
            return (
              <tr key={i}>
                <td>{items.Year}</td>
                <td>{items.Degree_Examination}</td>
                <td>{items.Institution_Board}</td>
                <td>{items.CGPA_Percentage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EducationalDetais;
