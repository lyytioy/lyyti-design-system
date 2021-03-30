import { IconButton } from '@material-ui/core';
import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { CardProps } from 'components/Card';
import { Star } from 'components/icons';
import ThemeSelector from 'themes/ThemeSelector';
import { Primary as PrimaryContainedButton } from '../Inputs/ContainedButton.stories';
import { Primary as PrimaryOutlinedButton } from '../Inputs/OutlinedButton.stories';

export default {
  title: 'Components/Surfaces/Card',
  component: Card,
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title of the card',
    },
    subheader: {
      control: 'text',
      description: 'The subheader for the card',
    },
    headerAvatar: {
      control: false,
      description: 'The Avatar for the card header',
    },
    headerAction: {
      control: false,
      description: 'The action to display in the card header',
    },
    content: {
      control: 'text',
      description: 'The main content for the card, can be passed as children too',
    },
    actions: {
      control: false,
      description: 'The actions at the bottom of the card',
    },
    headerBackgroundColor: {
      control: 'color',
      description: 'The background color for card header',
    },
  },
  args: {
    title: 'Lyyti Oy',
    subheader: 'September 26, 2020',
    content: 'Lorem ipsum dolor sit amet',
    actions: (
      <>
        <PrimaryOutlinedButton key={1} {...PrimaryOutlinedButton.args}>
          {'Cancel'}
        </PrimaryOutlinedButton>
        <PrimaryContainedButton key={2} {...PrimaryContainedButton.args}>
          {'Save'}
        </PrimaryContainedButton>
      </>
    ),
  },
} as Meta;

const Template: Story<CardProps> = (args) => (
  <ThemeSelector>
    <Card {...args} />
  </ThemeSelector>
);

export const Default = Template.bind({});
Default.args = {};

export const HeaderAction = Template.bind({});
HeaderAction.args = {
  headerBackgroundColor: 'rgba(4, 91, 86, 0.1)',
  headerAction: (
    <IconButton>
      <Star />
    </IconButton>
  ),
};
