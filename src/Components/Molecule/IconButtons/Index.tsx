import React, { HTMLAttributes, ReactNode } from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: "contained" | "text" | "outlined" | undefined;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    children ?: ReactNode;
    onClick?: () => void;
    style ?: React.CSSProperties;
    className ?: string;
  }

  const useStyles = makeStyles({
    iconStyles: {
      width: "14px",
      height: "14px",
      position: "relative",
      marginRight: "5px"
    },
    textStyles: {
      fontFamily: "Cera Pro",
      fontWeight: "400",
      fontSize: "14px",
    },
  })

const IconButtons = (props: Props) => {

  const classes = useStyles();
  return (
    <>
      <div style= {props.style}>
        <div data-testid="startIcon" className={classes.iconStyles}>{props.startIcon}</div>
        <Typography variant="body1" className={props.className}>
          {props.children}
        </Typography>
        <div data-testid="endIcon">{props.endIcon}</div>
      </div>
    </>
  );
};

export default IconButtons;
