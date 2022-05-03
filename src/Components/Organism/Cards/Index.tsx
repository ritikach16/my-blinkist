import React, { useEffect, useState } from "react";
import { Card, CardMedia, CardContent, CardActions, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "../../Atom/Typography/Index";
import Reads from "../../Molecule/Reads/Index";
import { AddIcon } from "../../../Icons";
import IconButton from "../../Molecule/IconButtons/Index";
import { TimeIcon, UserIcon } from "../../../Icons";
import axios from "axios";
import URL from "../../../AllData/Url";
import theme from "../../Theme/Theme";
import { useNavigate } from "react-router-dom";

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
  num: number;
  onClick?: () => void;
  className?: string;
}

const useStyles = makeStyles({
  Container: {
    margin: "10px",
    display: "flex",
  },
  cardStyles: {
    cursor: "pointer",
    width: "284px",
    height: "466px",
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
  optionalBtnTextStyles: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#0365F2",
    cursor: "pointer",
    margin: "0px auto !important",
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
    },
  });

  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log(props.num);

    const myBookData = async (n: number) => {
      if (n && n !== 0) {
        const res = await axios.get(`${URL}/myBookData/${n}`);
        const books = res.data;
        setBookData(books);
        // console.log(bookData);
      }
    };
    myBookData(props.num);
  }, [count, props.num]);

  const handleFinished = async (n: number) => {
    // bookData.isFinished = true;
    if (bookData.isFinished) {
      bookData.isFinished = false;
    } else {
      bookData.isFinished = true;
    }
    if (count < 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }

    await axios.put(`${URL}/myBookData/${n}`, bookData);
  };

  const handleCardData = async(n : number) => {
    const res = await axios.get(`${URL}/myBookData/${n}`);
    // console.log(res.data); getting the data
    
    await axios.put(`http://localhost:5000/myBookDetail/`, res.data);
    navigate("/bookDetails")
  }

  const addToLibrary = async (n: number) => {
    bookData.addToLib = false;
    bookData.isFinished = true;
    if (count < 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    await axios.put(`${URL}/myBookData/${10}`, bookData); // updating lib
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme = {theme}>
      <div className={classes.Container}>
        <Card className={classes.cardStyles}>
          <CardMedia component="img" image={props.image} alt="card image" />
          <CardContent style={{padding: "12px"}} onClick = {() => handleCardData(props.num)}>
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
                {props.reads === undefined ? null : (
                  <Reads
                    startIcon={<UserIcon />}
                    children={props.reads}
                    className={classes.userIconStyle}
                  />
                )}
              </div>
            </Typography>
          </CardContent>

          {props.isFinished ? (
          <>
            <CardActions onClick={() => handleFinished(props.num)}>
              <Typography
                variant="body1"
                className={classes.optionalBtnTextStyles}
              >
                Finished
              </Typography>
            </CardActions>
          </>
          ) : null}

          {props.readAgain ? (
            <CardActions onClick={() => handleFinished(props.num)}>
              <Typography
                variant="body1"
                className={classes.optionalBtnTextStyles}
              >
                Read Again
              </Typography>
            </CardActions>
          ) : null}

          {props.addToLib ? (
            <CardActions
              className={classes.addLibBtn}
              onClick={() => addToLibrary(props.num)}
            >
              <IconButton
                startIcon={<AddIcon />}
                style={{
                  display: "flex",
                  height: "36px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                children="Add to library"
              ></IconButton>
            </CardActions>
          ) : null}
        </Card>
      </div>
    </ThemeProvider>
  );
};
export default Cards;
