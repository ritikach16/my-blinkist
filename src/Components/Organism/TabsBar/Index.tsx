import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import { Box, Container } from "@mui/material";
import Cards from "../Cards/Index";
import { makeStyles } from "@mui/styles";
import booksData from "../../../AllData/BooksData";

const useStyles = makeStyles({
  textStyles: {
    textTransform: "none",
    fontSize: "18px",
    fontWeight: "400",
    fontStyle: "normal",
    color: "#6D787E",
    "&:focus": {
      color: "#22C870",
      fontWeight: "700",
      lineHeight: "23px",
    },
    "&:active": {
      color: "#22C870",
      fontWeight: "700",
      lineHeight: "23px",
    },
  },
  borderStyles: {
    borderBottom: "2px solid #E1ECFC",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "20px 0px",
  },
});

const TabsBar = () => {
  const classes = useStyles();
  const [selectedTabs, setSelectedTabs] = useState("1");
  const [finishedBooksTab, setFinishedBooksTab] = useState([
    {
      id: 1,
      image: "",
      title: "",
      author: "",
      minutes: "",
      reads: "",
      addToLib: "",
      isFinished: "",
      readAgain: "",
      type: {
        trending: false,
        featured: false,
        justAdded: false,
      },
    },
  ]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTabs(newValue);
  };

  const handleClick = () => {
    console.log("clicked");
  };

  const handleReadAgainClick = (e: any) => {
    console.log(e + "checking");
  };

  return (
    <TabContext value={selectedTabs}>
      <TabList
        className={classes.borderStyles}
        onChange={handleChange}
        aria-label="checking"
      >
        <Tab
          className={classes.textStyles}
          label="Currently reading"
          value="1"
        />
        <Tab className={classes.textStyles} label="Finished" value="2" />
      </TabList>
      <TabPanel sx={{padding: "0px"}} value="1">
        <Box className={classes.container}>
          {booksData
            .filter((item) => !item.isFinished)
            .map((books, idx) => {
              return (
                <Cards
                  key={idx}
                  title={books.title}
                  author={books.author}
                  minutes={books.minutes}
                  addToLib={false}
                  isFinished={!books.isFinished}
                  image={books.image}
                  num={books.id}
                  onClick={() => handleClick}
                />
              );
            })}
          {/* {finishedBooksTab
            .slice(0, 9)
            .filter((item) => !item.isFinished)
            .map((books, idx) => {
              return (
                <Cards
                  key={idx}
                  title={books.title}
                  author={books.author}
                  minutes={books.minutes}
                  addToLib={false}
                  isFinished={!books.isFinished}
                  image={books.image}
                  num = {books.id}
                  onClick={() => handleClick}
                />
              );
            })} */}
        </Box>
      </TabPanel>
      <TabPanel value="2">
        <Container>
          {finishedBooksTab
            .slice(0, 9)
            .filter((item) => !item.isFinished)
            .map((books, idx) => {
              return (
                <Cards
                  key={idx}
                  title={books.title}
                  author={books.author}
                  minutes={books.minutes}
                  addToLib={false}
                  isFinished={false}
                  image={books.image}
                  num={books.id}
                  readAgain={true}
                  onClick={() => handleReadAgainClick(this)}
                />
              );
            })}
        </Container>
      </TabPanel>
    </TabContext>
  );
};

export default TabsBar;
