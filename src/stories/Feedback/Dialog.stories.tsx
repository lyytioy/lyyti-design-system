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
        onClick={() => setDialogOpen(!dialogOpen)}>
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
