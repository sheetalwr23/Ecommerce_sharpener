import { useState, useEffect } from "react";
import axios from "axios";
const useCategory = () => {
  const [categories, setCategories] = useState([]);
  // getcategory
  const getCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  return categories;
};
export default useCategory;
