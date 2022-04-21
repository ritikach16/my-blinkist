import React, { HTMLAttributes, ReactNode } from "react";
import { Typography } from "@mui/material";
import { StandardLonghandProperties } from "csstype";
import {Color, TypoVariants} from "../../Constants/StyleConstants";
import { makeStyles } from "@mui/styles";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: "contained" | "text" | "outlined" | undefined;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    color?: Color;
    typoColor?: Color;
    typography?: TypoVariants;
    children ?: ReactNode;
    onClick?: () => void;
    left?: StandardLonghandProperties<string | number, string>["left"];
    width?: StandardLonghandProperties<string | number, string>["width"];
    height?: StandardLonghandProperties<string | number, string>["height"];
  }

  const useStyles = makeStyles({
    iconStyles: {
      width: "14px",
      height: "14px",
      position: "relative",
    },
    textStyles: {
      fontFamily: "Cera Pro",
      fontWeight: "400",
      fontSize: "14px",
    },
    Container: {
      display: "flex",

    }
  })

const IconButtons = ({
  color,
  children,
  startIcon,
  endIcon,
  width,
  height
}: Props) => {

  const classes = useStyles();
  return (
    <>
      <div className={classes.Container}>
        <div data-testid="startIcon" className={classes.iconStyles}>{startIcon}</div>
        <Typography variant="body1" className={classes.textStyles} sx={{ position: "relative", color: `${color}.main` }}
        >
          {children}
        </Typography>
        <div data-testid="endIcon">{endIcon}</div>
      </div>
    </>
  );
};

export default IconButtons;
