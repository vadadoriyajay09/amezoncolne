import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Homepage/Index";
import Login from "./components/auth/Login";
import ProductDetails from "./components/Homepage/ProductDetails";
import SignUp from "./components/auth/SignUp";
import Header from "./components/Layout/Header";
import Singleproducts from "./components/Homepage/Singleproducts";
import Checkout from "./components/Checkout";
import Sidebar from "./components/Layout/Sidebar";
import Payment from "./components/payment/Payment";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <Header open={open} setOpen={setOpen} />
      {open && <Sidebar setOpen={setOpen} open={open} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/singleproduct" element={<Singleproducts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// import React from 'react';

// const App = () => {
//   const UPI_ID = "fcbiz5cdu9l@freecharge"
//   const ammount = "200"

//   const generateRandomOrderNumber = () => {
//     return Math.floor(Math.random() * 10000000000); // Generates a random 10-digit order number
//   };
//   const openPhonePayURL = (event, index) => {
//     // event.preventdefault();
//     let orderNumber = generateRandomOrderNumber();
//     const URL = `${index}pay?pa=${UPI_ID}&am=${ammount}&pn=online%20store&tn=order${orderNumber}&tr=${orderNumber}&mc=0000`;
//     window.open(URL);
//   };
//   return (
//     <div>
//       <button onClick={(event) => { openPhonePayURL(event, 'gpay://upi/') }}>Google pay</button>
//       <button onClick={(event) => { openPhonePayURL(event, 'phonepe://') }}>Phone pay</button>
//       <button onClick={(event) => { openPhonePayURL(event, 'paytmmp://') }}>Paytm pay</button>
//       <button onClick={(event) => { openPhonePayURL(event, 'upi://') }}>Bhim UPI</button>
//     </div>
//   );
// };
// export default App;