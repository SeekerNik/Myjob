import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
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
            <h5>Forgot your password?</h5>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <p>
              Enter the email associated with your account and we'll send you
              instructions to reset your password
            </p>

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <br />
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
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
