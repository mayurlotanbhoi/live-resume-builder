import React, { useState } from "react";
import useSelectorCostom from "../Componets/useSelector";
import { useDispatch } from "react-redux";
import { setProjectDetail } from "../Redux/Actions/ReduxActions";
import { useNavigate } from "react-router";

const Project = () => {
  const { ProjectDetail } = useSelectorCostom();
  const Dispatch = useDispatch();

  const navigation = useNavigate();

  function setDetails(e, k) {
    console.log(k);
    const newDetails = {
      ...ProjectDetail[k],
      [e.target?.name]: e.target?.value,
    };
    ProjectDetail[k] = newDetails;
    Dispatch(setProjectDetail(ProjectDetail));
  }

  const addMore = () => {
    ProjectDetail.push(ProjectDetail[ProjectDetail.length - 1]);
    Dispatch(setProjectDetail(ProjectDetail));
  };

  const DeletItem = (k) => {
    ProjectDetail.splice(k, 1);

    Dispatch(setProjectDetail(ProjectDetail));
  };

  return (
    <div className=" h-100">
      {ProjectDetail.map((item, k) => {
        console.log(item.project_Description);
        return (
          <form
            className="w-75 mt-5"
            onChange={(e) => setDetails(e, k)}
            action="http://localhost:3000/EducationForm"
            key={k}
          >
            <div class="form-group">
              <label for="Project_name">Project Name:</label>
              <input
                type="text"
                class="form-control"
                id="Project_name"
                placeholder="Enter Project Name"
                defaultValue={item?.Project_name}
                name={"Project_name"}
              />
            </div>
            <div class="form-group">
              <label for="Project_Domain">Project Domain Name:</label>
              <input
                type="text"
                class="form-control"
                id="Project_Domain"
                placeholder="Enter Project Domain Name"
                defaultValue={item?.Project_Domain}
                name={"Project_Domain"}
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
              <label for="gitHub">gitHub link:</label>
              <input
                type="url"
                class="form-control"
                id="gitHub"
                placeholder="Enter Your gitHub Url"
                defaultValue={item?.gitHub}
                name={"gitHub"}
              />
            </div>

            <div class="form-group">
              <label for="hosted_link">hosted_link link:</label>
              <input
                type="url"
                class="form-control"
                id="hosted_link"
                placeholder="Enter Your hosted Url"
                defaultValue={item?.hosted_link}
                name={"hosted_link"}
              />
            </div>

            <div class="form-group">
              <label for="feature_1">feature 1:</label>
              <input
                type="text"
                class="form-control"
                id="feature_1"
                placeholder="Enter feature_1"
                defaultValue={item?.feature_1}
                name={"feature_1"}
              />
            </div>
            <div class="form-group">
              <label for="feature_2">feature 2:</label>
              <input
                type="text"
                class="form-control"
                id="feature_2"
                placeholder="Enter feature_2"
                defaultValue={item?.feature_2}
                name={"feature_2"}
              />
            </div>
            <div class="form-group">
              <label for="feature_3">feature 3:</label>
              <input
                type="text"
                class="form-control"
                id="feature_3"
                placeholder="Enter feature_3"
                defaultValue={item?.feature_3}
                name={"feature_3"}
              />
            </div>
            <div class="form-group">
              <label for="feature_4">feature 4:</label>
              <input
                type="text"
                class="form-control"
                id="feature_4"
                placeholder="Enter feature_4"
                defaultValue={item?.feature_4}
                name={"feature_4"}
              />
            </div>

            <div class="form-group">
              <label for="Tech_Stack">Tech Stack:</label>
              <input
                type="text"
                class="form-control"
                id="Tech_Stack"
                placeholder="Enter Your Tech_Stack"
                defaultValue={item?.Tech_Stack}
                name={"Tech_Stack"}
              />
            </div>
            <div class="form-group">
              <label for="project_Description">project Description:</label>
              <textarea
                type="text"
                class="form-control"
                id="project_Description"
                placeholder="Enter Your project_Description"
                defaultValue={item?.project_Description}
                name={"project_Description"}
              />
            </div>

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
        onClick={() => navigation("/SkillForm")}
        className="btn bg-primary mt-5  text-end"
      >
        next
      </button>
    </div>
  );
};

export default Project;
