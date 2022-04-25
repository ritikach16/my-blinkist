import { ComponentStory, ComponentMeta } from "@storybook/react";
import Buttons from "./Index"
import { AddIcon, RightArrowIcon } from "../../../Icons";

const meta: ComponentMeta<typeof Buttons> = {
    title : 'Molecule/Buttons',
    component: Buttons,
    argTypes: {
        onClick: { action: 'clicked' }
    }
}

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args}/>;
export const AddToLibraryBtn = Template.bind({});

AddToLibraryBtn.args = {
    children: 'Add to library',
    startIcon: <AddIcon sx = {{position: "relative", top: "4px"}}/>,
    variant: 'contained',
}

export const FinishedBookBtn = Template.bind({});

FinishedBookBtn.args = {
    children: 'Finished',
    variant: 'contained',
}

export const ReadNowBtn = Template.bind({});

ReadNowBtn.args = {
    children: 'Read now',
    variant: 'outlined',
}

export const SendToKindleBtn = Template.bind({});

SendToKindleBtn.args = {
    children: 'Send to Kindle',
    variant: 'text',
    endIcon: <RightArrowIcon sx={{width: "35px", position: 'relative', top: '4.5px'}}/>
}


export default meta;