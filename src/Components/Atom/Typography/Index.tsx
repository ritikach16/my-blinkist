import React from 'react';
import {Typography} from "@mui/material";

interface TypographyProps{
    variant: 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'inherit';
    children ?: React.ReactNode;
    className ?: string;
    style?: React.CSSProperties;
}
const TypographyComponent = (props : TypographyProps) => {
    return (
        <Typography variant={props.variant} className = {props.className} style = {props.style}>
            {props.children}
        </Typography>
    )
}

export default TypographyComponent;
