import {
  StepConnector as MuiStepConnector,
  StepConnectorProps as MuiStepConnectorProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    active: {
      '& $line': {
        borderColor: theme.palette.secondary.main,
      },
    },
    completed: {
      '& $line': {
        borderColor: theme.palette.secondary.main,
      },
    },
    line: {
      border: '1px solid',
      color: theme.palette.action.disabledBackground,
    },
    alternativeLabel: {
      top: '16px',
      left: 'calc(-50% + 35px)',
      right: 'calc(50% + 35px)',
    },
  })
);

export type StepConnectorProps = MuiStepConnectorProps;

const StepConnector = (props: StepConnectorProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiStepConnector
      {...props}
      classes={{
        active: classes.active,
        alternativeLabel: classes.alternativeLabel,
        completed: classes.completed,
        line: classes.line,
      }}
    />
  );
};

export default StepConnector;
