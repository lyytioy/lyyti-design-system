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
  component: i.SettingsRounded,
  parameters: {
    docs: {
      description: {
        component:
          'Use icons to afford interactivity, communicate messages at quickly and draw attention to important information. We are using rounded MUI icons. You can find a list of the icons here: https://mui.com/material-ui/material-icons/?theme=Rounded',
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
  { name: 'EVS1', component: i.EVS1 },
  { name: 'EVS2', component: i.EVS2 },
  { name: 'EVS3', component: i.EVS3 },
  { name: 'EVS4', component: i.EVS4 },
  { name: 'EVS5', component: i.EVS5 },
  { name: 'EVSSleeping', component: i.EVSSleeping },
  { name: 'SettingsRounded', component: i.SettingsRounded },
  { name: 'PersonRounded', component: i.PersonRounded },
];

const Template: StoryFn<SvgIconProps> = (args) => {
  const [search, setSearch] = useState('');
  const [importIcon, setImportIcon] = useState('SettingsRounded');

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
                    backgroundColor: 'grey.100',
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
