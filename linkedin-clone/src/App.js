import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./app.css";

function App() {
  return (
    <>
      <Header />
      <div className="app_body">
        <SideBar />
      </div>
    </>
  );
}

export default App;
