import React from "react";

import {
  PresnalForm,
  EducationForm,
  ExperianceForm,
  ProjectForm,
  SkillForm,
  Co_curiculamForm,
  SucessFull,
} from "./index";

import { NavLink, Routes, Route } from "react-router-dom";

const Form = () => {
  return (
    <div className="forms">
      <h2 className=" text-center">Build Your Resume By Filing Details</h2>
      <div className="form-heading d-inline-block">
        <NavLink to="/"> Personal Detail</NavLink>
        <NavLink to="/EducationForm"> Education Detail</NavLink>
        <NavLink to="/ExperianceForm"> Experiance </NavLink>
        <NavLink to="/ProjectForm"> ProjectForm Detail</NavLink>
        <NavLink to="/SkillForm"> Skill Detail</NavLink>
        <NavLink to="/Co_curiculamForm"> Co_curiculamForm Detail</NavLink>
        <NavLink to="/dowonload"></NavLink>
      </div>
      <div>
        <Routes>
          <Route path="/" element=<PresnalForm /> />
          <Route path="/EducationForm" element=<EducationForm /> />
          <Route path="/ExperianceForm" element=<ExperianceForm /> />
          <Route path="/ProjectForm" element=<ProjectForm /> />
          <Route path="/SkillForm" element=<SkillForm /> />
          <Route path="/Co_curiculamForm" element=<Co_curiculamForm /> />
          <Route path="/dowonload" element=<SucessFull /> />
        </Routes>
      </div>
    </div>
  );
};

export default Form;
