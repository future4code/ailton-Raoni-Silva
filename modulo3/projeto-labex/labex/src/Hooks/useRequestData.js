import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");

  useEffect(() => {
    getTrip(url);
  }, []);

  const getTrip = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.trips);
      })
      .catch((err) => {
        setError(err);
      });
  };
  return [data, error, getTrip];
};
