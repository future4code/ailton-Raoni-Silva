import axios from "axios";
import { Navigate } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import { goToPage } from "../routes/coordinator";



export const login = (body, clear, navigate) => {
    axios
      .post(`${BASE_URL}/users/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToPage(navigate, "feed")
       
      })
      .catch((err) => {
        alert( err.response.data);
      });
  };


  export const signUp = (body, clear, navigate) => {
    axios
      .post(`${BASE_URL}/users/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToPage(navigate, "/feed")
       
        
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };