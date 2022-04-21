import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Cards from "./Index";
import Time from "../../Molecule/IconButtons/Index";
import { AddIcon, TimeIcon, UserIcon } from "../../../Icons";
import Buttons from "../../Molecule/Buttons/Index";
import IconButton from "../../Molecule/IconButtons/Index";
import ReadBooks from "../../Molecule/Reads/Index";

export default {
  title: "Organism/Cards",
  children: Cards,
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const Primary = Template.bind({});

const data = {
  id: "1",
  image: "/Images/1.png",
  title: "Bring Your Human to Work",
  author: "Erica Keswin",
  minutes: (
    <Time
      startIcon={
        <TimeIcon
          fontSize="large"
          sx={{
            position: "relative",
            top: "2px",
            width: "16.67px",
            height: "16.67px",
          }}
        />
      }
      children="13-minute read"
    />
  ),
  reads: (
    <ReadBooks
      startIcon={
        <UserIcon
          style={{
            position: "relative",
            top: "2px",
            left: "8px",
            width: "13.33px",
            height: "17.5px",
          }}
        />
      }
      children="1.9k reads"
    />
  ),
  status: {
    addToLib: true,
    isFinished: false,
    readAgain: false,
  },
  type: "Trending",
};

Primary.args = {
  bookData: data,
};

export const AddToLibrary = Template.bind({});

const allProps = {
  width: "284px",
  height: "52px",
  children: "Add to library",
  startIcon: (
    <AddIcon
      sx={{ height: "14px", width: "14px", top: "5px", position: "relative", right: "5px" }}
    />
  ),
};

AddToLibrary.args = {
  bookData: data,
  children: <IconButton {...allProps} />,
};
