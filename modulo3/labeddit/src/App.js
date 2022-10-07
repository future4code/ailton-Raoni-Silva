import React from "react";
import FeedPage from "./pages/FeedPage/FeedPage";
import LoginPage from "../src/pages/LoginPage/LoginPage";
import PostPage from "../src/pages/PostPage/PostPage";
import SignUpPage from "../src/pages/SignUpPage/SignUpPage";
import Router  from "./routes/Routes";
import { ThemeProvider } from '@mui/material';
import theme from "./constants/theme";
import GlobalState from "./components/Global/GlobalState";


const App = () => {
  return <ThemeProvider theme={theme}>
    <GlobalState>
    <Router/>
    </GlobalState>
  </ThemeProvider>;
};

export default App;
