import React from "react";
// export { default as Project } from "./ProjectDetails";
// export { default as Prosnal } from "./ProjectDetails";
// export { default as Skill } from "./ProjectDetails";
// export { default as Co_curriculam } from "./ProjectDetails";
// export { default as Experance } from "./ProjectDetails";
// export { default as Education } from "./ProjectDetails";

import {
  Project,
  Prosnal,
  Skill,
  Co_curriculam,
  Experance,
  Education,
} from "./index";
import html2pdf from "html2pdf.js";

const ResumeHome = () => {
  const downloadPDF = () => {
    const opt = {
      filename: "Resume.pdf",
    };
    const element = document.getElementById("Resume");
    console.log(element);
    html2pdf().from(element).set(opt).save();
  };
  return (
    <>
      <div >
        <div className=" w-100 text-center">

          <button className="btn bg-primary flex-column ">  <i onClick={() => downloadPDF()} className="fas fa-download"></i> <span>Download</span></button>
        </div>
        <div id="Resume" className="Resume-Contaner container card">
          <Prosnal />
          <Education />
          <Experance />
          <Project />
          <Skill />
          <Co_curriculam />
        </div>
      </div>
    </>
  );
};

export default ResumeHome;
