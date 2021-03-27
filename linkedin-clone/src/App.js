import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
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
