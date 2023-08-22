import React from "react";
import html2pdf from "html2pdf.js";

const SuccesFull = () => {
  window.alert("Your Resume Is Ready Click on Download Button to Download");
  const downloadPDF = () => {
    const opt = {
      filename: "Resume.pdf",
    };
    const element = document.getElementById("Resume");
    console.log(element);
    html2pdf().from(element).set(opt).save();
  };
  return (
    <div className=" container download">
      <div className=" w-100 text-center">
        <i onClick={() => downloadPDF()} className="fas fa-download"></i>
        <p>Download</p>
      </div>
    </div>
  );
};

export default SuccesFull;
