import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Stepper, { StepperProps } from '../../components/Stepper';
import ThemeSelector from '../../themes/ThemeSelector';
import { Step } from '@material-ui/core';
import StepConnector from '../../components/StepConnector';
import StepLabel from '../../components/StepLabel';
import StepButton from '../../components/StepButton';

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

const Template: Story<StepperProps> = (args) => (
  <ThemeSelector>
    <Stepper {...args} />
  </ThemeSelector>
);

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
