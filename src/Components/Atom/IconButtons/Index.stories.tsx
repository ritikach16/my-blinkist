import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TimeIcon, AddIcon, DownArrowIcon, Icon1 } from "../../../Icons";
import IconButtons from "./Index";

export default {
  title: "Atom/IconButton",
  component: IconButtons,
} as ComponentMeta<typeof IconButtons>;

const Template: ComponentStory<typeof IconButtons> = (args) => (
  <IconButtons {...args}/>
);

export const Primary = Template.bind({});

Primary.args = {
  children: "Add to Library",
  startIcon: <AddIcon />,
};

export const Explore = Template.bind({});

Explore.args = {
  children: "Explore",
  endIcon: (
    <DownArrowIcon
      sx={{
        position: "absolute",
        left: "23.48%",
        right: "23.48%",
        top: "34.26%",
        bottom: "33.33%",
        background: "#042330",
      }}
    />
  ),
};

export const Time = Template.bind({});

Time.args = {
  children: "13-minute read",
  startIcon: (
    <TimeIcon
      sx={{
        position: "absolute",
        left: "8.33%",
        right: "8.33%",
        top: "8.33%",
        bottom: "8.33%",
        background: "#6D787E",
      }}
    />
  ),
  typography: "caption3"
};

export const Entrepreneurship = Template.bind({});

Entrepreneurship.args = {
	children: "Entrepreneurship",
	startIcon: (
		<Icon1
			sx={{
				width: "16px",
				height: "22.05px",
				color: "text1",
			}}
		/>
	),
	width: "296px",
	left: "12px",
	typography: "caption3",
	color: "text3",
};