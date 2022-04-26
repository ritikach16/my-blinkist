import { Container } from "@mui/material";
import React from "react";
import BookDetail from "../../Organism/BookDetails/Index";

interface Props {
  bookImg: string;
  btnGrp: React.ReactNode;
  reads: string;
  author: string;
  title: string;
  subHead: string;
  synopsis: string;
  whoIsItFor: string;
  aboutAuthor: string;
  header: React.ReactNode;
  footer: React.ReactNode;
}

const BookDetailView = (props: Props) => {
  return (
    <>
      <Container>{props.header}</Container>
      <Container>
          {/* <BookDetail  /> */}
      </Container>
      {props.footer}
    </>
  );
};

export default BookDetailView;
