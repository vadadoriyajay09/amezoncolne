import React from "react";
import productimg from "../assets/Images/singleproduct.webp";
import { FiCamera } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Bestseller = ({ price, name, description, imgs, sub_image, producData }) => {
  const navigate = useNavigate("");

  return (
    <div
      className="bg-white py-2 cursor-pointer relative border border-1 border-[#f5f5f5] "
      onClick={() => navigate("/productdetails", { state: producData })}
    >
      <div className="w-full bg-[#fff] relative">
        <img
          src={`https://educase.xyz/sub_images/${sub_image
            .split(",")[1]?.replace(/"/g, "")}`}
          alt=""
          className="w-[175px] h-[263px] object-cover mx-auto mix-blend-darken"
        />
        <FiCamera className="absolute bottom-3 left-3" />
      </div>
      <div className="mt-3">
        <h2 className="text-[14px] leading-5 font-medium text-center overflow-hidden w-[190px] mx-auto">
          {name}
        </h2>
        {/* <h2 className="text-[14px] leading-5 font-normal text-center h-[140px] overflow-hidden px-4">
          {description}
        </h2> */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#007185]">4.0</span>
          <div className="flex items-center">
            <AiFillStar className="text-[#EA881F]" />
            <AiFillStar className="text-[#EA881F]" />
            <AiFillStar className="text-[#EA881F]" />
            <AiFillStar className="text-[#EA881F]" />
          </div>
        </div>
        <h2 className="text-[12px] leading-4 font-normal text-center text-[#565959]">
          400+ bought in past month
        </h2>
        <div className="flex items-center ">
          <button className="bg-[#FFC266] px-2 text-[#232F3E] mx-w[130px] mx-auto h-[24px] mt-1">
            Great Indian Festival
          </button>
        </div>
        <div className="flex items-baseline justify-center mt-2 gap-1">
          <h3 className="text-[22px] font-semibold text-center ">
            <sup>₹</sup>
            {price}
          </h3>
          <p className="text-[12px] leading-4 text-[#565959] font-light">
            M.R.P:{" "}
          </p>
          <p className="text-[12px] leading-4 text-[#565959] font-light line-through">
            ₹1,398
          </p>
          <p className="text-[12px] leading-4 text-[#565959] font-light">
            (83% off)
          </p>
        </div>
        <div className="text-center text-[12px] leading-4 text-[#565959] font-normal">
          <p>FREE Delivery by Amazon</p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-[70px] h-[24px] bg-[#E67A00] flex items-center justify-center">
<p className="text-white font-semibold text-xs"> Best seller</p>

      </div>
    </div>
  );
};

export default Bestseller;
