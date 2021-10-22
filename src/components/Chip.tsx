import {
  Chip as MuiChip,
  ChipProps as MuiChipProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

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
  variant = 'default',
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
