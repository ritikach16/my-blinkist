import { createTheme } from "@mui/material/styles";
import colors from "../../Constants/Colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.PRIMARY_TEXT_TABS,
    },
  },
  typography: {
    h1: {
      fontFamily: "Cera Pro",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "45.25px",
      color: colors.TEXT_TITLES,
    },
    h3: {
      fontFamily: "Cera Pro",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "30.17px",
      color: colors.TEXT_TITLES,
    },
    h5:{
      fontFamily: "Cera Pro",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "20.11px",
    },
    body1: {
      fontFamily: "Cera Pro",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20.11px",
    },
    body2: {
      fontFamily: "inherit",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20.11px",
      color: colors.TEXT_TITLES,
    },
    subtitle2: {
      fontFamily: "Cera Pro",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "22.63px",
      color: colors.TEXT_CONTENT,
    },
    subtitle1: {
      fontFamily: "Cera Pro",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "22.63px",
      color: colors.TEXT_TITLES,
    },
    caption: {
      fontFamily: "Cera Pro",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17.6px",
      color: colors.TEXT_CONTENT,
    },
    button: {
      textTransform: "none",
      // background: colors.PRIMARY_BTN,
    }
  },

  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          placeItems: "flex-start",
          "&:active" : {
            color: colors.PRIMARY_TEXT_TABS,
            fontWeight: "700",
          }
        }
      }
    }
  }

});

export default theme;
