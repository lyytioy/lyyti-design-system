import { StoryFn, Meta } from '@storybook/react';
import { Box } from '../../src';
import Slider, {  SliderProps } from '../../src/components/Slider'

const meta: Meta<typeof Slider>  = {
  title: 'Components/Inputs/Slider',
  component: Slider,
  argTypes: {
    min: {
        control: { type: 'number'}, 
        table: { defaultValue: { summary: 0 } },
        description: 'Minimal value that can be set', 
    },
    max: {
        control: { type: 'number'}, 
        table: { defaultValue: { summary: 100 } },
        description: 'Maximum value that can be set', 
    },
    step: {
        control: { type: 'number'}, 
        table: { defaultValue: { summary: 1 } },
        description: 'Each step value the slider will take', 
    },
    valueLabelDisplay: {
        control: { options: ['on', 'auto', 'off'] }, 
        table: { defaultValue: { summary: 'off' } },
        description: 'Controls labels visibility', 
    },
    marks: { 
        control: { type: 'object'}, 
        table: { defaultValue: { summary: false } },
        description: 'Marks to display on the slider. {value: number, label: string}[] or boolean', 
     },
  },
};

const Template: StoryFn<SliderProps> = (args) => (
    <Box sx={{ width: 300 }}>
        <Slider {...args} />
    </Box>);

export const Default = Template.bind({});
Default.args = {
    min: 0,
    max: 100,
    step: 1,
    valueLabelDisplay: 'off',
    marks: [],
};

export const Percentage = Template.bind({});
Percentage.args = {
    min: 0,
    max: 100,
    step: 1,
    valueLabelDisplay: 'auto',
    marks: [{ value: 0, label: '0%' }, { value: 100, label: '100%'}]
};

export const VisibleValue = Template.bind({});
VisibleValue.args = {
    min: 0,
    max: 100,
    step: 1,
    marks: [],
    valueLabelDisplay: 'on',
};

export const Range = Template.bind({});
Range.args = {
    min: 0,
    max: 100,
    step: 1,
    marks: [],
    value: [20, 60],
};

export default meta;