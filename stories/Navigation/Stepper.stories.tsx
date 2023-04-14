import { StoryFn, Meta } from '@storybook/react';
import Stepper, { StepperProps } from '../../src/components/Stepper';
import { Step } from '@mui/material';
import StepConnector from '../../src/components/StepConnector';
import StepLabel from '../../src/components/StepLabel';
import StepButton from '../../src/components/StepButton';

export default {
  title: 'Components/Navigation/Stepper',
  component: Stepper,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    connector: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: StoryFn<StepperProps> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {
  alternativeLabel: true,
  connector: <StepConnector />,
  activeStep: 1,
  children: [
    <Step key={0}>
      <StepLabel>{'Label here'}</StepLabel>
    </Step>,
    <Step key={1}>
      <StepLabel>{'Label here'}</StepLabel>
    </Step>,
    <Step key={2}>
      <StepLabel>{'Label here'}</StepLabel>
    </Step>,
  ],
};

export const ClickableSteps = Template.bind({});
ClickableSteps.args = {
  alternativeLabel: true,
  connector: <StepConnector />,
  activeStep: 2,
  children: [
    <Step key={0}>
      <StepButton>{'Label here'}</StepButton>
    </Step>,
    <Step key={1}>
      <StepButton>{'Label here'}</StepButton>
    </Step>,
    <Step key={2}>
      <StepButton>{'Label here'}</StepButton>
    </Step>,
    <Step key={3}>
      <StepButton>{'Label here'}</StepButton>
    </Step>,
    <Step key={4}>
      <StepButton>{'Label here'}</StepButton>
    </Step>,
  ],
};
