import { IconButton } from '@material-ui/core';
import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { CardProps } from 'components/Card';
import Avatar from 'components/Avatar';
import Grid from 'components/Grid';
import { Star } from 'components/icons';
import ThemeSelector from 'themes/ThemeSelector';
import { Primary as PrimaryContainedButton } from '../Inputs/ContainedButton.stories';
import { Primary as PrimaryOutlinedButton } from '../Inputs/OutlinedButton.stories';

export default {
  title: 'Components/Surfaces/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'Cards contain content and actions about a single subject. They are used to group similar concepts about a single subject together so that it’s easy to scan and get things done in Lyyti.',
      },
    },
  },
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
    children: {
      control: 'text',
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
    children: 'Lorem ipsum dolor sit amet',
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

export const HeaderAvatar = Template.bind({});
HeaderAvatar.args = {
  headerBackgroundColor: 'rgba(4, 91, 86, 0.1)',
  headerAvatar: <Avatar alt="Steve" src="/steve-basic.png" />,
};

export const OnlyContent = Template.bind({});
OnlyContent.args = {
  title: undefined,
  subheader: undefined,
  content: (
    <Grid container>
      <Grid item sm={2}>
        <img src="/steve-basic.png" alt="Steve, blue octopus" />
      </Grid>
      <Grid item sm={10}>
        <p>
          {
            'Cards can support multiple actions and UI controls. Use restraint and remember that cards are entry points to more complex and detailed information.'
          }
        </p>
      </Grid>
    </Grid>
  ),
  actions: undefined,
};
