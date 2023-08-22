import React, { useState } from "react";
import useSelectorCostom from "../Componets/useSelector";
import { useDispatch } from "react-redux";
import { setEducatinalDetail } from "../Redux/Actions/ReduxActions";
import { useNavigate } from "react-router";

const Education = () => {
  const { EducatinalDetail } = useSelectorCostom();
  const Dispatch = useDispatch();

  const navigation = useNavigate();
  // {
  //   Year: 1980,
  //   Degree_Examination: "Bachelor of Engineering",
  //   Institution_Board:
  //     "Shri.Jaykumar Rawal Institute of Technology, Dondaicha",
  //   CGPA_Percentage: "74%",
  // },

  function setDetails(e, k) {
    console.log(k);
    const newDetails = {
      ...EducatinalDetail[k],
      [e.target?.name]: e.target?.value,
    };
    EducatinalDetail[k] = newDetails;

    Dispatch(setEducatinalDetail(EducatinalDetail));
  }

  const addMore = () => {
    EducatinalDetail.push(EducatinalDetail[EducatinalDetail.length - 1]);

    Dispatch(setEducatinalDetail(EducatinalDetail));
  };

  const DeletItem = (k) => {
    EducatinalDetail.splice(k, 1);

    Dispatch(setEducatinalDetail(EducatinalDetail));
  };

  return (
    <>
      <div className=" h-100">
        {EducatinalDetail.map((item, k) => {
          return (
            <form
              className="w-75 mt-5"
              onChange={(e) => setDetails(e, k)}
              action="http://localhost:3000/EducationForm"
              key={k}
            >
              <div class="form-group">
                <label for="name">Year:</label>
                <input
                  type="number"
                  class="form-control"
                  id="name"
                  placeholder="Enter your passing Year"
                  defaultValue={item?.Year}
                  name="Year"
                />
              </div>
              <div class="form-group">
                <label for="contact">Degree Examination:</label>
                <input
                  type="text"
                  class="form-control"
                  id="contact"
                  placeholder="Enter your Degree/Examination"
                  defaultValue={item?.Degree_Examination}
                  name={"Degree_Examination"}
                />
              </div>
              <div class="form-group">
                <label for="email">Institution Board:</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Enter Your Institution/Board"
                  defaultValue={item?.Institution_Board}
                  name={"Institution_Board"}
                />
              </div>
              <div class="form-group">
                <label for="leedcode">CGPA Percentage:</label>
                <input
                  type="text"
                  class="form-control"
                  id="leedcode"
                  placeholder="Enter Your CGPA Percentage"
                  defaultValue={item?.CGPA_Percentage}
                  name={"CGPA_Percentage"}
                />
              </div>

              {/* <button type="submit" className="btn bg-primary mt-5  text-end">
                Next
              </button> */}
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
      </div>
      <button
        type="button"
        onClick={() => navigation("/ExperianceForm")}
        className="btn bg-primary mt-5  text-end"
      >
        next
      </button>
    </>
  );
};

export default Education;
