import React, { HTMLAttributes, ReactNode } from "react";
import { Typography } from "@mui/material";
import { StandardLonghandProperties } from "csstype";
import { Color, TypoVariants } from "../../Constants/StyleConstants";
import { makeStyles } from "@mui/styles";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "text" | "outlined" | undefined;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  color?: Color;
  typoColor?: Color;
  typography?: TypoVariants;
  children?: ReactNode;
  onClick?: () => void;
  left?: StandardLonghandProperties<string | number, string>["left"];
  width?: StandardLonghandProperties<string | number, string>["width"];
  height?: StandardLonghandProperties<string | number, string>["height"];
}

const useStyles = makeStyles({
  textStyles: {
    fontFamily: "Cera Pro",
    textAlign: "right",
    fontStyle: "normal",
    fontWeight: "200",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#6D787E",
  },
  Container: {
    display: "flex",
    padding: "5px",
    fontFamily: "Cera Pro",
  },
  IconStyles: {
      height: "12px",
      width: "12px",
      paddingRight: "6px",
      color: "#6D787E",
  }
});

const Reads = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.Container}>
        <div className={classes.IconStyles}>{props.startIcon}</div>
        <Typography className={classes.textStyles}>{props.children}</Typography>
        <div className={classes.IconStyles}>{props.endIcon}</div>
      </div>
    </>
  );
};

export default Reads;
