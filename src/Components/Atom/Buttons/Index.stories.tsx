import { ComponentStory, ComponentMeta } from "@storybook/react";
import Buttons from "./Index"
import {Add as AddIcon, ArrowForward as ArrowForwardIcon} from '@mui/icons-material';

const meta: ComponentMeta<typeof Buttons> = {
    title : 'Atom/Buttons',
    component: Buttons,
    argTypes: {
        onClick: { action: 'clicked' }
    }
}

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args}/>;
export const AddToLibraryBtn = Template.bind({});

AddToLibraryBtn.args = {
    children: 'Add to library',
    startIcon: <AddIcon/>,
    variant: 'contained',
    color: 'secondary'
}

export const FinishedBookBtn = Template.bind({});

FinishedBookBtn.args = {
    children: 'Finished',
    variant: 'contained',
    color: 'primary',
}

export const ReadNowBtn = Template.bind({});

ReadNowBtn.args = {
    children: 'Read now',
    variant: 'outlined',
    color: 'primary',
}

export const SendToKindleBtn = Template.bind({});

SendToKindleBtn.args = {
    children: 'Send to Kindle',
    variant: 'text',
    color: 'text2',
    endIcon: <ArrowForwardIcon/>
}


export default meta;