import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Alert, { AlertProps } from '../components/Alert';
import ThemeSelector from "../themes/ThemeSelector";
import Button from '../components/Button';
import AlertTitle from '../components/AlertTitle';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
        control: {
            type: 'radio',
            options: [
                'standard',
                'outlined',
                'filled'
          ]
        }
    },
    severity: {
        control: {
            type: 'select',
            options: [
                'success',
                'info',
                'warning',
                'error'
            ]
        }
    }
}
} as Meta;

const Template: Story<AlertProps> = (args) => <ThemeSelector><Alert {...args} /></ThemeSelector>;

const clickFunction = () => {
    console.log('You clicked a button!');
}

export const Success = Template.bind({});
Success.args = {
    children: 'Alert content in here',
    onClose: clickFunction,
    variant: 'outlined'
};

export const Error = Template.bind({});
Error.args = {
    severity: 'error',
    children: 'Alert content in here',
    action: <Button color="inherit" chunky={false}>Button</Button>
};

export const Info = Template.bind({});
Info.args = {
    severity: 'info',
    children: 'Alert content in here',
    variant: 'filled'
};

export const Warning = Template.bind({});
Warning.args = {
    severity: 'warning',
    children: [<AlertTitle>Title</AlertTitle>, 'Alert content in here'],
    onClose: clickFunction,
};