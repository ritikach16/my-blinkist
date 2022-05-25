import React, { HTMLAttributes, ReactNode } from "react";
import {
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "text" | "outlined" | undefined;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: "#22C870",
          fontSize: "16px",
          fontWeight: "500",
          fontStyle: "normal",
          fontFamily: "Cera Pro",
          lineHeight: "20px",
          borderRadius: "4px"
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "20px"
        }
      }
    }
  },
  typography: {
    button: {
      textTransform: "none"
    }
  },
});


const useStyles = makeStyles({
  buttons: {
    backgroundColor: "#2CE080",
    width: "296px",
    height: "44px",
    "&:hover": {
      backgroundColor: "#00C263",
    },
  },
  textWhite: {
    color: "white",
  },
});

const Buttons = (props: Props) => {
  const classes = useStyles();
  const { startIcon, endIcon, variant, children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Button
        onClick={props.onClick}
          variant={variant}
          startIcon={startIcon}
          endIcon={endIcon}
          className={props.className}
          style={props.style}
        >
          {children}
        </Button>
      </Typography>
    </ThemeProvider>
  );
};

export default Buttons;
