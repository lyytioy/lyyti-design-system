import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../themes/ThemeSelector';
import CogIcon from '../../components/icons/Streamline-Essential-Regular/SVG/Stroke version/01-Interface Essential/12-Settings/Cog';
import { SvgIconProps } from '@material-ui/core';

export default {
  title: 'Components/Data Display/Icons',
  component: CogIcon,
} as Meta;

const Template: Story<SvgIconProps> = (args) => (
  <ThemeSelector>
    <CogIcon {...args} />
  </ThemeSelector>
);

export const Cog = Template.bind({});
Cog.args = {};
