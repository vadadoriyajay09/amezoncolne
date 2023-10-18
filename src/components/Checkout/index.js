import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate("");
  const {state} = useLocation()
  return (
    <div className="px-3  mx-auto mt-3 flex flex-col gap-3 pb-5">
      <select className="w-full py-2.5 border border-black rounded-lg shadow-2xl bg-white pl-3 font-medium">
        <option value="">India</option>
        <option value="">India</option>
        <option value="">India</option>
        <option value="">India</option>
        <option value="">India</option>
      </select>
      <div>
        <p className="font-medium text-lg">Full Name (First and Last name)</p>
        <input
          type="text"
          name="text"
          id="text"
          className="block w-full rounded border border-black font-medium pl-3 placeholder:text-lg placeholder:text-lightBlue placeholder:font-medium text-lg  py-1.5  shadow-sm mt-2"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <p className="font-medium text-lg">Mobile Number</p>
        <input
          type="tel"
          name="text"
          id="text"
          className="block w-full rounded border border-black font-medium pl-3 placeholder:text-lg placeholder:text-lightBlue placeholder:font-medium text-lg  py-1.5  shadow-sm mt-2"
          placeholder="Enter your number"
          value={"7046292419"}
        />
      </div>
      <div>
        <p className="font-medium text-lg">
          Flat, HouseNo., Building, Company, Apartment
        </p>
        <input
          type="text"
          className="block w-full rounded border border-black font-medium pl-3 placeholder:text-lg placeholder:text-lightBlue placeholder:font-medium text-lg  py-1.5  shadow-sm mt-2"
          placeholder="Enter your number"
          value={"221 anupam Business hub, Yogichowk"}
        />
      </div>
      <div>
        <p className="font-medium text-lg">Area, Street, Sector, Village</p>
        <input
          type="text"
          className="block w-full rounded border border-black font-medium pl-3 placeholder:text-lg placeholder:text-lightBlue placeholder:font-medium text-lg  py-1.5  shadow-sm mt-2"
          placeholder="Enter your number"
          value={"Surat"}
        />
      </div>
      <div>
        <p className="font-medium text-lg">Landmark</p>
        <input
          type="text"
          className="block w-full rounded border border-black font-medium pl-3 placeholder:text-lg placeholder:text-lightBlue placeholder:font-medium text-lg  py-1.5  shadow-sm mt-2"
          placeholder="Enter your number"
          value={"Yogichowk"}
        />
      </div>
      <div>
        <p className="font-medium text-lg">Pincode</p>
        <input
          type="text"
          className="block w-full rounded border border-black font-medium pl-3 placeholder:text-lg placeholder:text-lightBlue placeholder:font-medium text-lg  py-1.5  shadow-sm mt-2"
          placeholder="Enter your Pincode"
          value={"395006"}
        />
      </div>
      <div>
        <p className="font-medium text-lg">Twon/City</p>
        <input
          type="text"
          className="block w-full rounded border border-black font-medium pl-3 placeholder:text-lg placeholder:text-lightBlue placeholder:font-medium text-lg  py-1.5  shadow-sm mt-2"
          placeholder="Enter your City"
          value={"Surat"}
        />
      </div>
      <select className="w-full py-2.5 border border-black rounded-lg shadow-2xl bg-white pl-3 font-medium">
        <option value="Gujart">Gujart</option>
        <option value="Gujart">Gujart</option>
        <option value="Gujart">Gujart</option>
        <option value="Gujart">Gujart</option>
        <option value="Gujart">Gujart</option>
      </select>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-5 w-5 rounded-lg border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
        <p className="ml-2 font-medium">Mack this my default address</p>
      </div>
      <button
        className="w-full h-[50px] bg-[#FFD814] rounded-lg font-medium"
        onClick={() => navigate("/payment",{state:state})}
      >
        Use this address
      </button>
    </div>
  );
};

export default Checkout;
