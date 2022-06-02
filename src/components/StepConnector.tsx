import {
  StepConnector as MuiStepConnector,
  StepConnectorProps as MuiStepConnectorProps,
} from '@mui/material';
import { forwardRef, Ref } from 'react';

export type StepConnectorProps = MuiStepConnectorProps;

const StepConnector = (
  { sx = {}, ...props }: StepConnectorProps,
  ref: Ref<unknown>
): JSX.Element => {
  return (
    <MuiStepConnector
      ref={ref}
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
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(StepConnector);
