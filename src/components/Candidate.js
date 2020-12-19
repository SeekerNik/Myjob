import React from "react";
import { Container, CardDeck } from "react-bootstrap";
import JobCard from "./JobCard";
export default function Candidate(props) {
  console.log(props);
  return (
    <Container>
      <h5>Jobs for you</h5>
      <CardDeck>
        <JobCard
          title={"UI/UX"}
          description={
            "cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi"
          }
          location={"Delhi"}
          isCandidate={true}
        />
        <JobCard
          title={"UI/UX"}
          description={
            "cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi"
          }
          location={"Delhi"}
          isCandidate={true}
        />
        <JobCard
          title={"UI/UX"}
          description={
            "cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi"
          }
          location={"Delhi"}
          isCandidate={true}
        />
        <JobCard
          title={"UI/UX"}
          description={
            "cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi"
          }
          location={"Delhi"}
          isCandidate={true}
        />
      </CardDeck>
    </Container>
  );
}
