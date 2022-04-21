import React from "react";
import { Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "../../Atom/Typography/Index";
import Button from "../../Molecule/Buttons/Index";
import IconButton from "../../Molecule/IconButtons/Index";

export interface StateProps {
  id: string;
  image?: string;
  title?: string;
  author?: string;
  minutes?: any;
  reads?: any;
  status?: {
    addToLib: boolean;
    isFinished: boolean;
    readAgain: boolean;
  };
  type?: string;
}

export interface CardBookPropsInterface {
  children?: React.ReactNode;
  bookData: StateProps;
  status?: string;
  onClick ?: () => void;
}

const useStyles = makeStyles({
  Container: {
    margin: "5px",
    padding: "5px",
    display: "flex",
    fontFamily: "Cera Pro",
  },
  cardStyles: {
    width: "284px",
    border: "1px solid #E1ECFC",
    background: "#FFFFFF",
    borderRadius: "8px",
    boxSizing: "border-box",
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
    justifyContent: "space-around",
    color: "#6D787E",
    boxSizing: "border-box",
  },
  auther: {
    color: "#6D787E",
    margin: "5px 0px",
    fontFamily: "Cera Pro",
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
    padding: "14px 24px",
    color: "#0365F2",
    border: "1px solid #0365F2",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
    "&:hover": {
      color: "white",
      backgroundColor: "#0365F2",
    },
  },
});

const Cards = (props: CardBookPropsInterface) => {
  const { children, bookData } = props;

const handleClick = () => {
  
}

  const classes = useStyles();
  return (
    <div className={classes.Container}>
      <Card id={bookData.id} className={classes.cardStyles}>
        <CardMedia component="img" image={bookData.image} alt="card image" />
        <CardContent>
          <Typography className={classes.textStyles} variant="subtitle1">
            {bookData.title}
          </Typography>
          <Typography variant="body2">
            <div className={classes.auther}>{bookData.author}</div>
            <div className={classes.readStyles}>
              {bookData.minutes}
              {bookData.reads}
            </div>
          </Typography>
        </CardContent>

        {bookData.status?.isFinished ? (
          <CardActions>
            <Typography variant="body1">Finished</Typography>
          </CardActions>
        ) : null}

        {bookData.status?.readAgain ? (
          <CardActions>
            <Typography variant="body1">Read Again</Typography>
          </CardActions>
        ) : null}

        {bookData.status?.addToLib ? (
          <CardActions className={classes.addLibBtn} onClick = {handleClick}>
            {props.children}
          </CardActions>
        ) : null}
      </Card>
    </div>
  );
};
export default Cards;
