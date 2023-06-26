import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (configParams) => {
  axios.defaults.baseURL = "api/v1";
  const [res, setRes] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataUsingAxios = async () => {
      const res = await axios.request(configParams);
      try {
        setRes(res);
      } catch (error) {
        setErr(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataUsingAxios(configParams);
  }, []);

  return [res, err, loading];
};

export default useAxios;
