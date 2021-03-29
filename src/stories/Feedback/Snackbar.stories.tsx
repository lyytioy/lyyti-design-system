import { Story, Meta } from '@storybook/react/types-6-0';
import { useState } from 'react';
import Snackbar, { SnackbarProps } from 'components/Snackbar';
import Button from 'components/Button';
import ThemeSelector from 'themes/ThemeSelector';

export default {
  title: 'Components/Feedback/Snackbar',
  component: Snackbar,
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
    severity: {
      control: {
        type: 'select',
        options: ['success', 'error', 'warning', 'info'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['standard', 'filled', 'outlined'],
      },
    },
    direction: {
      control: {
        type: 'select',
        options: ['right', 'left', 'up', 'down'],
      },
    },
  },
} as Meta;

const Template: Story<SnackbarProps> = (args) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleClose = (event: React.SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  args.open = showSnackbar;
  args.onClose = handleClose;

  return (
    <ThemeSelector>
      <Button
        variant="contained"
        color="primary"
        chunky={false}
        onClick={() => setShowSnackbar(true)}>
        {'Open snackbar'}
      </Button>
      <Snackbar {...args} />
    </ThemeSelector>
  );
};

export const Success = Template.bind({});
Success.args = {};

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
