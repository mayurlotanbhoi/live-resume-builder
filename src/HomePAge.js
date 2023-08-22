import React from "react";
import { Resume } from "./Componets";
import Forms from "./Forms/Form";

const HomePage = () => {
  return (
    <>
      <marquee>
        This is a live resume builder application you can edit the resume or
        build new resume by using this app you can Download your Resume just
        cliking on download icon befor complet or after complet form
      </marquee>
      <div className="HomePage container mt-2 d-flex w-100">
        <Forms />
        <Resume />
      </div>
    </>
  );
};

export default HomePage;
