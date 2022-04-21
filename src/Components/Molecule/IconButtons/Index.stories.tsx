import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AddIcon, Icon1 } from "../../../Icons";
import IconButtons from "./Index";

export default {
  title: "Molecule/IconButton",
  component: IconButtons,
} as ComponentMeta<typeof IconButtons>;

const Template: ComponentStory<typeof IconButtons> = (args) => (
  <IconButtons {...args}/>
);

export const AddToLibrary = Template.bind({});

AddToLibrary.args = {
  children: "Add to Library",
  startIcon: <AddIcon />,
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

