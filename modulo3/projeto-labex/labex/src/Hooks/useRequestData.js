import axios from "axios";
import { useState, useEffect } from "react";

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.trips);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return [data, error];
};
