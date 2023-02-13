import axios from "axios";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  return [categories, setCategories];
};
