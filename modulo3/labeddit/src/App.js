import React from "react";
import FeedPage from "./pages/FeedPage/FeedPage";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import PostPage from "../src/pages/PostPage/PostPage";
import SignUpPage from "../src/pages/SignUpPage/SignUpPage";
import Router  from "./routes/Routes";
import { ThemeProvider } from '@mui/material';
import theme from "./constants/theme";


const App = () => {
  return <ThemeProvider theme={theme}>
    <Router/>
  </ThemeProvider>;
};

export default App;
