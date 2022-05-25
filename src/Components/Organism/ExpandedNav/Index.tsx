import React from "react";
import { Container, createTheme, ThemeProvider, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import IconButtons from "../../Molecule/IconButtons/Index";
import expandedNavItems from "../../../AllData/ExpandedNavData";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  myContainer: {
    boxSizing: "border-box",
    height: "398px",
    background: "#F1F6F4",
    color: "#6D787E",
    zIndex: "10",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: "86px",
  },
  subContainers: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "10px",
    width: "990px !important"
  },
  subCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "initial",
    width: "900px",
    gap: "200px",
    padding: "37px 0px 25px 40px",
    borderBottom: "1px solid #042330",
  },
  iconStyle: {
    color: "#042330",
    width: "16px",
    height: "22.05px",
  },
  textStyle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#6D787E",
    marginLeft: "6px",
  },
  headingStyle: {
    color: "#6D787E",
    fontWeight: "500",
    lineHeight: "20px",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      color: "#116BE9",
    },
    "&:focus": {
      color: "#116BE9",
    },
    "&:active": {
      color: "#116BE9",
    },
  },
});

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Cera Pro",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "20.11px",
        },
        body1: {
          fontFamily: "Cera Pro",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "20.11px",
        }
      }
    }
  }
})

const ExpandedNav = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    // navigate to entrepreneurship
    navigate("/entrepreneur")
  }

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.myContainer}>
      <Box className={classes.subCont}>
        <Typography variant="body1" sx={{color: "#116BE9"}} className={classes.headingStyle}>
          Explore by category
        </Typography>
        <Typography variant="body1" className={classes.headingStyle}>
          See recently added title
        </Typography>
        <Typography variant="body1" className={classes.headingStyle}>
          See popular titles
        </Typography>
      </Box>
      <Container className={classes.subContainers}>
        <Container>
          {expandedNavItems[0].map((item, key) => {
            return (
              <IconButtons
                style={{ display: "flex", margin: "5px", padding: "10px", cursor: "pointer" }}
                className={classes.textStyle}
                onClick = {handleClick}
                startIcon={
                  item.iconImage 
                }
                variant = "body2"
                children={item.title}
                key={key}
              ></IconButtons>
            );
          })}
        </Container>
        <Container>
          {expandedNavItems[1].map((item, key) => {
            return (
              <IconButtons
                style={{ display: "flex", margin: "5px", padding: "10px" }}
                className={classes.textStyle}
                startIcon={item.iconImage}
                children={item.title}
                key={key}
              ></IconButtons>
            );
          })}
        </Container>
        <Container>
          {expandedNavItems[2].map((item, key) => {
            return (
              <IconButtons
                style={{ display: "flex", margin: "5px", padding: "10px" }}
                className={classes.textStyle}
                startIcon={item.iconImage}
                children={item.title}
                key={key}
              ></IconButtons>
            );
          })}
        </Container>
      </Container>
    </div>
    </ThemeProvider>
  );
};

export default ExpandedNav;
