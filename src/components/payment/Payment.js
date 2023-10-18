import React from "react";
// images
import Upi from "../assets/Images/upi.webp";
import Bank from "../assets/Images/bank.jpg";
import Dollar from "../assets/Images/dollar.png";
import Googlepay from "../assets/Images/google-pay-2038779-1721670.webp";
import Phonepay from "../assets/Images/phonepe.app-256.png";
import Paytm from "../assets/Images/paytm.png";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const {state} = useLocation()

  const UPI_ID = "fcbiz5cdu9l@freecharge";
  const ammount = state?.price;

  const generateRandomOrderNumber = () => {
    return Math.floor(Math.random() * 10000000000); // Generates a random 10-digit order number
  };
  const openPhonePayURL = (event, index) => {
    // event.preventdefault();
    let orderNumber = generateRandomOrderNumber();
    const URL = `${index}pay?pa=${UPI_ID}&am=${ammount}&pn=online%20store&tn=order${orderNumber}&tr=${orderNumber}&mc=0000`;
    window.open(URL);
  };

  return (
    <div className="bg-white px-3 pb-[60px]">
      <h2 className="font-bold text-left text-xl py-4">
        Select payment method
      </h2>

      <div>
        <p className="text-[#595B5A] text-sm font-bold">AMAZON PAY</p>
        <label
          htmlFor="upi"
          className="w-full bg-[#F7F7F7] mt-2 py-[12px] rounded-[7px] border border-[#D5D9D9] px-4  flex items-center"
          onClick={(event) => {
            openPhonePayURL(event, "upi://");
          }}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <input
                id="upi"
                name="payment"
                type="radio"
                className="h-[23px] w-[23px] border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <h2 className="text-[17px] ml-3 font-semibold">UPI</h2>
            </div>
            <div className="w-[25px] ml-auto">
              <img src={Upi} alt="upi" className="w-full" />
            </div>
          </div>
        </label>
      </div>
      <div className="mt-3">
        <div className="flex flex-col">
          <p className="text-[#595B5A] text-sm font-bold uppercase">
            More Ways To Pay
          </p>
          <div className="flex flex-col rounded-[7px] border border-[#D5D9D9] divide-y-2 divide-[#D5D9D9]">
            <label
              htmlFor="NetBanking"
              className="w-full bg-[#F7F7F7] mt-2 py-[12px] px-4  flex items-center cursor-not-allowed"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <input
                    id="NetBanking"
                    name="payment"
                    type="radio"
                    disabled
                    className="h-[23px] w-[23px] border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <h2 className="text-[17px] ml-3 font-semibold text-[#919191]">
                    Net Banking
                    <p className="text-[10px] text-[#0f0f0fc7]">
                      Unavailable for this payment
                    </p>
                  </h2>
                </div>
                <div className="w-[25px] ml-auto">
                  <img
                    src={Bank}
                    alt="Bank"
                    className="w-full mix-blend-multiply"
                  />
                </div>
              </div>
            </label>
            <label
              htmlFor="Cash"
              className="w-full bg-[#F7F7F7] py-[12px] px-4  flex items-center cursor-not-allowed"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <input
                    id="Cash"
                    name="payment"
                    type="radio"
                    className="h-[23px] w-[23px] border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    disabled
                  />
                  <h2 className="text-[15px] ml-3 font-semibold text-[#919191]">
                    Cash on Delivery/Pay on Delivery
                    <p className="text-[10px] text-[#0f0f0fc7]">
                      Unavailable for this payment
                    </p>
                  </h2>
                </div>
                <div className="w-[25px] ml-auto">
                  <img
                    src={Dollar}
                    alt="Dollar_icon"
                    className="w-full mix-blend-multiply"
                  />
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex flex-col">
          <p className="text-[#595B5A] text-sm font-bold uppercase">
            Other Upi app
          </p>
          <div className="flex flex-col rounded-[7px] border border-[#D5D9D9] divide-y-2 divide-[#D5D9D9]">
            <label
              htmlFor="Googlepay"
              className="w-full bg-[#F7F7F7] py-[17px] px-4 max-h-[50px] flex items-center"
              onClick={(event) => {
                openPhonePayURL(event, "gpay://upi/");
              }}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <input
                    id="Googlepay"
                    name="payment"
                    type="radio"
                    className="h-[23px] w-[23px] border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <h2 className="text-[15px] ml-3 font-semibold">Google pay</h2>
                </div>
                <div className="w-[25px] ml-auto">
                  <img src={Googlepay} alt="Google pay" className="w-full" />
                </div>
              </div>
            </label>

            <label
              htmlFor="Phonepay"
              className="w-full bg-[#F7F7F7] py-[17px] px-4 max-h-[50px] flex items-center"
              onClick={(event) => {
                openPhonePayURL(event, "phonepe://");
              }}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <input
                    id="Phonepay"
                    name="payment"
                    type="radio"
                    className="h-[23px] w-[23px] border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <h2 className="text-[15px] ml-3 font-semibold">Phone pay</h2>
                </div>
                <div className="w-[25px] ml-auto">
                  <img src={Phonepay} alt="Phonepay" className="w-full" />
                </div>
              </div>
            </label>

            <label
              htmlFor="Paytmpay"
              className="w-full bg-[#F7F7F7] py-[17px] px-4 max-h-[50px] flex items-center"
              onClick={(event) => {
                openPhonePayURL(event, "paytmmp://");
              }}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <input
                    id="Paytmpay"
                    name="payment"
                    type="radio"
                    className="h-[23px] w-[23px] border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <h2 className="text-[15px] ml-3 font-semibold">Paytm pay</h2>
                </div>
                <div className="w-[25px] ml-auto">
                  <img src={Paytm} alt="Paytm" className="w-full" />
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <button
        className="h-[50px] bg-[#FFD814] rounded-lg font-medium fixed bottom-0 left-0 mx-1"
        style={{ width: "-webkit-fill-available" }}
      >
        Continue
      </button>
    </div>
  );
};

export default Payment;
