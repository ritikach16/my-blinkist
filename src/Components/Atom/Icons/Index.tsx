import React, { HTMLAttributes, ReactNode } from 'react'
import { StandardLonghandProperties } from 'csstype';
import {Color, TypoVariants} from '../../Constants/StyleConstants';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'contained' | 'text' | 'outlined' | undefined;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    color?: Color;
    typoColor?: Color;
    typography?: TypoVariants;
    children ?: ReactNode;
    onClick?: () => void;
    style ?: React.CSSProperties;
    left?: StandardLonghandProperties<string | number, string>['left'];
    width?: StandardLonghandProperties<string | number, string>['width'];
    height?: StandardLonghandProperties<string | number, string>['height'];
  }
const Icons = (props : Props) => {
    return (
        <div onClick={props.onClick} className={props.className} style={props.style}>
            {props.children}
        </div>
    )
}

export default Icons;
