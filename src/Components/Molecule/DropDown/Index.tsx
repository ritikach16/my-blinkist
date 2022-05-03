import React from "react";
import { DownArrowIcon } from "../../../Icons";
import { ReactComponent as Account } from "../../../images/account.svg";
import { makeStyles } from "@mui/styles";
import { Box, ThemeProvider, Typography } from "@mui/material";
import Icons from "../../Atom/Icons/Index";
import theme from "../../Theme/Theme";
interface Props {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "row",
    // height: "24px",
    cursor: "pointer",
    justifyContent: "center",
    // alignItems: "center",
  },
  typography: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  colorStyle: {
    color: "#042330",
  },
  accountIcon: {
    position: "relative",
  },
});

const Dropdown = (props: Props) => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className={classes.main}>
          {props.title === "Account" ? (
            <Icons>
              <Account
                width="40px"
                height="40px"
                className={classes.accountIcon}
              />
            </Icons>
          ) : (
            <Typography variant="body1" className={classes.typography}>
              {props.title}
            </Typography>
          )}

          <Icons
            onClick={props.onClick}
            style={props.style}
            className={classes.colorStyle}
          >
            <DownArrowIcon
              sx={{ top: "11px", left: "3px", position: "relative" }}
            />
          </Icons>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Dropdown;
