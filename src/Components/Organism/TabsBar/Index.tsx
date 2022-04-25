import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import { Container } from "@mui/material";
import Cards from "../Cards/Index";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  textStyles: {
    textTransform: "none",
  }
});

const  TabsBar = () => {
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
      }
    },
  ]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTabs(newValue);
  };

  const handleClick = () => {
    console.log("clicked");
  };

  const handleReadAgainClick = (e : any) => {
    console.log(e + "checking");
  }

  return (
    <TabContext value={selectedTabs}>
      <TabList onChange={handleChange} aria-label="checking">
        <Tab className={classes.textStyles} label="Currently reading" value="1" />
        <Tab className={classes.textStyles} label="Finished" value="2" />
      </TabList>
      <TabPanel value="1">
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
                  isFinished={!books.isFinished}
                  image={books.image}
                  num = {books.id}
                  onClick={() => handleClick}
                />
              );
            })}
        </Container>
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
                  num = {books.id}
                  readAgain={true}
                  onClick={() => handleReadAgainClick(this)}
                />
              );
            })}
        </Container>
      </TabPanel>
    </TabContext>
  );
}

export default TabsBar;
