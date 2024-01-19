import { ChangeEvent, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Source } from '@storybook/addon-docs';
import { SvgIconProps } from '@mui/material';
import Paper from '../../src/components/Paper';
import TextField from '../../src/components/TextField';
import Grid from '../../src/components/Grid';
import * as i from '../../src/icons';
import { modifyExcludedParams } from '../../.storybook/excludedParams';

export default {
  title: 'Components/Data Display/Icons',
  component: i.Cog,
  parameters: {
    docs: {
      description: {
        component:
          'Use icons to afford interactivity, communicate messages at quickly and draw attention to important information.',
      },
    },
    controls: { exclude: modifyExcludedParams(['fontSize', 'color']) },
  },
  argTypes: {
    htmlColor: {
      control: 'color',
      description: 'Applies a color attribute to the SVG element.',
      table: {
        type: {
          summary: '"string"',
        },
      },
    },
    color: {
      description: 'The color of the component',
      options: ['inherit', 'primary', 'secondary', 'action', 'error', 'disabled', undefined],
      table: {
        defaultValue: {
          summary: 'inherit',
        },
        type: {
          summary:
            '"inherit" | "primary" | "secondary" | "action" | "error" | "disabled" | undefined',
        },
      },
    },
    fontSize: {
      description:
        'The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.',
      options: ['default', 'inherit', 'large', 'small'],
      table: {
        defaultValue: {
          summary: 'default',
        },
        type: {
          summary: '"default" | "inherit" | "large" | "small"',
        },
      },
    },
  },
} as Meta;

const iconsList = [
  { name: 'Checkbox', component: i.Checkbox },
  { name: 'Radio', component: i.Radio },
  { name: 'Rectangle', component: i.Rectangle },
  { name: 'Excel', component: i.Excel },
  { name: 'Pdf', component: i.Pdf },
  { name: 'Link', component: i.Link },
  { name: 'CreditCard', component: i.CreditCard },
  { name: 'Attachment', component: i.Attachment },
  { name: 'Bank', component: i.Bank },
  { name: 'Chat', component: i.Chat },
  { name: 'Filter', component: i.Filter },
  { name: 'Mobile', component: i.Mobile },
  { name: 'Lock', component: i.Lock },
  { name: 'Code', component: i.Code },
  { name: 'FaceId', component: i.FaceId },
  { name: 'Hierarchy', component: i.Hierarchy },
  { name: 'HierarchyTree', component: i.HierarchyTree },
  { name: 'ShareHierarchy', component: i.ShareHierarchy },
  { name: 'AddressPin', component: i.AddressPin },
  { name: 'Pin', component: i.Pin },
  { name: 'Share', component: i.Share },
  { name: 'Layout', component: i.Layout },
  { name: 'LayoutGrid', component: i.LayoutGrid },
  { name: 'LayoutRows', component: i.LayoutRows },
  { name: 'LayoutSquare', component: i.LayoutSquare },
  { name: 'List', component: i.List },
  { name: 'Menu', component: i.Menu },
  { name: 'Download', component: i.Download },
  { name: 'Upload', component: i.Upload },
  { name: 'LaptopDownload', component: i.LaptopDownload },
  { name: 'LaptopUpload', component: i.LaptopUpload },
  { name: 'UsersShare', component: i.UsersShare },
  { name: 'PeopleShare', component: i.PeopleShare },
  { name: 'PeopleSwitch', component: i.PeopleSwitch },
  { name: 'ChevronUp', component: i.ChevronUp },
  { name: 'ChevronRight', component: i.ChevronRight },
  { name: 'ChevronDown', component: i.ChevronDown },
  { name: 'ChevronLeft', component: i.ChevronLeft },
  { name: 'ArrowUp', component: i.ArrowUp },
  { name: 'ArrowDown', component: i.ArrowDown },
  { name: 'ArrowLeft', component: i.ArrowLeft },
  { name: 'ArrowRight', component: i.ArrowRight },
  { name: 'Loading', component: i.Loading },
  { name: 'PaginationLeft', component: i.PaginationLeft },
  { name: 'PaginationRight', component: i.PaginationRight },
  { name: 'PaginationDown', component: i.PaginationDown },
  { name: 'PaginationUp', component: i.PaginationUp },
  { name: 'PaginationFirst', component: i.PaginationFirst },
  { name: 'PaginationLast', component: i.PaginationLast },
  { name: 'Clock', component: i.Clock },
  { name: 'Stopwatch', component: i.Stopwatch },
  { name: 'Calendar', component: i.Calendar },
  { name: 'CalendarDate', component: i.CalendarDate },
  { name: 'Plus', component: i.Plus },
  { name: 'Close', component: i.Close },
  { name: 'Copy', component: i.Copy },
  { name: 'CopyTemplate', component: i.CopyTemplate },
  { name: 'Save', component: i.Save },
  { name: 'Bin', component: i.Bin },
  { name: 'Edit', component: i.Edit },
  { name: 'Eye', component: i.Eye },
  { name: 'EyeClosed', component: i.EyeClosed },
  { name: 'Cog', component: i.Cog },
  { name: 'Star', component: i.Star },
  { name: 'StarFilled', component: i.StarFilled },
  { name: 'Preview', component: i.Preview },
  { name: 'Search', component: i.Search },
  { name: 'Undo', component: i.Undo },
  { name: 'Alert', component: i.Alert },
  { name: 'AlertCircle', component: i.AlertCircle },
  { name: 'Success', component: i.Success },
  { name: 'Info', component: i.Info },
  { name: 'Stop', component: i.Stop },
  { name: 'ParticipantAdded', component: i.ParticipantAdded },
  { name: 'ParticipantRegistered', component: i.ParticipantRegistered },
  { name: 'ParticipantAttending', component: i.ParticipantAttending },
  { name: 'ParticipantDeclined', component: i.ParticipantDeclined },
  { name: 'ParticipantNoShow', component: i.ParticipantNoShow },
  { name: 'ParticipantAddedOutlined', component: i.ParticipantAddedOutlined },
  { name: 'ParticipantRegisteredOutlined', component: i.ParticipantRegisteredOutlined },
  { name: 'ParticipantAttendingOutlined', component: i.ParticipantAttendingOutlined },
  { name: 'ParticipantDeclinedOutlined', component: i.ParticipantDeclinedOutlined },
  { name: 'ParticipantNoShowOutlined', component: i.ParticipantNoShowOutlined },
  { name: 'ParticipantNotReacted', component: i.ParticipantNotReacted },
  { name: 'ParticipantNotReactedOutlined', component: i.ParticipantNotReactedOutlined },
  { name: 'ParticipantEmail', component: i.ParticipantEmail },
  { name: 'Bill', component: i.Bill },
  { name: 'BrowserPage', component: i.BrowserPage },
  { name: 'EmptyFile', component: i.EmptyFile },
  { name: 'Company', component: i.Company },
  { name: 'ImageEdit', component: i.ImageEdit },
  { name: 'Laptop', component: i.Laptop },
  { name: 'LockShield', component: i.LockShield },
  { name: 'Mail', component: i.Mail },
  { name: 'Meter', component: i.Meter },
  { name: 'MonitorChart', component: i.MonitorChart },
  { name: 'MonitorPieChart', component: i.MonitorPieChart },
  { name: 'Participants', component: i.Participants },
  { name: 'Profile', component: i.Profile },
  { name: 'Quill', component: i.Quill },
  { name: 'EVS1', component: i.EVS1 },
  { name: 'EVS2', component: i.EVS2 },
  { name: 'EVS3', component: i.EVS3 },
  { name: 'EVS4', component: i.EVS4 },
  { name: 'EVS5', component: i.EVS5 },
  { name: 'EVSSleeping', component: i.EVSSleeping },
  { name: 'Globe', component: i.Globe },
  { name: 'AwardBadgeStar', component: i.AwardBadgeStar },
  { name: 'Hourglass', component: i.Hourglass },
  { name: 'Write', component: i.Write },
  { name: 'Note', component: i.Note },
  { name: 'MailSend', component: i.MailSend },
  { name: 'MapPin', component: i.MapPin },
  { name: 'LightBulb', component: i.LightBulb },
  { name: 'NotAllowed', component: i.NotAllowed },
  { name: 'Trigger', component: i.Trigger },
  { name: 'Phone', component: i.Phone },
  { name: 'QrCode', component: i.QrCode },
  { name: 'HeavyPlus', component: i.HeavyPlus },
  { name: 'Folder', component: i.Folder },
  { name: 'Person', component: i.Person },
  { name: 'TextQuestion', component: i.TextQuestion },
  { name: 'SelectOneQuestion', component: i.SelectOneQuestion },
  { name: 'SelectManyQuestion', component: i.SelectManyQuestion },
  { name: 'DateQuestion', component: i.DateQuestion },
  { name: 'EmailQuestion', component: i.EmailQuestion },
  { name: 'StatusQuestion', component: i.StatusQuestion },
  { name: 'Check', component: i.Check },
  { name: 'Play', component: i.Play },
  { name: 'Pause', component: i.Pause },
  { name: 'PauseContained', component: i.PauseContained },
  { name: 'Delete', component: i.Delete },
  { name: 'Send', component: i.Send },
  { name: 'PlayContained', component: i.PlayContained },
  { name: 'ClockContained', component: i.ClockContained },
  { name: 'ParticipantFictional', component: i.ParticipantFictional },
  { name: 'Sharing', component: i.Sharing },
  { name: 'DoubleArrow', component: i.DoubleArrow },
  { name: 'HandGrab', component: i.HandGrab },
  { name: 'PhoneNumberQuestion', component: i.PhoneNumberQuestion },
  { name: 'Office', component: i.Office },
  { name: 'HeaderBlock', component: i.HeaderBlock },
  { name: 'TextBlock', component: i.TextBlock },
];

const Template: StoryFn<SvgIconProps> = (args) => {
  const [search, setSearch] = useState('');
  const [importIcon, setImportIcon] = useState('Cog');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Grid container spacing={1} direction="column">
      <Grid container alignItems={'center'} spacing={1}>
        <Grid item xs={4}>
          <TextField onChange={handleChange} value={search} placeholder="Search" />
        </Grid>
        <Grid item xs={8}>
          <Source
            language={'js'}
            code={`
          // import icon
import { ${importIcon} } from '@lyyti/design-system/icons';
// use in a component
<${importIcon} ${args.color && args.color !== 'inherit' ? `color="${args.color}"` : ''}${
              args.fontSize && args.fontSize !== 'medium' ? ` fontSize="${args.fontSize}"` : ''
            }${args.htmlColor && args.htmlColor ? ` htmlColor="${args.htmlColor}"` : ''}/>
        `}
            dark
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {iconsList
          .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((icon) => {
            return (
              <Grid item xs={3} key={icon.name} onClick={() => setImportIcon(icon.name)}>
                <Paper
                  sx={{
                    backgroundColor: 'grey.200',
                    borderRadius: '10px',
                    padding: '10px',
                    display: 'grid',
                    placeItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <icon.component {...args} />
                  <span>{icon.name}</span>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
};

export const All = Template.bind({});
All.args = { color: 'inherit', htmlColor: undefined, fontSize: undefined };
