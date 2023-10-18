import React from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images
// sliderimage
import sliderimg from "../assets/Images/slider1.jpg";
import sliderimg2 from "../assets/Images/slider2.jpg";

import product1 from "../assets/Images/product-1.jpg";
import product2 from "../assets/Images/product-2.jpg";
import product3 from "../assets/Images/product-3.jpg";
import product4 from "../assets/Images/product-4.jpg";
import product5 from "../assets/Images/product-5.jpg";
// offerimages
import offerimage from "../assets/Images/Offer image.jpg";
import offerimage1 from "../assets/Images/offerIicon_imges1.jpg";
import offerimage2 from "../assets/Images/offerIicon_imges2.jpg";
import offerimage3 from "../assets/Images/offerIicon_imges3.jpg";
import offerimage4 from "../assets/Images/offerIicon_imges4.jpg";
// Blockbusterimg
import Blockbusterimg from "../assets/Images/Blockbusterimge.jpg";
import Blockbusterimg1 from "../assets/Images/Blockbusterimg1.jpg";
import Blockbusterimg2 from "../assets/Images/Blockbusterimg2.jpg";
import Blockbusterimg3 from "../assets/Images/Blockbusterimg3.jpg";
import Blockbusterimg4 from "../assets/Images/Blockbusterimg4.jpg";

// Product_images
import Produc_1 from "../assets/Images/product_1.jpg";
import Produc_2 from "../assets/Images/product_2.jpg";
import Produc_3 from "../assets/Images/product_3.jpg";
import Produc_4 from "../assets/Images/product_4.jpg";
import Singleproduct from "./Singleproduct";
import Footer from "../Layout/Footer";
import { useContext } from "react";
import GlobalContext from "../../Contexts/GlobalContext.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bestseller from "./Bestseller";

const Feature = [
  {
    image: product1,
    name: "prime",
  },
  {
    image: product2,
    name: "Deals",
  },
  {
    image: product3,
    name: "Mobiles",
  },
  {
    image: product4,
    name: "MiniTv",
  },
  {
    image: product5,
    name: "Fashion",
  },
  {
    image: product2,
    name: "Home",
  },
  {
    image: product1,
    name: "prime",
  },
  {
    image: product2,
    name: "Deals",
  },
  {
    image: product3,
    name: "Mobiles",
  },
  {
    image: product4,
    name: "MiniTv",
  },
  {
    image: product5,
    name: "Fashion",
  },
  {
    image: product2,
    name: "Home",
  },
];

const Home = () => {
  const navigator = useNavigate()
  const { allData, categories, filterByCategory } = useContext(GlobalContext)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div className="orangegradint w-full overflow-hidden">
      {/* silder */}
      <Slider {...settings}>
        <div className="w-full">
          <img src={sliderimg} alt="sliderimg" className="h-full" />
        </div>
        <div className="w-full">
          <img src={sliderimg2} alt="sliderimg" className="h-full" />
        </div>
      </Slider>

      {/* Feature section */}
      <div className="bg-orangegradint h-24 flex flex-nowrap overflow-x-auto py-2 px-3">
        {categories?.map((data, index) => {
          return (
            <>
              <div className="sm:min-w-[138px] min-w-[80px] flex justify-center items-center "
                onClick={async () => {
                  const datas = await filterByCategory(data?.name)
                  navigator('/singleproduct', { state: datas })
                }}>
                <a className="flex items-center justify-center">
                  <div className="py-1 min-h-[94px]">
                  <div className="h-[50px] w-[50px] rounded-full bg-white overflow-hidden flex items-center justify-center mx-auto">
                    <img
                      src={`https://educase.xyz/main_images/${data?.image}`} alt={data.name}
                      className="w-[76%] h-[76%] "
                    />
                  </div>
                    <p className="text-black text-xs text-center mt-1">
                      {data.name}
                    </p>
                  </div>
                </a>
              </div>
            </>
          );
        })}
      </div>
      {/* top Deal section */}
      <div className="p-2 px-3">
        <h2 className="text-lg font-semibold">
          Top deals width exchange offer
        </h2>
        <div className="bg-white p-2">
          <div>
            <img
              src={offerimage}
              alt="offerimage"
              className="w-full max-h-[220px] object-contain"
            />
          </div>
          <div className="flex items-center gap-3">
            <button class="p-1 bg-lightRed text-white text-xs">
              Up to 34% off
            </button>
            <p className="text-lightRed font-semibold text-xs">End in 19:26</p>
          </div>
          <p className="font-medium mt-1">
            Samsung Galaxy M34 | Starting from 14499 including additional offers
          </p>
          <div className="my-5 flex items-center justify-center gap-6">
            <a href="/">
              <img
                src={offerimage1}
                alt="offerimage1"
                className="w-[94px] h-[94px] object-contain"
              />
            </a>
            <a href="/">
              <img
                src={offerimage2}
                alt="offerimage2"
                className="w-[94px] h-[94px] object-contain"
              />
            </a>
            <a href="/">
              <img
                src={offerimage3}
                alt="offerimage3"
                className="w-[94px] h-[94px] object-contain"
              />
            </a>
            <a href="/">
              <img
                src={offerimage4}
                alt="offerimage4"
                className="w-[94px] h-[94px] object-contain"
              />
            </a>
          </div>
          <a href="/" className="text-skyblue font-medium">
            See All Deals
          </a>
        </div>
      </div>
      {/* Blockbuster deals */}
      <div className="p-2 px-3">
        <h2 className="text-lg font-semibold py-2 pl-1">Blockbuster deals</h2>
        <div className="bg-white p-2">
          <div>
            <img
              src={Blockbusterimg}
              alt="offerimage"
              className="w-full max-h-[220px] object-contain"
            />
          </div>
          <div className="flex items-center gap-3">
            <button class="p-1 bg-lightRed text-white text-xs">
              Up to 87% off
            </button>
            <p className="text-lightRed font-semibold text-xs">Prime Deal</p>
          </div>
          <p className="font-medium mt-1">
            All Clothing: Allen Solly, Peter England, Pepe Jeans and more
          </p>
          <div className="my-5 flex items-center justify-center gap-6">
            <a href="/">
              <img
                src={Blockbusterimg1}
                alt="Blockbusterimg1"
                className="w-[94px] h-[94px] object-contain"
              />
            </a>
            <a href="/">
              <img
                src={Blockbusterimg2}
                alt="Blockbusterimg2"
                className="w-[94px] h-[94px] object-contain"
              />
            </a>
            <a href="/">
              <img
                src={Blockbusterimg3}
                alt="Blockbusterimg3"
                className="w-[94px] h-[94px] object-contain"
              />
            </a>
            <a href="/">
              <img
                src={Blockbusterimg4}
                alt="Blockbusterimg4"
                className="w-[94px] h-[94px] object-contain"
              />
            </a>
          </div>
          <a href="/" className="text-skyblue font-medium">
            See All Deals
          </a>
        </div>
      </div>
      {/* product detals */}
      <div className="p-2 px-3">
        <h2 className="text-lg font-semibold py-2 pl-1">
          Budget picks for all
        </h2>
        <p className="text-base font-semibold py-2 pl-1">
          Under ₹299 + 20% cashback on first order
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-2">
          <ProductCard
            pro_image={Produc_1}
            pro_details={"Up to 65% off | Smart TVs"}
          />
          <ProductCard
            pro_image={Produc_2}
            pro_details={"₹4,599 | Echo Dot + Smart bulb combo"}
          />

          {/*           
          <ProductCard
            pro_image={Produc_1}
            pro_details={"Up to 65% off | Smart TVs"}
          />
          <ProductCard
            pro_image={Produc_2}
            pro_details={"₹4,599 | Echo Dot + Smart bulb combo"}
          /> */}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 bg-white py-2">
      {allData?.length > 0 &&
        allData?.map((item, index) => (
          <>
            <Bestseller
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
      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Home;
