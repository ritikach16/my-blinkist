import { makeStyles, styled } from "@mui/styles";
import React, { useEffect, useState } from "react";
import ExpandedNav from "../ExpandedNav/Index";
import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Logo from "../../Atom/Logo/Index";
import Icons from "../../Atom/Icons/Index";
import Dropdown from "../../Molecule/DropDown/Index";
import {SearchIcon} from "../../../Icons";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: "#03314B",
          fontWeight: "500",
          fontStyle: "normal",
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
  navItem: {
    cursor: "pointer",
    color: "#03314B",
    fontStyle: "normal",
    fontSize: "16px !important",
    lineHeight: "20px",
    fontWeight: "500",
    "&:hover": {
      borderBottom: "2px solid #22C870",
    },
  },
  library: {
    cursor: "pointer",
    color: "#03314B",
    fontStyle: "normal",
    fontSize: "16px !important",
    fontFamily: "Cera Pro !important",
    lineHeight: "20px",
    fontWeight: "500",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      borderBottom: "2px solid #22C870",
    },
  },
  account: {
    marginLeft: "auto",
    position: "relative",
    right: "0px",
    alignSelf: "center",
  },
  subContainer: {
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "970px !important",
    padding: "0px",
    margin: "0px",
    height: "86px",
    alignItems: "center",
  },
  pointer:{
    cursor: "pointer",
    position: "relative",
    top: "5px",
  }
});

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "40px",
});

const Header = () => {
  const classes = useStyles();
  const [isExploreClicked, setExploreClicked] = useState<boolean>(false);
  const [isAccountClicked, setAccountClicked] = useState<boolean>(false);
  const [iconStyle, setIconStyle] = useState({ transform: "rotate(0deg)" });
  const [accountStyle, setAccountStyle] = useState({
    transform: "rotate(0deg)",
  });
  const displayExploreDropdown = () => {
    isExploreClicked ? setExploreClicked(false) : setExploreClicked(true);

    if (isExploreClicked) {
      setIconStyle({ transform: "rotate(0deg)" });
    } else {
      setIconStyle({ transform: "rotate(180deg)" });
    }
  };

  const displayAccountDetails = () => {
    isAccountClicked ? setAccountClicked(false) : setAccountClicked(true);

    if (isAccountClicked) {
      setAccountStyle({ transform: "rotate(0deg)" });
    } else {
      setAccountStyle({ transform: "rotate(180deg)" });
    }
  };

  const navigate = useNavigate();
  const handleClick = () => {
    //  history.push("/")
    navigate("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.subContainer}>
        <MainContainer>
          <Logo className={classes.logo} />
          <Icons className={classes.pointer}>
            <SearchIcon sx={{width: "20.31px", height: "20.31px"}} />
          </Icons>
          <Dropdown
            className={classes.navItem}
            onClick={displayExploreDropdown}
            style={iconStyle}
            title="Explore"
          />
          <Typography className={classes.library} onClick={handleClick} variant="body1">
            My Library
          </Typography>
        </MainContainer>
        <MainContainer>
          <Dropdown
            title="Account"
            className={classes.account}
            onClick={displayAccountDetails}
            style={accountStyle}
          />
        </MainContainer>
      </Container>
      {isExploreClicked ? <ExpandedNav/> : null}
    </ThemeProvider>
  );
};

export default Header;

