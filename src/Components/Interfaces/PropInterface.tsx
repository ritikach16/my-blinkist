import React, { HTMLAttributes, ReactNode } from "react";
import { Color, TypoVariants } from "../Constants/StyleConstants";
import { StandardLonghandProperties } from "csstype";

export default interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: "contained" | "text" | "outlined" | undefined;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    color?: Color;
    typoColor?: Color;
    typography?: TypoVariants;
    children: ReactNode;
    onClick?: () => void;
    left?: StandardLonghandProperties<string | number, string>["left"];
    width?: StandardLonghandProperties<string | number, string>["width"];
    height?: StandardLonghandProperties<string | number, string>["height"];
  }