import { Stepper as MuiStepper, StepperProps as MuiStepperProps, Theme } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type OrientationTypes = 'horizontal';

export type StepperProps = Omit<MuiStepperProps, 'square' | 'variant' | 'elevation'> & {
  orientation: OrientationTypes;
};

const Stepper = ({ sx = {}, ...props }: StepperProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <MuiStepper
      ref={ref}
      sx={{
        backgroundColor: 'transparent',
        '& .MuiStep-horizontal': {
          paddingLeft: '32px',
          paddingRight: '32px',
        },
        '& .MuiStepIcon-root': {
          color: '#FFF',
          border: '2px solid',
          borderColor: 'action.disabledBackground',
          borderRadius: '50%',
          height: '32px',
          width: '32px',
          '&.Mui-completed': {
            fill: '#FFF',
          },
          '&.Mui-completed, &.Mui-active': {
            color: 'secondary.main',
            borderColor: 'secondary.main',
            bgcolor: 'secondary.main',
          },
        },
        '& .MuiStepIcon-text': {
          fill: (theme: Theme) => theme.palette.action.disabledBackground,
          color: 'action.disabledBackground',
          fontWeight: 'bold',
        },
        '& .MuiStepIcon-root.Mui-active .MuiStepIcon-text': {
          fill: '#FFF',
        },
        '& .MuiStepLabel-label': {
          fontSize: '15px',
          color: 'action.disabledBackground',
          '&.MuiStepLabel-alternativeLabel': {
            marginTop: '8px',
          },
          '&.Mui-completed, &.Mui-active': {
            color: 'secondary.main',
          },
        },
        '& .MuiStepLabel-iconContainer': {
          boxSizing: 'border-box',
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(Stepper);
