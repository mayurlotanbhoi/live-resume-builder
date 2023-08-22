import React from "react";
import useSelectorCostom from "../Componets/useSelector";
import { useDispatch } from "react-redux";
import { setSkillDetail } from "../Redux/Actions/ReduxActions";
import { useNavigate } from "react-router";
const Skill = () => {
  const { SkillDetail } = useSelectorCostom();
  const Dispatch = useDispatch();

  const navigation = useNavigate();

  // SkillDetail: {
  //   Computer_languages: "Java, CSS, HTML, Javascript",
  //   Software_Packages: "Express JS, React, NodeJS",
  //   Additional_Courses_Taken: "Data Structure",
  //   Soft_Skills:
  //     "Communication Skills, Leadership, Time management, Creativity",
  // },

  function setDetails(e) {
    const newDetails = {
      ...SkillDetail,
      [e.target?.name]: e.target?.value,
    };

    Dispatch(setSkillDetail(newDetails));
  }

  return (
    <div>
      <form
        className="w-75 mt-5"
        onChange={(e) => setDetails(e)}
        action="http://localhost:3000/EducationForm"
      >
        <div class="form-group">
          <label for="Computer_languages">Computer languages:</label>
          <input
            type="text"
            class="form-control"
            id="Computer_languages"
            placeholder="Enter Computer languages"
            defaultValue={SkillDetail?.Computer_languages}
            name="Computer_languages"
          />
        </div>
        <div class="form-group">
          <label for="Software_Packages">Software Packages:</label>
          <input
            type="text"
            class="form-control"
            id="Software_Packages"
            placeholder="Enter you Mobile Num"
            defaultValue={SkillDetail?.Software_Packages}
            name={"Software_Packages"}
          />
        </div>
        <div class="form-group">
          <label for="Additional_Courses_Taken">
            Additional Courses Taken:
          </label>
          <input
            type="text"
            class="form-control"
            id="Additional_Courses_Taken"
            placeholder="Enter Additional_Courses_Taken"
            defaultValue={SkillDetail?.Additional_Courses_Taken}
            name={"Additional_Courses_Taken"}
          />
        </div>
        <div class="form-group">
          <label for="Soft_Skills">Soft Skills:</label>
          <input
            type="url"
            class="form-control"
            id="Soft_Skills"
            placeholder="Enter Soft_Skills"
            defaultValue={SkillDetail?.Soft_Skills}
            name={"Soft_Skills"}
          />
        </div>

        <button
          type="submit"
          onClick={() => navigation("/Co_curiculamForm")}
          className="btn bg-primary mt-5  text-end"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Skill;
