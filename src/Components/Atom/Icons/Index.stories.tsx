import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Icons from "./Index";
import {DownArrowIcon, SearchIcon} from "../../../Icons";


export default {
    title: "Atom/Icons",
    component: Icons
} as ComponentMeta<typeof Icons>;

const Template : ComponentStory<typeof Icons> = args => (
    <Icons {...args}/>
);

export const SearchIconStory = Template.bind({});
SearchIconStory.args = {
    children: <SearchIcon style={{color: '#3A4649', height:"23.7px", width : "23.7px"}}/>
}

export const DownArrowIconStory = Template.bind({});
DownArrowIconStory.args = {
    children: <DownArrowIcon style={{color: "#042330"}}/>
};


