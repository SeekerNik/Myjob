import { React } from "react";
import { CardDeck, Container } from "react-bootstrap";
import JobCard from "./JobCard";
import "./Recruiter.css";
import { useAuth } from "../contexts/AuthContext";
// import { db } from "../firebase";

function Recruiter(props) {
  const { currentUser } = useAuth();
  console.log(currentUser);

  // var docRef = db.collection("userdata").doc(currentUser.email);

  // docRef
  //   .get()
  //   .then(function (doc) {
  //     if (doc.exists) {
  //       console.log("Document data:", doc.data().Jobs);
  //     } else {
  //       console.log("No such document!");
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log("Error getting document:", error);
  //   });

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
