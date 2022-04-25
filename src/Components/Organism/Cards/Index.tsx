import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "../../Atom/Typography/Index";
import Reads from "../../Molecule/Reads/Index";
import { AddIcon } from "../../../Icons";
import IconButton from "../../Molecule/IconButtons/Index";
import { TimeIcon, UserIcon } from "../../../Icons";

export interface CardBookPropsInterface {
  children?: React.ReactNode;
  id?: number;
  image?: string;
  title?: string;
  author?: string;
  minutes?: any;
  reads?: string;
  addToLib?: boolean;
  isFinished?: boolean;
  readAgain?: boolean;
  num : number;
  onClick?: () => void;
  className?: string;
}

const useStyles = makeStyles({
  Container: {
    margin: "5px",
    padding: "5px",
    display: "flex",
  },
  cardStyles: {
    width: "284px",
    border: "1px solid #E1ECFC",
    background: "#FFFFFF",
    borderRadius: "8px",
    boxSizing: "border-box",
    "&:hover": {
      background: "#E1ECFC",
    },
  },
  textStyles: {
    color: "#03314B",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "22.63px",
    fontStyle: "normal",
  },
  readStyles: {
    display: "flex",
    justifyContent: "space-between",
    color: "#6D787E",
    boxSizing: "border-box",
  },
  author: {
    color: "#6D787E",
    margin: "15px 0px",
    lineHeight: "20px",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "500",
  },
  addLibBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "#0365F2",
    borderTop: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "0px 0px 4px 4px",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      backgroundColor: "#0365F2",
    },
  },
  timeIconStyle: {
    height: "16.67px",
    color: "#6D787E",
  },
  userIconStyle: {
    height: "17.5px",
    color: "#6D787E",
  },
  buttonTextStyle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
  },
  optionalBtnTextStyles: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#0365F2",
    cursor: "pointer",
    margin: "auto",
  },
});

const Cards = (props: CardBookPropsInterface) => {
  const [bookData, setBookData] = useState({
    id: 1,
    image: "",
    title: "",
    author: "",
    minutes: "",
    reads: "",
    addToLib: false,
    isFinished: false,
    readAgain: false,
    type: {
      trending: false,
      featured: false,
      justAdded: false,
    }
  });

  const handleClick = () => {

  };

  const addToFinished = (n: number) => {
    if (bookData.isFinished) {
      bookData.isFinished = false;
    } else {
      bookData.isFinished = true;
    }
  };

  
  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <Card className={classes.cardStyles}>
        <CardMedia component="img" image={props.image} alt="card image" />
        <CardContent>
          <Typography className={classes.textStyles} variant="subtitle1">
            {props.title}
          </Typography>
          <Typography variant="body2">
            <div className={classes.author}>{props.author}</div>
            <div className={classes.readStyles}>
              <Reads
                startIcon={<TimeIcon />}
                children={props.minutes}
                className={classes.timeIconStyle}
              />
               {props.reads === undefined ? (null) : (<Reads
                startIcon={<UserIcon />}
                children={props.reads}
                className={classes.userIconStyle}
              />)}
            </div>
          </Typography>
        </CardContent>

        {props.isFinished ? (
          <CardActions onClick={() => addToFinished(props.num)}>
            <Typography
              variant="body1"
              className={classes.optionalBtnTextStyles}
            >
              Finished
            </Typography>
          </CardActions>
        ) : null}

        {props.readAgain ? (
          <CardActions onClick={() => addToFinished(props.num)}>
            <Typography
              variant="body1"
              className={classes.optionalBtnTextStyles}
            >
              Read Again
            </Typography>
          </CardActions>
        ) : null}

        {props.addToLib ? (
          <CardActions className={classes.addLibBtn} onClick={handleClick}>
            <IconButton
              className={classes.buttonTextStyle}
              startIcon={<AddIcon />}
              style={{
                display: "flex",
                height: "36px",
                justifyContent: "center",
                alignItems: "center",
              }}
              children="Add to Library"
            ></IconButton>
          </CardActions>
        ) : null}
      </Card>
    </div>
  );
};
export default Cards;
