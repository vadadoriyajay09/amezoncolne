import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import product from "../assets/Images/singleproductdetails.webp";
import subproduct from "../assets/Images/singlesubimage.jpg";
import subproduct2 from "../assets/Images/singlesubimage2.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const { state } = useLocation()
  const navigate = useNavigate("");

  const customPaging = (i) => {
    const data = JSON.parse(state?.sub_image).find(((item, index) => index == i))
    return (
      <div>
        <img
          src={`https://educase.xyz/sub_images/${data}`} // Replace with the correct path
          alt={`subproduct-${data}`}
        />
      </div>

    )
  };

  const settings = {
    dots: true, // Show paging dots
    customPaging: customPaging,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <div className="w-full bg-white px-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-link text-[13px] leading-6 cursor-pointer">
            {state?.categories[0]?.name}
          </p>
          <p className="text-gray text-[13px] leading-5 font-medium">
            {state?.name}
            {/* (Color: Black) */}
          </p>
        </div>
        <div className="flex items-center">
          <AiFillStar className="text-[#EA881F]" />
          <AiFillStar className="text-[#EA881F]" />
          <AiFillStar className="text-[#EA881F]" />
          <AiFillStar className="text-[#EA881F]" />
          <AiFillStar className="text-[#EA881F]" />
          <p className="text-[#0F1111] ml-2">4.83</p>
        </div>
      </div>
      <div className="product_details">

        <Slider {...settings}>
          {state?.sub_image &&
            JSON.parse(state.sub_image)?.map((item, index) => (
              <div key={index}>
                <div className="flex items-center mt-5 gap-5">
                  <img
                    src={`https://educase.xyz/sub_images/${item}`}
                    alt={`subproduct-${index}`}
                    className="w-[100px] h-[100px] object-fill"
                  />
                </div>
              </div>
            ))}
        </Slider>
      </div>

      <div className="mt-4 ">

        <div className="pt-[12px]">

          <div className="mt-[24px] pb-[132px]">
            <button className="cursor-pointer bg-lightRed py-1 px-2 rounded mb-1 text-white">
              Great Indian Festival
            </button>
            <div className="flex items-center">
              <p className="text-lightRed font-normal mr-5 text-4xl">-77%</p>
              <p className="text-black font-normal mr-1 text-4xl relative">
                <span className="text-[1.2rem] absolute -top-1 -left-2">
                  ₹
                </span>
                {state?.price}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-gray text-[0.9rem] text-left"> M.R.P. : </p>
              <p className="text-gray text-[0.9rem] text-left line-through ml-1">
                ₹1,099.00
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-5">
              <p className="text-[#007600] font-bold text-lg"> In stock </p>
              <div
                className="flex flex-col gap-4 fixed bottom-0 bg-white py-2"
                style={{ width: "-webkit-fill-available" }}
              >
                <button
                  className="w-full h-[50px] bg-[#FFD814] rounded-full "
                  onClick={() => navigate("/checkout", { state: state })}
                >
                  Add to Cart
                </button>
                <button
                  className="w-full h-[50px] bg-[#FFA41C] rounded-full"
                  onClick={() => navigate("/checkout", { state: state })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
