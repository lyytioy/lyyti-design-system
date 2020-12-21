import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Stepper, { StepperProps } from '../components/Stepper';
import ThemeSelector from "../themes/ThemeSelector";
import { Step } from '@material-ui/core';
import StepConnector from '../components/StepConnector';
import StepLabel from '../components/StepLabel';

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as Meta;

const Template: Story<StepperProps> = (args) => <ThemeSelector><Stepper {...args} /></ThemeSelector>;

export const Default = Template.bind({});
Default.args = {
    alternativeLabel: true,
    orientation: 'horizontal',
    connector: <StepConnector />,
    activeStep: 1,
    children: [<Step key={0}><StepLabel>Label here</StepLabel></Step>, <Step key={1}><StepLabel>Label here</StepLabel></Step>, <Step key={2}><StepLabel>Label here</StepLabel></Step>]
};

export const MoreSteps = Template.bind({});
MoreSteps.args = {
    alternativeLabel: true,
    orientation: 'horizontal',
    connector: <StepConnector />,
    activeStep: 2,
    children: [<Step key={0}><StepLabel>Label here</StepLabel></Step>, <Step key={1}><StepLabel>Label here</StepLabel></Step>, <Step key={2}><StepLabel>Label here</StepLabel></Step>, <Step key={3}><StepLabel>Label here</StepLabel></Step>, <Step key={4}><StepLabel>Label here</StepLabel></Step>]
};