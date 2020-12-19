import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import { IoMdPin } from "react-icons/io";

export default function JobCard(props) {
  return (
    <div>
      <Card style={{ width: "15rem", marginTop: "1.5rem" }}>
        <Card.Body>
          <Card.Title style={{ color: "#43AFFF", fontWeight: "bold" }}>
            {props.title}
          </Card.Title>
          <Card.Text style={{ lineHeight: "1rem" }}>
            {props.description}
          </Card.Text>
          <CardGroup className="d-flex">
            <IoMdPin />
            <Card.Text>{props.location}</Card.Text>
            {props.isCandidate ? (
              <Button>Apply</Button>
            ) : (
              <Button>View Applications</Button>
            )}
          </CardGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
