import React from 'react'
import MyLibrary from './Index';
import Header from '../../Organism/Header/Index';
import Footer from '../../Organism/Footer/Index';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default{
    title: "Templates/MyLibrary",
    component: MyLibrary
} as ComponentMeta<typeof MyLibrary>;

const Template : ComponentStory<typeof MyLibrary> = (args) => (
    <MyLibrary {...args}/>
);

export const LibraryTemplate = Template.bind({});
LibraryTemplate.args = {
    header: <Header />,
    footer: <Footer/>
}