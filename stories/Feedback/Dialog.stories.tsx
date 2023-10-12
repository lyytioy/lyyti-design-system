import { StoryFn, Meta } from '@storybook/react';
import { useState } from 'react';
import Dialog, { DialogProps } from '../../src/components/Dialog';
import Button from '../../src/components/Button';

export default {
  title: 'Components/Feedback/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component:
          'Use dialogs to inform users about a task, or to display critical information, or to require decisions.',
      },
    },
  },
  argTypes: {
    children: { description: 'The content of the component.' },
    dialogActions: {
      description:
        'Use to add one or more elements as actions. Needs to be wrapped to one element, like a React Fragment.',
      control: false,
    },
    dialogTitle: { description: 'Use to give a title to the Dialog.', control: false },
    BackdropComponent: {
      table: { disable: true },
    },
    BackdropProps: {
      table: { disable: true },
    },
    closeAfterTransition: {
      table: { disable: true },
    },
    components: {
      table: { disable: true },
    },
    componentsProps: {
      table: { disable: true },
    },
    container: {
      table: { disable: true },
    },
    disableAutoFocus: {
      table: { disable: true },
    },
    disableEnforceFocus: {
      table: { disable: true },
    },
    disablePortal: {
      table: { disable: true },
    },
    disableRestoreFocus: {
      table: { disable: true },
    },
    disableScrollLock: {
      table: { disable: true },
    },
    hideBackdrop: {
      table: { disable: true },
    },
    keepMounted: {
      table: { disable: true },
    },
  },
  /*  TODO: Try removing these default values when this is released
      https://github.com/storybookjs/storybook/releases/tag/v6.2.0-alpha.30

      Related issue: https://github.com/storybookjs/storybook/issues/12098
  */
  args: {
    children: 'This is the dialog content',
    dialogActions: (
      <>
        <Button>{'Cancel'}</Button>
        <Button>{'Delete'}</Button>
      </>
    ),
    dialogTitle: 'This is the dialog title',
    fullWidth: true,
  },
} as Meta;

const Template: StoryFn<DialogProps> = (args) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  args.open = dialogOpen;
  args.onClose = () => setDialogOpen(false);
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>
        {'Open Dialog'}
      </Button>
      <Dialog {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const ImageDialog = Template.bind({});
ImageDialog.args = { children: <img src="/steve-basic.png" alt="Steve" /> };
