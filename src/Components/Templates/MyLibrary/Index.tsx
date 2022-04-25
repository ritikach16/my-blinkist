import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Cards from "../../Organism/Cards/Index";
import TabsBar from "../../Organism/TabsBar/Index";

interface Props {
  header: React.ReactNode;
  footer: React.ReactNode;
}

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    boxSizing : "border-box",
  },
  container: {
    marginLeft: "220px",
    marginTop: "80px",
    boxSizing : "border-box",
    width: "80%",
  },
  headStyle: {
    color: "#03314B",
    fontFamily: "Cera Pro",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "45px",
    fontStyle: "normal",
    display: "flex",
    justifyContent: "flex-start",
  },
});

const MyLibrary = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainContainer}>
        {props.header}
        <Container className={classes.container}>
          <Typography className={classes.headStyle}>My Library</Typography>
          <Box>

              {/* <Cards /> */}
          </Box>
        </Container>
        {props.footer}
      </Box>
    </>
  );
};

export default MyLibrary;
