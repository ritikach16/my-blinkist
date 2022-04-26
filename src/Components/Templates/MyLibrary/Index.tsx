import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Tabsbar from "../../Organism/TabsBar/Index";

interface Props {
  header: React.ReactNode;
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
    marginTop: "50px",
    boxSizing: "border-box",
    width: "100%",
  },
  headStyle: {
    color: "#03314B",
    fontWeight: "700",
    fontSize: "36px",
    lineHeight: "45px",
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
});

const MyLibrary = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainContainer}>
        {props.header}
        <Container className={classes.container}>
          <Typography className={classes.headStyle}>My Library</Typography>
        </Container>
        <Container className={classes.container}>
          <Tabsbar />
        </Container>
        <Box sx={{marginTop: "100px"}}>{props.footer}</Box>
      </Box>
    </>
  );
};

export default MyLibrary;
