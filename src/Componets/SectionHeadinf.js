import React from "react";

const SectionHeadinf = ({ heading }) => {
  return (
    <div className="topic-heading mt-1 ">
      <span className="line-border"></span>{" "}
      <h3 className=" d-inline ms-2">{heading}</h3>
    </div>
  );
};

export default SectionHeadinf;
