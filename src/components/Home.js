import React from "react";
import { Card, CardDeck } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <div className="welcome">
        <h1 style={{ color: "white" }}>Welcome to </h1>
        <br></br>
        <h1>
          <span style={{ color: "white" }}>My</span>
          <span style={{ color: "#43AFFF" }}>Jobs</span>
        </h1>
      </div>
      <div className="why-us">
        <h5>Why Us</h5>
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: "#43AFFF", fontWeight: "bold" }}>
                Card title
              </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: "#43AFFF", fontWeight: "bold" }}>
                Card title
              </Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: "#43AFFF", fontWeight: "bold" }}>
                Card title
              </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}
