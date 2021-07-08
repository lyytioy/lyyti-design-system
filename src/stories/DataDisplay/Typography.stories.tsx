import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../themes/ThemeSelector';
import Typography, { TypographyProps } from '../../components/Typography';

export default {
  title: 'Components/Data Display/Typography',
  component: Typography,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: 'Lorem ipsum',
  },
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <ThemeSelector>
    <Typography {...args} />
  </ThemeSelector>
);

export const Default = Template.bind({});
Default.args = {};

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  component: 'p',
};
