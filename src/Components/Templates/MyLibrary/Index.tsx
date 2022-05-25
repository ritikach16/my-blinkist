import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Tabsbar from "../../Organism/TabsBar/Index";
import theme from "../../Theme/Theme";

interface Props {
  header: React.ReactNode;
  footer: React.ReactNode;
}

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    boxSizing: "border-box",
    padding: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    paddingLeft: "160px",
    marginTop: "50px",
    boxSizing: "border-box",
    width: "970px !important",
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
    <ThemeProvider theme={theme}>
      <Box className={classes.mainContainer}>
        {props.header}
        <Container className={classes.container}>
          <Typography variant="h1" className={classes.headStyle}>My Library</Typography>
        </Container>
        <Container className={classes.container}>
          <Tabsbar />
        </Container>
      </Box>
        <Box sx={{marginTop: "100px"}}>{props.footer}</Box>
      </ThemeProvider>
    </>
  );
};

export default MyLibrary;
