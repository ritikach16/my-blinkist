import React, { HTMLAttributes, ReactNode } from 'react';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TypoVariants} from '../../Constants/StyleConstants';
import { StandardLonghandProperties } from 'csstype';


export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'contained' | 'text' | 'outlined' | undefined;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    color?: "primary" | "secondary" | "success" | "error" | "info" | "warning" | "inherit" | undefined;
    typography?: TypoVariants;
    children ?: ReactNode;
    onClick?: () => void;
    left?: StandardLonghandProperties<string | number, string>['left'];
    width?: StandardLonghandProperties<string | number, string>['width'];
    height?: StandardLonghandProperties<string | number, string>['height'];
  }

  const useStyles = makeStyles({
    buttons: {
      backgroundColor: "#2CE080",
      width: "296px",
      height: "44px",
      '&:hover' :{
        backgroundColor: '#00C263'
      }
    },
    textWhite: {
      color: "white"
    }
  });

const Buttons = (props: Props) => {
  const classes = useStyles();
  const { startIcon,typography, endIcon, variant, children } = props;
  return (
    <Typography>
      <Button
        variant={variant}
        startIcon={startIcon}
        endIcon={endIcon}
        className= {classes.buttons}
        color={props.color}
      >
        {children}
      </Button>
    </Typography>
  );
};

export default Buttons;
