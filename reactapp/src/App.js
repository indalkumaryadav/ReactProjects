import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/HomePage/Home";
import GlobalStyle from "./globalStyle";
import NavBar from "./components/header/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
