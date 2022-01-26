import { Chip as MuiChip, ChipProps as MuiChipProps, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      '& .MuiChip-root': {
        backgroundColor: theme.palette.primary.main,
      },
      '& .MuiChip-deleteIconColorPrimary': {
        color: 'rgba(255, 255, 255, 0.7)',
      },
      '& .MuiChip-deleteIconColorSecondary': {},
    },
  })
);

export interface ChipProps extends MuiChipProps {
  color?: 'primary' | 'secondary';
  clickable?: boolean;
  disabled?: boolean;
  'data-testid'?: string;
}

const Chip = ({
  color = 'primary',
  variant = 'filled',
  size = 'medium',
  clickable = false,
  disabled = false,
  ...props
}: ChipProps): JSX.Element => {
  const classes = useStyles();
  return (
    <MuiChip
      {...props}
      classes={{ root: classes.root }}
      color={color}
      variant={variant}
      size={size}
      clickable={clickable}
      disabled={disabled}
    />
  );
};

export default Chip;
