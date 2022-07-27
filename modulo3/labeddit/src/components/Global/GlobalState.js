import React, { useContext, useState } from "react";
import BASE_URL from "./../../constants/url";
import { GlobalContext } from "../Global/GlobalContext";
import axios from "axios";


const GlobalState = (props) => {
  const Provider = GlobalContext.Provider;
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

 


 const values = {
   posts,
   setPosts
 }

  return <Provider value={values} >{props.children} </Provider>;
};

export default GlobalState;
