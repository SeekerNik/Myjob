import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Col, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passRef = useRef();
  const passConfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState(0);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passRef.current.value !== passConfRef.current.value) {
      return setError("Passwords do not match");
    }
    console.log(role);
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value);
      if (role === "Recruiter") {
        history.push("/recruiter");
      } else {
        history.push("/candidate");
      }
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  const userRole = (e) => {
    setRole(e.target.value);
  };
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="w-100" style={{ maxWidth: "50vh" }}>
        <Card>
          <Card.Body>
            <h2>SignUp</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <div onChange={userRole}>
                <input type="radio" value="Recruiter" />
                Recruiter
                <input type="radio" value="Candidate" />
                Candidate
              </div>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" required></Form.Control>
              </Form.Group>

              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passRef} required />
                </Form.Group>
                <Form.Group as={Col} id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type="password" ref={passConfRef} required />
                </Form.Group>
              </Form.Row>

              <Form.Group id="skills">
                <Form.Label>Skills</Form.Label>
                <Form.Control type="text"></Form.Control>
              </Form.Group>
              <Form.Group className="align-items-center justify-content-center d-flex">
                <Button
                  disabled={loading}
                  className="w-50"
                  style={{
                    backgroundColor: "#43AFFF",
                    border: "transparent",
                  }}
                  type="submit"
                >
                  Sign Up
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </Container>
  );
}
