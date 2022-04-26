import { Box, Container, Typography } from "@mui/material";
import bookData from "../../../AllData/BooksData";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import CardGroup from "../../Organism/CardGroup/Index";

interface Props {
  header: React.ReactNode;
  banner: React.ReactNode;
  searchBar: React.ReactNode;
  footer: React.ReactNode;
}

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    boxSizing: "border-box",
    padding: "0px",
  },
  container: {
    paddingLeft: "160px",
    marginTop: "70px",
    boxSizing: "border-box",
    width: "100%",
  },
  cardContainer: {
    paddingLeft: "140px",
    marginTop: "50px",
    boxSizing: "border-box",
    width: "100%",
  },
  headStyle: {
    color: "#03314B",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "30.17px",
    fontStyle: "normal",
    display: "flex",
    justifyContent: "flex-start",
    width: "500px",
  },
  tabsStyle: {
    marginTop: "40px",
    boxSizing: "border-box",
    width: "100%",
  },
  bannerStyles:{
    margin: "62px 0px",
  }
});

const Entrepreneurship = (props: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      {props.header}
      <Box className={classes.bannerStyles}>
        {props.banner}
      </Box>
      <Box>
        {props.searchBar}
      </Box>
      <Container className={classes.container}>
        <Typography className={classes.headStyle}>Trending blinks</Typography>
      </Container>
      <Container className={classes.cardContainer}>
       <CardGroup
         bookData={bookData}
         type = "trending"
         />
      </Container>
      <Container className={classes.container}>
        <Typography className={classes.headStyle}>Just added</Typography>
      </Container>
      <Container className={classes.cardContainer}>
       <CardGroup
         bookData={bookData}
         type = "justAdded"
         />
      </Container>
      <Container className={classes.container}>
        <Typography className={classes.headStyle}>Featured audio blinks</Typography>
      </Container>
      <Container className={classes.cardContainer}>
       <CardGroup
         bookData={bookData}
         type = "featured"
         />
      </Container>
      <Box sx={{ marginTop: "100px" }}>{props.footer}</Box>
    </Box>
  );
};

export default Entrepreneurship;
