import type { StoryFn, Meta } from '@storybook/react';
import { useState, SyntheticEvent } from 'react';
import Snackbar, { SnackbarProps } from '../../src/components/Snackbar';
import Button from '../../src/components/Button';
import { modifyExcludedParams } from '../../.storybook/excludedParams';

const meta: Meta = {
  title: 'Components/Feedback/Snackbar',
  component: Snackbar,
  parameters: {
    docs: {
      description: {
        component: 'Use snackbars to provide brief messages about app processes.',
      },
    },
    controls: { exclude: modifyExcludedParams(['color']) },
  },
  argTypes: {
    color: {
      description:
        'The color of the snackbar. Unless provided, the value is taken from the severity prop.',
      options: ['success', 'error', 'warning', 'info'],
    },
    direction: {
      description: 'Direction the snackbar will enter from.',
    },
    message: { description: 'The message to display.', type: 'string' },
    severity: {
      description: 'The severity of the snackbar. This defines the color and icon used.',
    },
    variant: {
      description: 'The variant to use.',
    },
  },
};

export default meta;

const Template: StoryFn<SnackbarProps> = (args) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleClose = (event: Event | SyntheticEvent<any, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  args.open = showSnackbar;
  args.onClose = handleClose;

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setShowSnackbar(true)}>
        {'Open snackbar'}
      </Button>
      <Snackbar {...args} />
    </>
  );
};

export const Success = Template.bind({});
Success.args = {
  message: 'Success message',
};

export const Error = Template.bind({});
Error.args = {
  message: 'Error occured',
  severity: 'error',
  variant: 'outlined',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  direction: 'right',
};

export const Info = Template.bind({});
Info.args = {
  message: 'Info message here',
  severity: 'info',
  variant: 'filled',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  direction: 'up',
};
