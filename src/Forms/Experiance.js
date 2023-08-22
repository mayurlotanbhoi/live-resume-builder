import React, { useState } from "react";
import useSelectorCostom from "../Componets/useSelector";
import { useDispatch } from "react-redux";
import { setExperianceDetail } from "../Redux/Actions/ReduxActions";
import { useNavigate } from "react-router";

const Experiance = () => {
  const { ExperianceDetail } = useSelectorCostom();
  const Dispatch = useDispatch();
  const navigation = useNavigate();

  function setDetails(e, k) {
    console.log(k);
    const newDetails = {
      ...ExperianceDetail[k],
      [e.target?.name]: e.target?.value,
    };
    ExperianceDetail[k] = newDetails;
    Dispatch(setExperianceDetail(ExperianceDetail));
  }

  const addMore = () => {
    ExperianceDetail.push(ExperianceDetail[ExperianceDetail.length - 1]);
    Dispatch(setExperianceDetail(ExperianceDetail));
  };
  const DeletItem = (k) => {
    ExperianceDetail.splice(k, 1);
    Dispatch(setExperianceDetail(ExperianceDetail));
  };

  // ExperianceDetail: [
  //   {
  //     Designation: "TREANEE",
  //     Company_Name: "Newton Scholl",
  //     Start_Date: "01/12/2022",
  //     end_Date: "01/12/2022",
  //     Experiance_Type: "Internship and Certifications",

  //     Skill_1: "Full Stack Web Development and Problem Solving",
  //     Skill_2: "Technical Stack Learnt: HTML, CSS, JavaScript, React ,",
  //     Skill_3:
  //       "Participated in various coding competitions held by Newton School ,",
  //     Skill_4: "Worked on various projects",
  //   },
  // ];

  return (
    <div className=" h-100">
      {ExperianceDetail.map((item, k) => {
        {
          /* console.log(item.project_Description); */
        }
        return (
          <form
            className="w-75 mt-5"
            onChange={(e) => setDetails(e, k)}
            key={k}
          >
            <div class="form-group">
              <label for="Company_Name">Company Name:</label>
              <input
                type="text"
                class="form-control"
                id="Company_Name"
                placeholder="Enter Company Name"
                defaultValue={item?.Company_Name}
                name={"Company_Name"}
              />
            </div>

            <div class="form-group">
              <label for="Designation">Designation:</label>
              <input
                type="text"
                class="form-control"
                id="Designation"
                placeholder="Enter Project Domain Name"
                defaultValue={item?.Designation}
                name={"Designation"}
              />
            </div>

            <div class="form-group">
              <label for="Start_Date">Start Date:</label>
              <input
                type="date"
                class="form-control"
                id="Start_Date"
                placeholder="Enter Start Date"
                defaultValue={item?.Start_Date}
                name={"Start_Date"}
              />
            </div>

            <div class="form-group">
              <label for="end_Date">end Date:</label>
              <input
                type="date"
                class="form-control"
                id="end_Date"
                placeholder="Enter end Date"
                defaultValue={item?.end_Date}
                name={"end_Date"}
              />
            </div>

            <div class="form-group">
              <label for="Experiance_Type">Experiance Type:</label>
              <input
                type="text"
                class="form-control"
                id="Experiance_Type"
                placeholder="Enter Your gitHub Url"
                defaultValue={item?.Experiance_Type}
                name={"Experiance_Type"}
              />
            </div>

            <div class="form-group">
              <label for="Skill_1">Skill 1:</label>
              <input
                type="text"
                class="form-control"
                id="Skill_1"
                placeholder="Enter Your hosted Url"
                defaultValue={item?.Skill_1}
                name={"Skill_1"}
              />
            </div>

            <div class="form-group">
              <label for="Skill_2">Skill 2:</label>
              <input
                type="text"
                class="form-control"
                id="Skill_2"
                placeholder="Enter Your hosted Url"
                defaultValue={item?.Skill_2}
                name={"Skill_2"}
              />
            </div>
            <div class="form-group">
              <label for="Skill_3">Skill 3:</label>
              <input
                type="text"
                class="form-control"
                id="Skill_3"
                placeholder="Enter Your hosted Url"
                defaultValue={item?.Skill_3}
                name={"Skill_3"}
              />
            </div>
            <div class="form-group">
              <label for="Skill_4">Skill 4:</label>
              <input
                type="text"
                class="form-control"
                id="Skill_4"
                placeholder="Enter Your hosted Url"
                defaultValue={item?.Skill_4}
                name={"Skill_4"}
              />
            </div>
            {/* <div class="form-group">
              <label for="feature_4">feature 4:</label>
              <input
                type="text"
                class="form-control"
                id="feature_4"
                placeholder="Enter feature_4"
                defaultValue={item?.feature_4}
                name={"feature_4"}
              />
            </div> */}

            <button
              type="button"
              onClick={() => DeletItem(k)}
              className="btn bg-primary mt-5  text-end"
            >
              Delete
            </button>
          </form>
        );
      })}
      <button
        type="button"
        onClick={() => addMore()}
        className="btn bg-primary mt-5  text-end"
      >
        Add More
      </button>
      {/* http://localhost:3000/ProjectForm */}
      <button
        type="button"
        onClick={() => navigation("/ProjectForm")}
        className="btn bg-primary mt-5  text-end"
      >
        next
      </button>
    </div>
  );
};

export default Experiance;
