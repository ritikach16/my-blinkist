import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Buttons from "../Buttons/Index";
import { RightArrowIcon } from "../../../Icons";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: "100px",
    padding: "0px",
    width: "100%",
    gap: "20px"
  },
  readNow: {
    color: "#22C870",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "20px",
    border: "1px solid #3A4649",
    borderRadius: "4px",
    textTransform: "none",
    height: "44px",
    "&:hover": {
      border: "1px solid #3A4649",
    },
  },
  finishedReading: {
    color: "#03314B",
    fontSize: "16px",
    textTransform: "none",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "20px",
    textAlign: "center",
    width: "170px",
    height: "44px",
    background: "#2CE080",
    borderRadius: "4px",
    border: "none",
    "&:hover": {
      backgroundColor: "#20BA68",
      border: "none",
    },
  },
  sendToKindle: {
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "20px",
    color: "#6D787E",
    width: "156px",
    height: "44px",
    textTransform: "none",
  },
});

const ButtonGroup = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainContainer}>
      <Buttons variant="outlined" className={classes.readNow}>
        Read now
      </Buttons>
      <Buttons variant="outlined" className={classes.finishedReading}>
        Finished Reading
      </Buttons>
      <Buttons
        variant="text"
        endIcon={<RightArrowIcon sx={{ position: "relative", top: "4.5px" }} />}
        className={classes.sendToKindle}
      >
        Send to Kindle
      </Buttons>
    </Container>
  );
};

export default ButtonGroup;
