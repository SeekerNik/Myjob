import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Col, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { db } from "../firebase";

export default function Signup() {
  const emailRef = useRef();
  const nameRef = useRef();
  const skillRef = useRef();
  const passRef = useRef();
  const passConfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passRef.current.value !== passConfRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value);

      db.collection("userdata")
        .doc(emailRef.current.value)
        .set({
          fullname: nameRef.current.value,
          email: emailRef.current.value,
          skills: skillRef.current.value,
          role: role,
        })
        .then(() => {
          alert("Success");
        })
        .catch(() => {
          alert("Failure");
        });

      if (role === "Recruiter") {
        history.push("/recruiter");
      } else {
        history.push("/candidate");
      }
    } catch (error) {
      setError(error.message);
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
      <div className="w-100" style={{ maxWidth: "60vh" }}>
        <Card>
          <Card.Body>
            <h4>SignUp</h4>
            <br />
            {error && <Alert variant="danger">{error}</Alert>}
            <h6>I'm a*</h6>
            <Form onSubmit={handleSubmit}>
              <div onChange={userRole}>
                <input type="radio" value="Recruiter" name="Role" required />
                Recruiter
                <input type="radio" value="Candidate" name="Role" />
                Candidate
              </div>
              <Form.Group>
                <Form.Label>Full Name*</Form.Label>
                <Form.Control
                  type="text"
                  ref={nameRef}
                  required
                  placeholder="Enter your full name"
                ></Form.Control>
              </Form.Group>

              <Form.Group id="email">
                <Form.Label>Email Address*</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} id="password">
                  <Form.Label>Create Password*</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passRef}
                    required
                    placeholder="Enter your password"
                  />
                </Form.Group>
                <Form.Group as={Col} id="password-confirm">
                  <Form.Label>Confirm Password*</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passConfRef}
                    required
                    placeholder="Enter your password"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group id="skills">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  type="text"
                  ref={skillRef}
                  placeholder="Enter comma separated skills"
                ></Form.Control>
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
            <div className="w-100 text-center mt-2">
              Have an account? <Link to="/login">Log In</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
