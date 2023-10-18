import React, { useState } from "react";
// images
import logo from "../assets/Images/Logo.png";

// icons
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaAngleRight, FaBars } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { BsMinecart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = ({ open, setOpen }) => {
  const navigate = useNavigate("");

  return (
    <>
      <div
        className="bg-primary w-full px-3 "
        // sticky top-0 left-0 pt-2 z-50
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center pt-2">
            <FaBars
              className="text-white text-2xl -mt-2 min-w-[14px]"
              onClick={() => setOpen(!open)}
            />
            <img
              src={logo}
              alt=""
              className="h-[50px]"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="text-white flex items-center gap-1">
            <div
              className="cursor-pointer flex items-center gap-1"
              // onClick={() => navigate("/login")}
            >
              <FaUserAlt className="text-lg" />
            </div>
            <div className="relative">
              <BsMinecart className="ml-6 text-3xl" />
              {/* <p className="text-orange font-bold absolute top-1 right-[10px] text-sm">
                3
              </p> */}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pl-3 text-base text-gray-900  rounded-lg "
            placeholder="Search Your product"
            required=""
          />
          <button
            type="submit"
            className=" absolute right-0 top-1/2 -translate-y-1/2 bg-lightYellow h-full w-[50px] flex items-center justify-center rounded-r-lg"
          >
            <svg
              className="w-4 h-4 text-gray-500 dark:text-#fff"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
        <div className="text-white mt-1">
          <p className="text-[11px]">Shop By</p>
          <div className="flex items-center gap-5 flex-wrap pb-5 -mt-1">
            <a href="/" className="font-medium">
              Category
            </a>
            <a href="/" className="font-medium">
              Your List
            </a>
            <a href="/" className="font-medium">
              Deals
            </a>
            <a href="/" className="font-medium">
              Sell
            </a>
          </div>
        </div>
      </div>
      <div className="px-2 py-3 bg-lightBlue text-white flex items-center flex-wrap">
        <HiOutlineMapPin className="text-2xl" />
        <p className="text-sm font-medium">
          Deliver to Vadadoriya - Surat 395007 ⌵
        </p>
      </div>
    </>
  );
};

export default Header;
