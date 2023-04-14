import { StoryFn, Meta } from '@storybook/react';
import Radio, { RadioProps } from '../../src/components/Radio';
import FormControlLabel, { FormControlLabelProps } from '../../src/components/FormControlLabel';

export default {
  title: 'Components/Inputs/Radio',
  component: Radio,
  argTypes: {
    size: {
      options: ['small', 'medium'],
    },
  },
} as Meta;

const Template: StoryFn<RadioProps> = (args) => <Radio {...args} />;

const LabelTemplate: StoryFn<FormControlLabelProps> = (args) => <FormControlLabel {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  checked: true,
  disabled: false,
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  checked: true,
  disabled: false,
  size: 'small',
};

export const Label = LabelTemplate.bind({});
Label.args = {
  control: <Radio />,
  label: 'Label',
};
