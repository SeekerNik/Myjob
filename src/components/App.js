import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import Recruiter from "./Recruiter";
import Candidate from "./Candidate";
import { Navbar, NavbarBrand } from "react-bootstrap";
import "../index.css";
import LoginSignupBtn from "./LoginSignupBtn";

function App() {
  return (
    <div class="main">
      <div class="upper-half">
        <Navbar
          style={{ borderBottom: "1px solid", color: "white", margin: "0 5%" }}
        >
          <NavbarBrand href="/">
            <span style={{ color: "white" }}>My</span>
            <span style={{ color: "#43AFFF" }}>Jobs</span>
          </NavbarBrand>
          <div style={{ margin: "0 40%" }}></div>
          <LoginSignupBtn isLoggedIn={false}/>
        </Navbar>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/recruiter" component={Recruiter} />
              <PrivateRoute path="/candidate" component={Candidate} />
              <Route path="/" exact component={Home}></Route>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
      <div class="lower-half"></div>
    </div>
  );
}

export default App;
