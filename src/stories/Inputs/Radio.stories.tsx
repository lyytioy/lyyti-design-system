import { Story, Meta } from '@storybook/react/types-6-0';
import Radio, { RadioProps } from '../../components/Radio';
import FormControlLabel, { FormControlLabelProps } from '../../components/FormControlLabel';
import ThemeSelector from '../../themes/ThemeSelector';
import '../../styles/objektiv.css';

export default {
  title: 'Components/Inputs/Radio',
  component: Radio,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium'],
      },
    },
  },
} as Meta;

const Template: Story<RadioProps> = (args) => (
  <ThemeSelector>
    <Radio {...args} />
  </ThemeSelector>
);

const LabelTemplate: Story<FormControlLabelProps> = (args) => (
  <ThemeSelector>
    <FormControlLabel {...args} />
  </ThemeSelector>
);

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
