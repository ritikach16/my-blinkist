import { Box, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Buttons from "../../Molecule/Buttons/Index";
import { RightArrowIcon } from "../../../Icons";
import { useEffect, useState } from "react";
import axios from "axios";
import URL from "../../../AllData/Url";



const useStyles = makeStyles({
  mainBox: {
    display: "flex !important",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: "100px",
    padding: "0px",
    width: "100%",
    gap: "20px",
  },
  readNow: {
    color: "#22C870 !important",
    fontSize: "16px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "20px",
    border: "1px solid #3A4649 !important",
    borderRadius: "4px",
    textTransform: "none",
    height: "44px",
    "&:hover": {
      border: "1px solid #3A4649 !important",
    },
  },
  finishedReading: {
    color: "#03314B !important",
    textAlign: "center",
    width: "170px",
    height: "44px",
    background: "#2CE080 !important",
    border: "none !important",
    "&:hover": {
      backgroundColor: "#20BA68 !important",
      border: "none !important",
    },
  },
  sendToKindle: {
    color: "#6D787E !important",
    width: "156px",
    height: "44px",
    textTransform: "none",
  },
});

interface Props {
  num: number;
}

const ButtonGroup = (props: Props) => {
  const [bookData, setBookData] = useState({
    id: 1,
    image: "",
    title: "",
    author: "",
    minutes: "",
    reads: "",
    addToLib: false,
    isFinished: false,
    readAgain: false,
    type: {
      trending: false,
      featured: false,
      justAdded: false,
    },
  });

  // const navigate = useNavigate();

  const handleFinished = async (n: number) => {
    bookData.isFinished = true;
    // bookData.readAgain = true;
    // setBookData(bookData);
    await axios.put(`${URL}/myBookData/${n}`, bookData);
    // navigate("/home")
  };

  const handleRead = async (n: number) => {
    await axios.put(`/myBookData/${n}`, bookData);
    // navigate("/home");
  };

  useEffect(() => {
    const myData = async () => {
      const res = await axios.get(`${URL}/myBookData/${10}`);
      const books = res.data;
      setBookData(books);
    };
    return () => {
      myData();
    };
  }, [bookData]);

  const classes = useStyles();
  return (
      <Box className={classes.mainBox}>
        <Buttons
          variant="outlined"
          className={classes.readNow}
          onClick={() => handleRead(props.num)}
        >
          Read now
        </Buttons>
        <Buttons
          variant="outlined"
          onClick={() => handleFinished(props.num)}
          className={classes.finishedReading}
        >
          Finished Reading
        </Buttons>
        <Buttons
          variant="text"
          endIcon={
            <RightArrowIcon sx={{ position: "relative", top: "4.5px" }} />
          }
          className={classes.sendToKindle}
        >
          Send to Kindle
        </Buttons>
      </Box>
  );
};

export default ButtonGroup;
