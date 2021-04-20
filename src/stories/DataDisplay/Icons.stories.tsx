import { ChangeEvent, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Source } from '@storybook/addon-docs/blocks';
import ThemeSelector from 'themes/ThemeSelector';
import { SvgIconProps, makeStyles, Theme, createStyles } from '@material-ui/core';
import TextField from 'components/TextField';
import Grid from 'components/Grid';
import { Cog, Star } from 'icons';

export default {
  title: 'Components/Data Display/Icons',
  component: Cog,
  parameters: {
    docs: {
      description: {
        component: 'Fill this in from zeroheight',
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
  { name: 'Star', component: Star },
  { name: 'Cog', component: Cog },
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
          //import icon
import { ${importIcon} } from '@lds/icons'
// use in the component
<${importIcon}/>
        `}
            dark
          />
        </Grid>
        {iconsList
          .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
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
