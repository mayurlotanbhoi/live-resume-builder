import React from "react";
import SectionHeadinf from "./SectionHeadinf";
import useSelectorCostom from "./useSelector";

const CoCurriculam = () => {
  const { Co_crriculamDetail } = useSelectorCostom();
  return (
    <div className="CoCurriculam">
      <SectionHeadinf heading={"Co-curriculam"} />
      <ul className="mt-3">
        {Co_crriculamDetail?.map((item, i) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CoCurriculam;
