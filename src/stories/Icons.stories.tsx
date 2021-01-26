import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../themes/ThemeSelector';
import CogIcon from '../components/icons/Cog';
import { SvgIconProps } from '@material-ui/core';

export default {
  title: 'Components/Icons',
  component: CogIcon,
} as Meta;

const Template: Story<SvgIconProps> = (args) => (
  <ThemeSelector>
    <CogIcon {...args} />
  </ThemeSelector>
);

export const Cog = Template.bind({});
Cog.args = {};
