import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Headerlogo from "./components/Header/Headerlogo";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Loginpage from "./pages/Login/Loginpage";
import Singuppage from "./pages/Signup/Singuppage";
import Error from "./pages/Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headerlogo />
        <Header linkOne="Login" linkTwo="signup" />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Loginpage />
          </Route>
          <Route path="/signup">
            <Singuppage />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>

        {/* <Home /> */}
        {/* <Loginpage /> */}

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
