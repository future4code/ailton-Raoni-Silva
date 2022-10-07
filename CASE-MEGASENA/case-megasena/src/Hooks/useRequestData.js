import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initalData, url) => {
  const [data, setData] = useState(initalData);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Aconteceu um erro!");
      });
  }, [url]);

  return data;
};

export default useRequestData;
