import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import GlobalContext from "../../Contexts/GlobalContext.js";

const Sidebar = ({ open, setOpen }) => {
  const navigator = useNavigate()
  const { HandleProduct, allData, categories, filterByCategory } = useContext(GlobalContext)

  return (
    <>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 max-w-[400px] w-[80%] overflow-y-visible bg-[#E3E6E6] z-50">
        <div className="w-full relative">
          <button
            className="text-lg absolute top-2 bg-black rounded-md -right-8 z-30 text-white"
            onClick={() => setOpen(false)}
          >
            <RxCross2 className="text-2xl" />
          </button>
        </div>
        <div className="h-[128px] bg-primary relative">
          <div className="cursor-pointer flex items-center gap-1 text-white absolute right-3 top-2">
        
            <FaUserAlt className="text-lg" />
          </div>
          <div className="absolute bottom-0 pl-5">
            <h2 className="text-[20px] text-white font-medium">Browse</h2>
            <h2 className="text-[20px] text-white font-medium">Amazon</h2>
          </div>
        </div>
        <div className="bg-white pl-5 h-[55px] flex items-center justify-between pr-4">
          <h2 className="text-[19px] text-black font-medium">Amazon Home</h2>
          <AiOutlineHome className="text-xl" />
        </div>
        <div className="bg-white pl-5 flex items-center justify-between mt-1 pb-4">
          <div>
            <h2 className="text-[19px] text-black font-medium py-4">
              Trending
            </h2>
            <Link to={"/"} className="text-base">
              Movers & Shakers
            </Link>
          </div>
        </div>
        <div className="bg-white pl-5 flex mt-1 pb-4 h-full">
          <div>
            <h2 className="text-[19px] text-black font-medium py-4">
              Top Departments
            </h2>
            <Link className="text-base font-normal py-[15px] block">Home</Link>
            {categories?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="text-base font-normal py-[15px] block" onClick={async () => {
                    const data = await filterByCategory(item?.name)
                    navigator('/singleproduct', { state: data })
                    setOpen(false)
                  }}>{item?.name}</div>
                </div>
              )
            })}
            <div className="text-base font-normal py-[15px] block"
              onClick={() => {
                navigator('/singleproduct', { state: allData })
                setOpen(false)
              }}>
              See All
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
