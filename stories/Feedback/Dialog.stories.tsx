import { Story, Meta } from '@storybook/react/types-6-0';
import { useState } from 'react';
import Dialog, { DialogProps } from '../../src/components/Dialog';
import Button from '../../src/components/Button';
import ThemeSelector from '../../src/themes/ThemeSelector';

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
  },
} as Meta;

const Template: Story<DialogProps> = (args) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  args.open = dialogOpen;
  args.onClose = () => setDialogOpen(false);
  return (
    <ThemeSelector>
      <Button
        variant="contained"
        color="primary"
        chunky={false}
        onClick={() => setDialogOpen(true)}
      >
        {'Open Dialog'}
      </Button>
      <Dialog {...args} />
    </ThemeSelector>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const ImageDialog = Template.bind({});
ImageDialog.args = { children: <img src="/steve-basic.png" alt="Steve" /> };
