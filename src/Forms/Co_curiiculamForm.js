import React from "react";
import useSelectorCostom from "../Componets/useSelector";
import { useDispatch } from "react-redux";
import { setCurriculamDetail } from "../Redux/Actions/ReduxActions";
import { useNavigate } from "react-router";

const CoCuriiculamForm = () => {
  const { Co_crriculamDetail } = useSelectorCostom();
  const Dispatch = useDispatch();
  const navigation = useNavigate();

  // Co_crriculamDetail: [
  //   "Full Stack with Crud operation's application",
  //   "Add, Read, Edit, and Delete functionality",
  //   "Jsonwebtokent Authentication",
  //   "eye-catching Ui, with dynamic images",
  // ],

  const Addmore = () => {
    Co_crriculamDetail.push(Co_crriculamDetail[Co_crriculamDetail.length - 1]);
    Dispatch(setCurriculamDetail(Co_crriculamDetail));
  };

  function setDetails(e) {
    Co_crriculamDetail[e.target?.name] = e.target?.value;
    Dispatch(setCurriculamDetail(Co_crriculamDetail));
  }

  function DeleteItem(i) {
    Co_crriculamDetail.splice(i, 1);
    Dispatch(setCurriculamDetail(Co_crriculamDetail));
  }

  return (
    <div>
      <form className="w-75 mt-5" onChange={(e) => setDetails(e)}>
        {Co_crriculamDetail.map((item, i) => {
          return (
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="Computer_languages"
                placeholder="Enter Co_crriculamDetail"
                defaultValue={item}
                name={i}
              />
              <button
                type="button"
                className="btn"
                onClick={() => DeleteItem(i)}
              >
                {" "}
                Delete
              </button>
            </div>
          );
        })}

        <button type="button" className="btn" onClick={() => Addmore()}>
          {" "}
          Add More
        </button>

        <button
          type="submit"
          onClick={() => navigation("/dowonload")}
          className="btn bg-primary mt-5  text-end"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default CoCuriiculamForm;
