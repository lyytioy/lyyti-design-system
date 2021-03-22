import { ChangeEvent, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from 'themes/ThemeSelector';
import { SvgIconProps, makeStyles, Theme, createStyles } from '@material-ui/core';
import TextField from 'components/TextField';
import Grid from 'components/Grid';

import Cog from 'components/icons/Cog';
import Star from 'components/icons/Star';

export default {
  title: 'Components/Data Display/Icons',
  component: Cog,
  argTypes: {
    htmlColor: {
      control: 'color',
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
    },
  })
);

const Template: Story<SvgIconProps> = (args) => {
  const classes = useStyles();
  const [search, setSearch] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  console.log(Object.entries(iconsList));
  return (
    <ThemeSelector>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField
            onChange={handleChange}
            value={search}
            variant="outlined"
            placeholder="Search"
          />
        </Grid>
        {iconsList
          .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
          .map((icon, index) => {
            return (
              <Grid item xs={2} key={index}>
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
All.args = { color: undefined, htmlColor: undefined, fontSize: undefined };
