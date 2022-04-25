import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Cards from "../Cards/Index";

interface Props {
  id?: number;
  title?: string;
  author?: string;
  image?: string;
  reads?: string;
  minutes?: string;
  addToLib?: boolean;
  isFinished?: boolean;
  readAgain?: boolean;
  type: {
    trending: boolean;
    justAdded: boolean;
    featured: boolean;
  };
}

interface CardGroupProps {
  bookData: Array<Props>;
  title: string;
  type: string;
}

const useStyles = makeStyles({
    container: {
        display : "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
    }
})

const CardGroup = (props: CardGroupProps) => {

    const classes = useStyles();
  const [displayBookDetails, setDisplayBookDetails] = useState(props.bookData);

  useEffect(() => {
    if (props.type === "trending") {
      setDisplayBookDetails(
        displayBookDetails.filter((books) => books.type.trending)
      );
    } else {
      if (props.type === "featured") {
        setDisplayBookDetails(
          displayBookDetails.filter((books) => books.type.featured)
        );
      } else {
        setDisplayBookDetails(
          displayBookDetails.filter((books) => books.type.justAdded)
        );
      }
    }
  }, [displayBookDetails, props.type]);

  const getBookDetails = (num : number) => {
     // route to bookdetail page;
  }

  return (
    <Box className={classes.container}>
      {displayBookDetails.slice(0).map((books, key) => {
        return (
          <Cards
            key={key}
            num={key}
            title={books.title}
            author={books.author}
            reads={books.reads}
            minutes={books.minutes}
            image = {books.image}
            addToLib = {true}
            onClick = {() => getBookDetails(key)}
          />
        );
      })}
    </Box>
  );
};

export default CardGroup;
