import React from "react";
import Singleproduct from "./Singleproduct";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import GlobalContext from "../../Contexts/GlobalContext.js";
import { useLocation } from "react-router-dom";

const Singleproducts = () => {
  const { state } = useLocation()

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
      {state?.length > 0 &&
        state?.map((item, index) => (
          <>
            <Singleproduct
              price={item?.price}
              name={item?.name}
              description={item?.description}
              imgs={item?.main_image}
              sub_image={item?.sub_image}
              producData={item}
            />
          </>
        ))}
    </div>
  );
};

export default Singleproducts;
