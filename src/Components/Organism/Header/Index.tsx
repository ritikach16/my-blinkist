import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import Logo from "../../Atom/Logo/Index";
import Icons from "../../Atom/Icons/Index";
import Dropdown from "../../Molecule/DropDown/Index";
import SearchIcon from "../../../../public/Images/Svg/search.svg";
import { DownArrowIcon } from "../../../Icons";
import TypographyComponent from "../../Atom/Typography/Index";

interface Props {
  children: React.ReactNode;
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: "#03314B",
          fontWeight: "500",
          fontStyle: "normal",
          fontFamily: "Cera Pro",
          fontSize: "16px",
          lineHeight: "20px",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  logo: {
    width: "124.9px",
    height: "26px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "910px",
    height: "86px",
    gap: "40px",
    margin: "0 auto",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    width: "910px",
    height: "86px",
    gap: "40px",
    margin: "0 auto",
  },
  navItem: {
    cursor: "pointer",
    color: "#03314B",
    fontStyle : "normal",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "500",
    alignSelf: "center",
    "&:hover": {
      borderBottom: "1px solid #22C870",
    },
  },
  account: {
    marginLeft: "auto",
    alignSelf: "center"
  },
});

const Header = (props: Props) => {
  const classes = useStyles();
  const [isClicked, setClicked] = useState(false);
  const [iconStyle, setIconStyle] = useState({ transform: "rotate(0deg)" });
  const [accountStyle, setAccountStyle] = useState({
    transform: "rotate(0deg)",
  });
  const displayDropdown = () => {
    isClicked ? setClicked(false) : setClicked(true);

    if (isClicked) {
      setIconStyle({ transform: "rotate(0deg)" });
    } else {
      setIconStyle({ transform: "rotate(180deg)" });
    }
  };

  const displayAccountDetails = () => {};

  return (
    <ThemeProvider theme={theme}>
      <Container>
      <Box className={classes.mainContainer}>
        <Logo className={classes.logo} />
        <Icons>
          <img src={SearchIcon} alt="search" />
        </Icons>
        <Dropdown className={classes.navItem} title="Explore" />
        <TypographyComponent className={classes.navItem} variant="body1">
          My Library
        </TypographyComponent>

        <Dropdown
          title="Account"
          className={classes.account}
          onClick={displayAccountDetails}
          style={accountStyle}
        />
      </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Header;
