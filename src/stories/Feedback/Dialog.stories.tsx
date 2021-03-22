import { Story, Meta } from '@storybook/react/types-6-0';
import { useState } from 'react';
import Dialog, { DialogProps } from '../../components/Dialog';
import Button from '../../components/Button';
import ThemeSelector from '../../themes/ThemeSelector';

export default {
  title: 'Components/Feedback/Dialog',
  component: Dialog,
  argTypes: {
    dialogActions: { control: false },
  },
  /*  TODO: Try removing these default values when this is released
      https://github.com/storybookjs/storybook/releases/tag/v6.2.0-alpha.30

      Related issue: https://github.com/storybookjs/storybook/issues/12098
  */
  args: {
    dialogTitle: 'This is the dialog title',
    dialogContent: 'This is the dialog content',
    dialogActions: (
      <>
        <Button>{'Cancel'}</Button>
        <Button>{'Delete'}</Button>
      </>
    ),
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
        onClick={() => setDialogOpen(true)}>
        {'Open Dialog'}
      </Button>
      <Dialog {...args} />
    </ThemeSelector>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const ImageDialog = Template.bind({});
ImageDialog.args = { dialogContent: <img src="/steve-basic.png" alt="Steve" /> };
