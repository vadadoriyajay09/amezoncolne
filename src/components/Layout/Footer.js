import React from "react";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div
        className="h-[50px] bg-[#37475A] flex items-center justify-center"
        onClick={handleScrollToTop}
      >
        <div className="text-[14px] text-white text-center font-bold">
          <p className="text-center flex items-center justify-center">
            <FaAngleUp />
          </p>
          <p>Top of page</p>
        </div>
      </div>

      <div className=" bg-[#232F3E] py-[25px] px-3 justify-between">
        <div className="flex items-center">
          <ul className="flex flex-col gap-[25px]">
            <li>
              <Link to={"/"} className="text-white text-[15px] font-medium">
                Your Amazon.in
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-white text-[15px] font-medium">
                Amazon Pay
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-white text-[15px] font-medium">
                Your Lists
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="text-white text-[15px] font-medium whitespace-break-spaces w-[150px] block"
              >
                Your Recently Viewed Items
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-white text-[15px] font-medium">
                Sell
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-[25px]">
            <li>
              <Link to={"/"} className="text-white text-[15px] font-medium">
                Your Orders
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-white text-[15px] font-medium">
                Amazon App Download
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-white text-[15px] font-medium">
                Your Account
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-white text-[15px] font-medium">
                Returns
              </Link>
            </li>
            <li>
              <Link to={"/"} className="text-white text-[15px] font-medium">
                Customer Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#0F1111] pb-[35px]">
        <p className="pt-[25px] pb-[12px] text-[#CCC] flex items-center justify-center text-sm gap-3">
          {" "}
          <TfiWorld /> English
        </p>
        <p className="py-[25px] text-white text-[15px] text-center">
          Already a customer?
          <Link to={"/signup"} className=" text-white text-[15px] ml-2">
            Sign in
          </Link>
        </p>
        <div>
          <div className="flex items-center">
            <p className="text-[#ccc] px-2 text-[11px]">Conditions of Use</p>
            <p className="text-[#ccc] px-2 text-[11px]">Privacy Notice</p>
            <p className="text-[#ccc] px-2 text-[11px]">Interest-Based Ads</p>
          </div>
          <div className="flex items-center justify-center mt-3 pb-[15px]">
            <p className="text-[#ccc] px-2 text-[11px] text-center">
              © 1996-2023, Amazon.com, Inc. and its affiliates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
