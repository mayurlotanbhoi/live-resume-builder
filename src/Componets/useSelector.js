import React from "react";
import { useSelector } from "react-redux";

const useSelectorCostom = () => {
  return useSelector((store) => store.Reducer);
};

export default useSelectorCostom;
