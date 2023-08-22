import React from "react";
import useSelectorCostom from "../Componets/useSelector";
import { useDispatch } from "react-redux";
import { setProsonalDetail } from "../Redux/Actions/ReduxActions";
import { useNavigate } from "react-router";

const Prosonal = () => {
  const { ProsnalDetail } = useSelectorCostom();
  const Dispatch = useDispatch();
  const navigation = useNavigate();
  // ProsnalDetail: {
  //   Name: "Name Middel Last",
  //   Contact: 917709433561,
  //   Email: "xxyyzz@gamil.com",
  //   Linkedin: "https://Linkedin.com",
  //   Github: "https://github.com",
  //   LeedCode: "https://leedcode.com",
  // },

  function setDetails(e) {
    const newDetails = {
      ...ProsnalDetail,
      [e.target?.name]: e.target?.value,
    };
    Dispatch(setProsonalDetail(newDetails));
  }

  return (
    <div>
      <form
        className="w-75 mt-5"
        onChange={(e) => setDetails(e)}
        // action="http://localhost:3000/EducationForm"
      >
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter you full name"
            defaultValue={ProsnalDetail?.Name}
            name="Name"
          />
        </div>
        <div class="form-group">
          <label for="contact">Contact:</label>
          <input
            type="number"
            class="form-control"
            id="contact"
            placeholder="Enter you Mobile Num"
            defaultValue={ProsnalDetail?.Contact}
            name={"Contact"}
          />
        </div>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter Your Email"
            defaultValue={ProsnalDetail?.Email}
            name={"Email"}
          />
        </div>
        <div class="form-group">
          <label for="leedcode">LeedCode Link:</label>
          <input
            type="url"
            class="form-control"
            id="leedcode"
            placeholder="Enter Your leedcode Url"
            defaultValue={ProsnalDetail?.LeedCode}
            name={"LeedCode"}
          />
        </div>
        <div class="form-group">
          <label for="github">GitHub Link:</label>
          <input
            type="url"
            class="form-control"
            id="github"
            placeholder="Enter Your github Url"
            defaultValue={ProsnalDetail?.Github}
            name={"Github"}
          />
        </div>
        <div class="form-group">
          <label for="linkdIn">LinkdIn Link:</label>
          <input
            type="url"
            class="form-control"
            id="linkdIn"
            placeholder="Enter Your LinkdIn Url"
            defaultValue={ProsnalDetail?.Linkedin}
            name={"Linkedin"}
          />
        </div>
        <button
          type="button"
          onClick={() => navigation("/EducationForm")}
          className="btn bg-primary mt-5  text-end"
        >
          next
        </button>
      </form>
    </div>
  );
};

export default Prosonal;
