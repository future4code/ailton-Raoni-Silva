import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import ListTripsPage from "./Pages/ListTripsPage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Home />
      <ListTripsPage/>
      <LoginPage/>
    </div>
  );
}

export default App;
