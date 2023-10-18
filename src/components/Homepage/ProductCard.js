import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../Contexts/GlobalContext.js";

const ProductCard = ({ pro_image, pro_details }) => {
  const navigate = useNavigate("");
  const { HandleProduct, allData, categories, filterByCategory } = useContext(GlobalContext)
  return (
    <>
      <div
        // onClick={() => navigate("/singleproduct")}\
        onClick={async () => {
          const datas = await filterByCategory("Televisions")
          // navigate('/singleproduct', { state: datas })
        }}
        className="cursor-pointer"
      >
        <div className="max-h-[367px] max-w-[367px] rounded-md overflow-hidden">
          <img
            src={pro_image}
            alt="image"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="pl-1 font-medium">{pro_details}</p>
      </div>
    </>
  );
};

export default ProductCard;
