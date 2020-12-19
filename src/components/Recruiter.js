import React from "react";
import { CardDeck, Container } from "react-bootstrap";
import JobCard from "./JobCard";
import "./Recruiter.css";

function Recruiter(props) {
  console.log(props);
  return (
    <Container>
      <h5>Jobs posted by you</h5>
      <CardDeck>
        <JobCard
          title={"UI/UX"}
          description={
            "cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi"
          }
          location={"Delhi"}
          role={"Recruiter"}
        />
        <JobCard
          title={"UI/UX"}
          description={
            "cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi"
          }
          location={"Delhi"}
          role={"Recruiter"}
        />
        <JobCard
          title={"UI/UX"}
          description={
            "cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi"
          }
          location={"Delhi"}
          role={"Recruiter"}
        />
        <JobCard
          title={"UI/UX"}
          description={
            "cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi"
          }
          location={"Delhi"}
          role={"Recruiter"}
        />
      </CardDeck>
    </Container>
  );
}

export default Recruiter;
