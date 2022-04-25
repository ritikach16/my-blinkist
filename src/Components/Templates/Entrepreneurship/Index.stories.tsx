import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Entrepreneurship from './Index'

export default{
    title: "Templates/Entrepreneurship",
    component: Entrepreneurship
} as ComponentMeta<typeof Entrepreneurship>;

const Template: ComponentStory<typeof Entrepreneurship> = () => (
    <Entrepreneurship />
);

export const EntrepreneurshipStory = Template.bind({});
