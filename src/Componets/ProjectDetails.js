import React from "react";
import SectionHeading from "./SectionHeadinf";
import useSelectorCostom from "./useSelector";

const ProjectDetails = () => {
  const { ProjectDetail } = useSelectorCostom();

  // {
  //   Project_name: "TREANEE",
  //   Project_Domain: "Newton Scholl",
  //   Start_Date: "01/12/2022",
  //   end_Date: "01/12/2022",
  //   gitHub: "http//githum",
  //   hosted_link: "https//",
  //   feature_1: "Full Stack with Crud operation's application",
  //   feature_2: "Add, Read, Edit, and Delete functionality  ,",
  //   feature_3: "Jsonwebtokent Authentication,",
  //   feature_4: "eye-catching Ui, with dynamic images",
  //   Tech_Stack: "react node mtml css",
  //   priject_Description:
  //     " By having auto care  app people  can book an appointment  with the auto mechanics so that people can get service at there doorstep, it will also help the mechanic to get more and more orders,",
  // },
  return (
    <div className="ProjectDetails">
      <SectionHeading heading={"Project"} />
      {ProjectDetail.map((item, i) => {
        return (
          <>
            <div className="Project-name mt-2">
              <div className="expe-company-name d-flex w-100 justify-content-between text-center">
                <div className=" d-flex align-items-center mt-1">
                  <div className=" d-flex">
                    <h4 className=" text-capitalize">{item?.Project_name} </h4>
                    <h5> {item?.Project_Domain}</h5>{" "}
                    <span className="project-link ">
                      <a href={item.gitHub} className="p-1">
                        <i class="fas fa-code"></i>{" "}
                      </a>
                      <a href={item.hosted_link} className="p-1">
                        <i class="fas fa-link"></i>
                      </a>
                    </span>
                  </div>
                </div>

                <date>
                  {item?.Start_Date} To {item?.end_Date}
                </date>
              </div>
            </div>
            <li>
              <h3 className="featur d-inline m-0"> Features </h3>
            </li>
            <div className="feature-list m-0">
              <ol>
                <li>{item?.feature_1}</li>
                <li>{item?.feature_2}</li>
                <li>{item?.feature_3}</li>
                <li>{item?.feature_4}</li>
              </ol>
            </div>
            <div className="tech">
              <div className="tech-contri ">
                <li className=" d-inline">Tech Stack :</li>{" "}
                <span>{item?.Tech_Stack}</span>
              </div>
              <div className="tech-contri">
                <li className=" d-inline">Contribution :</li>{" "}
                <span>{item?.project_Description}</span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProjectDetails;
