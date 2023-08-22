import React from "react";
import { useSelector } from "react-redux";

const ProsnalDetails = () => {
  const { ProsnalDetail } = useSelector((store) => store.Reducer);
  // Contact: 917709433561;
  // Email: "xxyyzz@gamil.com";
  // Github: "https://github.com";
  // LeedCode: "https://leedcode.com";
  // Linkedin: "https://Linkedin.com";
  // Name: "Name Middel Last";

  return (
    <div className="ProsnalDetails d-flex justify-content-between">
      <div className="p-names-con">
        <h1 className="p-name text-capitalize">{ProsnalDetail?.Name}</h1>
        <h3>Contact No {ProsnalDetail?.Contact}</h3>
        <h3>Eamil {ProsnalDetail?.Email}</h3>
      </div>
      <div className="p-socialmedia">
        <ul>
          <li>
            Github:{" "}
            <a href={`${ProsnalDetail?.Github}`}>
              {ProsnalDetail?.Github?.toString().substring(
                ProsnalDetail?.Github?.lastIndexOf("/"),
                ProsnalDetail?.Github?.length
              )}
            </a>
          </li>
          <li>
            LeedCode:
            {/* {console.log(typeof ProsnalDetail?.LeedCode)} */}
            <a href={`${ProsnalDetail?.LeedCode}`}>
              {ProsnalDetail?.LeedCode?.toString().substring(
                ProsnalDetail?.LeedCode?.toString().lastIndexOf("/"),
                ProsnalDetail?.LeedCode?.length
              )}
            </a>
          </li>
          <li>
            Linkedin:{" "}
            <a href={`${ProsnalDetail?.Linkedin.toString()}`}>
              {ProsnalDetail?.Linkedin?.toString().substring(
                ProsnalDetail?.Linkedin?.lastIndexOf("/"),
                ProsnalDetail?.Linkedin?.length
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProsnalDetails;
