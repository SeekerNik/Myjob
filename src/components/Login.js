import React, { useRef, useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { db } from "../firebase";

export default function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  let role = "";

  async function handleSubmit(e) {
    e.preventDefault();
    // db.collection("userdata")
    //   .get()
    //   .then(function (doc) {
    //     if (doc.exist) {
    //       var mail = doc.data();
    //       console.log(mail);
    //     }
    //   });
    db.collection("userdata")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.id === emailRef.current.value) {
            role = doc.data().role;
          }
        });
      });
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passRef.current.value);
    } catch {
      setError("Failed to log in");
    }
    if (role === "Recruiter") {
      history.push("/recruiter");
    } else {
      history.push("/candidate");
    }
    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "60vh" }}>
        <Card>
          <Card.Body>
            <h4>Login</h4>
            <br />
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
            <div className="w-100 text-center mt-2">
              New to MyJobs? <Link to="/signup">Create an account</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
