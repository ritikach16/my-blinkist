import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Banner from './Index'

export default{
    title: "Molecule/Banner",
    component: Banner
} as ComponentMeta<typeof Banner>;

const Template : ComponentStory<typeof Banner> = args => (
    <Banner {...args} />
);

export const MainBanner = Template.bind({});
