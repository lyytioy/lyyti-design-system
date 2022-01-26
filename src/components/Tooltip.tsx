import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    tooltip: {
      fontSize: '12px',
      backgroundColor: theme.palette.grey[400],
      borderRadius: '3px',
    },
    arrow: {
      color: theme.palette.grey[400],
      fontSize: '8px',
    },
  })
);

export interface TooltipProps extends MuiTooltipProps {
  arrow: boolean;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  title: NonNullable<React.ReactNode>;
  'data-testid'?: string;
}

const Tooltip = ({ arrow = false, placement = 'bottom', ...props }: TooltipProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiTooltip
      arrow={arrow}
      placement={placement}
      {...props}
      classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
    />
  );
};

export default Tooltip;
