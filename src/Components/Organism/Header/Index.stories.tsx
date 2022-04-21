import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Index";

export default{
    title: "Organism/Header",
    component: Header
} as ComponentMeta<typeof Header>;

const Template : ComponentStory<typeof Header> = args => (
    <Header {...args}/>
);

export const HeaderStory = Template.bind({});