import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { CardProps } from 'components/Card';
import ThemeSelector from 'themes/ThemeSelector';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import CardActions from 'components/CardActions';
import { Primary as PrimaryContainedButton } from '../Inputs/ContainedButton.stories';
import { Primary as PrimaryOutlinedButton } from '../Inputs/OutlinedButton.stories';

export default {
  title: 'Components/Surfaces/Card',
  component: Card,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => (
  <ThemeSelector>
    <Card {...args} />
  </ThemeSelector>
);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  elevation: 1,
  cardHeader: {
    title: 'Lyyti Oy',
    subheader: 'September 26, 2020',
  },
  cardActions: (
    <>
      <PrimaryOutlinedButton key={1} {...PrimaryOutlinedButton.args}>
        {'Cancel'}
      </PrimaryOutlinedButton>
      <PrimaryContainedButton key={2} {...PrimaryContainedButton.args}>
        {'Save'}
      </PrimaryContainedButton>
    </>
  ),
};

export const OutlinedCard = Template.bind({});
OutlinedCard.args = {
  variant: 'outlined',
  cardHeader: {
    title: 'Lyyti Oy',
    subheader: 'September 26, 2020',
  },
  cardActions: (
    <>
      <PrimaryOutlinedButton key={1} {...PrimaryOutlinedButton.args}>
        {'Cancel'}
      </PrimaryOutlinedButton>
      <PrimaryContainedButton key={2} {...PrimaryContainedButton.args}>
        {'Save'}
      </PrimaryContainedButton>
    </>
  ),
};
