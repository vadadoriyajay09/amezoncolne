import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [allData, setAllData] = useState([])
  const [categories, setCategories] = useState([])
  const [filteredData, setFilteredData] = useState([]); // Initialize with an empty array

  const [global, setGlobal] = useState({
    serverURL: "https://educase.xyz/api",
  });


  const invokeServer = useCallback(
    async (method, route, data) => {
      if (method === "post") {
        return axios.post(global.serverURL + route, data);
      } else if (method === "get") {
        return axios.get(global.serverURL + route);
      } else if (method === "put") {
        return axios.put(global.serverURL + route, data);
      } else if (method === "delete") {
        return axios.delete(global.serverURL + route);
      }
    },
    [global.serverURL]
  );

  // const HandleProduct = async () => {
  //   try {
  //     // Fetch product data
  //     const result = await invokeServer("get", "/products");

  //     if (result?.data?.products) {
  //       setAllData(result?.data?.products)
  //       // Extract categories from the product data
  //       const categories = result.data.products.reduce((acc, product) => {
  //         product.categories.forEach((category) => {
  //           if (!acc.includes(category.name)) {
  //             acc.push(category.name);
  //           }
  //         });
  //         return acc;
  //       }, []);

  //       // Set the categories in state
  //       setCategories(categories);
  //     }
  //   } catch (error) {
  //     console.log(error, "====>>>>");
  //   }
  // }

  const HandleProduct = async () => {
    try {
      // Fetch product data
      const result = await invokeServer("get", "/products");

      if (result?.data?.products) {
        setAllData(result?.data?.products)
        // Extract categories from the product data with both name and image
        const categories = result?.data?.products?.reduce((acc, product) => {

          product?.categories?.forEach((category) => {
            const existingCategory = acc.find((item) => item.name === category.name);
            if (!existingCategory) {
              acc.push({
                name: category.name,
                image: product.main_image,
              });
            }
          });
          return acc;
        }, []);

        // Set the categories in state
        setCategories(categories);
      }
    } catch (error) {
      console.log(error, "====>>>>");
    }
  }

  useEffect(() => {
    HandleProduct()
  }, [])

  function filterByCategory(categoryName) {
    const filteredData = allData?.filter((product) => {
      return product.categories.some((category) => category?.name === categoryName);
    });
    setFilteredData(filteredData); // Set the filtered data in the state
    return filteredData; // Return the filtered data
  }

  return (
    <GlobalContext.Provider
      value={{
        invokeServer,
        HandleProduct,
        allData,
        categories,
        filterByCategory,
        filteredData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };