import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Banner from '../../Molecule/Banner/Index';
import SearchBar from '../../Molecule/SearchBar/Index';
import Footer from '../../Organism/Footer/Index';
import Header from '../../Organism/Header/Index';
import Entrepreneurship from './Index'

export default{
    title: "Templates/Entrepreneurship",
    component: Entrepreneurship
} as ComponentMeta<typeof Entrepreneurship>;

const Template: ComponentStory<typeof Entrepreneurship> = (args) => (
    <Entrepreneurship {...args} />
);

export const EntrepreneurshipStory = Template.bind({});
EntrepreneurshipStory.args = {
    header: <Header/>,
    searchBar: <SearchBar/>,
    banner: <Banner/>,
    footer: <Footer/>
}