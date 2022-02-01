import {
  StepConnector as MuiStepConnector,
  StepConnectorProps as MuiStepConnectorProps,
} from '@mui/material';

export type StepConnectorProps = MuiStepConnectorProps;

const StepConnector = (props: StepConnectorProps): JSX.Element => {
  return (
    <MuiStepConnector
      sx={{
        '& .MuiStepConnector-line': {
          border: '1px solid',
          color: 'action.disabledBackground',
        },
        '&.Mui-active': {
          '& .MuiStepConnector-line': {
            borderColor: 'secondary.main',
          },
        },
        '&.Mui-completed': {
          '& .MuiStepConnector-line': {
            borderColor: 'secondary.main',
          },
        },
        '&.MuiStepConnector-alternativeLabel': {
          top: '16px',
          left: 'calc(-50% + 35px)',
          right: 'calc(50% + 35px)',
        },
      }}
      {...props}
    />
  );
};

export default StepConnector;
