import axios from "axios";
import { useState, useEffect } from "react";
const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const useRequest = (method, url, option) => {
  const [data, setData] = useState();
  useEffect(() => {
    const request = async (method, url, option) => {
      try {
        if (method === "get") {
          const res = await instance.get(url, option);
          setData(res.data);
        } else if (method === "post") {
          //
        }
      } catch (err) {
        console.log("request not found");
      }
    };

    request(method, url, option);
  }, []);

  return [data];
};
export default useRequest;
