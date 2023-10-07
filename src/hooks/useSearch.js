import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1";
const API_KEY = process.env.REACT_APP_SEACRH_KEY;
const SEACRH_ENGINE_KEY = process.env.REACT_APP_SEACRH_ENGINE_KEY;

const useSearch = (searchTerm) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&cx=${SEACRH_ENGINE_KEY}&q=${searchTerm}`
      );
      setData(response?.data);
    };

    fetchData();
  }, [searchTerm]);
  // console.log(API_KEY);
  // console.log(SEACRH_ENGINE_KEY);
  return {
    data,
  };
};

export default useSearch;
