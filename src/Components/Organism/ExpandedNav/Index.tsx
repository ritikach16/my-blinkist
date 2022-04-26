import React from "react";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import IconButtons from "../../Molecule/IconButtons/Index";
import expandedNavItems from "../../../AllData/ExpandedNavData";

const useStyles = makeStyles({
  myContainer: {
    boxSizing: "border-box",
    height: "398px",
    background: "#F1F6F4",
    color: "#6D787E",
    zIndex: "10",
    marginTop: "20px",
  },
  subContainers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "10px",
  },
  subCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "initial",
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
    marginLeft: "7px",
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

const ExpandedNav = () => {

  const handleClick = () => {
    // navigate to entrepreneurship
  }

  const classes = useStyles();
  return (
    <div className={classes.myContainer}>
      <Container className={classes.subCont}>
        <Typography className={classes.headingStyle}>
          Explore by category
        </Typography>
        <Typography className={classes.headingStyle}>
          See recently added title
        </Typography>
        <Typography className={classes.headingStyle}>
          See popular titles
        </Typography>
      </Container>
      <Container className={classes.subContainers}>
        <Container>
          {expandedNavItems[0].map((item, key) => {
            return (
              <IconButtons
                style={{ display: "flex", margin: "5px", padding: "10px", cursor: "pointer" }}
                className={classes.textStyle}
                onClick = {handleClick}
                startIcon={
                  <img
                    className={classes.iconStyle}
                    src={item.iconImage}
                    alt="icon"
                  />
                }
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
                startIcon={
                  <img
                    className={classes.iconStyle}
                    src={item.iconImage}
                    alt="icon"
                  />
                }
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
                startIcon={
                  <img
                    className={classes.iconStyle}
                    src={item.iconImage}
                    alt="icon"
                  />
                }
                children={item.title}
                key={key}
              ></IconButtons>
            );
          })}
        </Container>
      </Container>
    </div>
  );
};

export default ExpandedNav;
