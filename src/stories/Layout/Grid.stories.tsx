import { Story, Meta } from '@storybook/react/types-6-0';
import Grid, { GridProps } from '../../components/Grid';
import { DefaultCard } from '../Surfaces/Card.stories';
import ThemeSelector from '../../themes/ThemeSelector';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => (
  <ThemeSelector>
    <Grid {...args}>
      <DefaultCard />
    </Grid>
  </ThemeSelector>
);

export const SimpleGrid = Template.bind({});
SimpleGrid.args = {};
