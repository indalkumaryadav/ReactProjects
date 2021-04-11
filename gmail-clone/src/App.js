import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Route, Switch } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";

const App = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <SideBar />
        <Switch>
          <Route exact path="/mail" component={Mail} />
          <Route exact path="/" component={EmailList} />
        </Switch>
      </div>
    </>
  );
};

export default App;
