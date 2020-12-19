import React from "react";
import { Button } from "react-bootstrap";

function Login() {
  return (
    <Button
      className="nav-item px-3"
      style={{ backgroundColor: "#506592" }}
      href="/login"
    >
      Login/Signup
    </Button>
  );
}

function Logout() {
  return (
    <Button
      className="nav-item px-3"
      style={{ backgroundColor: "#506592" }}
      href="/login"
    >
      Logout
    </Button>
  );
}
export default function LoginSignupBtn(props) {
  if (props.isLoggedIn) {
    return <Logout />;
  } else {
    return <Login />;
  }
}
