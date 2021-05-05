import { ChangeEvent, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Source } from '@storybook/addon-docs/blocks';
import ThemeSelector from 'themes/ThemeSelector';
import { SvgIconProps, makeStyles, Theme, createStyles } from '@material-ui/core';
import TextField from 'components/TextField';
import Grid from 'components/Grid';
import {
  Excel,
  Pdf,
  Link,
  CreditCard,
  Attachment,
  Bank,
  Chat,
  Filter,
  Mobile,
  Lock,
  Code,
  FaceId,
  Hierarchy,
  HierarchyTree,
  ShareHierarchy,
  Magnifier,
  Pin,
  Share,
  Layout,
  LayoutGrid,
  LayoutRows,
  LayoutSquare,
  List,
  Menu,
  Download,
  Upload,
  LaptopDownload,
  LaptopUpload,
  UsersShare,
  PeopleShare,
  PeopleSwitch,
  ChevronUp,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  ArrowUp,
  ArrowDown,
  Loading,
  PaginationLeft,
  PaginationRight,
  PaginationFirst,
  PaginationLast,
  Clock,
  Stopwatch,
  Calendar,
  CalendarDate,
  Plus,
  Close,
  Copy,
  Save,
  Bin,
  Edit,
  Eye,
  EyeClosed,
  Cog,
  Star,
  StarFilled,
  Preview,
  Search,
  Undo,
  Alert,
  AlertCircle,
  Success,
  Info,
  Stop,
  ParticipantsRegistered,
  ParticipantsShow,
  ParticipantsNotReacted,
  ParticipantsDeclined,
  ParticipantsNoShow,
  Bill,
  BrowserPage,
  EmptyFile,
  Company,
  ImageEdit,
  Laptop,
  LockShield,
  Mail,
  Meter,
  MonitorChart,
  MonitorPieChart,
  Participants,
  Profile,
  Quill,
  EVS1,
  EVS2,
  EVS3,
  EVS4,
  EVS5,
} from 'icons';

export default {
  title: 'Components/Data Display/Icons',
  component: Cog,
  parameters: {
    docs: {
      description: {
        component:
          'Use icons to afford interactivity, communicate messages at quickly and draw attention to important information.',
      },
    },
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
      control: {
        type: 'select',
        options: ['inherit', 'primary', 'secondary', 'action', 'error', 'disabled', undefined],
      },
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
      control: {
        type: 'select',
        options: ['default', 'inherit', 'large', 'small'],
      },
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
  { name: 'Excel', component: Excel },
  { name: 'Pdf', component: Pdf },
  { name: 'Link', component: Link },
  { name: 'CreditCard', component: CreditCard },
  { name: 'Attachment', component: Attachment },
  { name: 'Bank', component: Bank },
  { name: 'Chat', component: Chat },
  { name: 'Filter', component: Filter },
  { name: 'Mobile', component: Mobile },
  { name: 'Lock', component: Lock },
  { name: 'Code', component: Code },
  { name: 'FaceId', component: FaceId },
  { name: 'Hierarchy', component: Hierarchy },
  { name: 'HierarchyTree', component: HierarchyTree },
  { name: 'ShareHierarchy', component: ShareHierarchy },
  { name: 'Magnifier', component: Magnifier },
  { name: 'Pin', component: Pin },
  { name: 'Share', component: Share },
  { name: 'Layout', component: Layout },
  { name: 'LayoutGrid', component: LayoutGrid },
  { name: 'LayoutRows', component: LayoutRows },
  { name: 'LayoutSquare', component: LayoutSquare },
  { name: 'List', component: List },
  { name: 'Menu', component: Menu },
  { name: 'Download', component: Download },
  { name: 'Upload', component: Upload },
  { name: 'LaptopDownload', component: LaptopDownload },
  { name: 'LaptopUpload', component: LaptopUpload },
  { name: 'UsersShare', component: UsersShare },
  { name: 'PeopleShare', component: PeopleShare },
  { name: 'PeopleSwitch', component: PeopleSwitch },
  { name: 'ChevronUp', component: ChevronUp },
  { name: 'ChevronRight', component: ChevronRight },
  { name: 'ChevronDown', component: ChevronDown },
  { name: 'ChevronLeft', component: ChevronLeft },
  { name: 'ArrowUp', component: ArrowUp },
  { name: 'ArrowDown', component: ArrowDown },
  { name: 'Loading', component: Loading },
  { name: 'PaginationLeft', component: PaginationLeft },
  { name: 'PaginationRight', component: PaginationRight },
  { name: 'PaginationFirst', component: PaginationFirst },
  { name: 'PaginationLast', component: PaginationLast },
  { name: 'Clock', component: Clock },
  { name: 'Stopwatch', component: Stopwatch },
  { name: 'Calendar', component: Calendar },
  { name: 'CalendarDate', component: CalendarDate },
  { name: 'Plus', component: Plus },
  { name: 'Close', component: Close },
  { name: 'Copy', component: Copy },
  { name: 'Save', component: Save },
  { name: 'Bin', component: Bin },
  { name: 'Edit', component: Edit },
  { name: 'Eye', component: Eye },
  { name: 'EyeClosed', component: EyeClosed },
  { name: 'Cog', component: Cog },
  { name: 'Star', component: Star },
  { name: 'StarFilled', component: StarFilled },
  { name: 'Preview', component: Preview },
  { name: 'Search', component: Search },
  { name: 'Undo', component: Undo },
  { name: 'Alert', component: Alert },
  { name: 'AlertCircle', component: AlertCircle },
  { name: 'Success', component: Success },
  { name: 'Info', component: Info },
  { name: 'Stop', component: Stop },
  { name: 'ParticipantsRegistered', component: ParticipantsRegistered },
  { name: 'ParticipantsShow', component: ParticipantsShow },
  { name: 'ParticipantsNotReacted', component: ParticipantsNotReacted },
  { name: 'ParticipantsDeclined', component: ParticipantsDeclined },
  { name: 'ParticipantsNoShow', component: ParticipantsNoShow },
  { name: 'Bill', component: Bill },
  { name: 'BrowserPage', component: BrowserPage },
  { name: 'EmptyFile', component: EmptyFile },
  { name: 'Company', component: Company },
  { name: 'ImageEdit', component: ImageEdit },
  { name: 'Laptop', component: Laptop },
  { name: 'LockShield', component: LockShield },
  { name: 'Mail', component: Mail },
  { name: 'Meter', component: Meter },
  { name: 'MonitorChart', component: MonitorChart },
  { name: 'MonitorPieChart', component: MonitorPieChart },
  { name: 'Participants', component: Participants },
  { name: 'Profile', component: Profile },
  { name: 'Quill', component: Quill },
  { name: 'EVS1', component: EVS1 },
  { name: 'EVS2', component: EVS2 },
  { name: 'EVS3', component: EVS3 },
  { name: 'EVS4', component: EVS4 },
  { name: 'EVS5', component: EVS5 },
];

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    iconDiv: {
      backgroundColor: theme.palette.grey[200],
      borderRadius: '10px',
      padding: '10px',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
    },
  })
);

const Template: Story<SvgIconProps> = (args) => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [importIcon, setImportIcon] = useState('Cog');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <ThemeSelector>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <TextField
            onChange={handleChange}
            value={search}
            variant="outlined"
            placeholder="Search"
          />
        </Grid>
        <Grid item xs={8}>
          <Source
            language={'js'}
            code={`
          // import icon
import { ${importIcon} } from '@lyyti/design-system/icons';
// use in a component
<${importIcon} ${args.color && args.color !== 'inherit' ? `color="${args.color}"` : ''}${
              args.fontSize && args.fontSize !== 'default' ? ` fontSize="${args.fontSize}"` : ''
            }${args.htmlColor && args.htmlColor ? ` htmlColor="${args.htmlColor}"` : ''}/>
        `}
            dark
          />
        </Grid>
        {iconsList
          .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((icon, index) => {
            return (
              <Grid item xs={3} key={index} onClick={() => setImportIcon(icon.name)}>
                <div className={classes.iconDiv}>
                  <icon.component {...args} />
                  <span>{icon.name}</span>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </ThemeSelector>
  );
};

export const All = Template.bind({});
All.args = { color: 'inherit', htmlColor: undefined, fontSize: undefined };
