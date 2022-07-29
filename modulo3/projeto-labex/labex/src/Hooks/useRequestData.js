import axios from "axios";
import { useState, useEffect } from "react";


export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");


  useEffect(() => {
    getTrips(url);
  }, [url]);

  const getTrips = (url) => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.trips);
      })
      .catch(() => {});
  };
  return [data, getTrips];
};
