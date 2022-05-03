import { Container } from "@mui/material";
import React from "react";

interface Props {
  bookDetailOrg: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}

const BookDetailView = (props: Props) => {
  return (
    <>
      <Container>{props.header}</Container>
      <Container style={{marginTop: "15px"}}>
          {props.bookDetailOrg}
      </Container>
      {props.footer}
    </>
  );
};

export default BookDetailView;
