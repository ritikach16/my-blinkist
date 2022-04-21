import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react'
import TypographyComponent from './Index';

export default{
    title: "Atom/TypographyComponent",
    component: TypographyComponent
} as ComponentMeta<typeof TypographyComponent>;

const Template: ComponentStory<typeof TypographyComponent> = args => (
    <TypographyComponent {...args}/>
);

export const Content = Template.bind({});

Content.args = {
    variant: 'h3',
    children: "Explore Books on entrepreneurship"
}
