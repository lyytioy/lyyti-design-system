import { Stepper as MuiStepper, StepperProps as MuiStepperProps } from '@mui/material';

export type OrientationTypes = 'horizontal';

export type StepperProps = MuiStepperProps & { orientation: OrientationTypes };

const Stepper = (props: StepperProps): JSX.Element => {
  return (
    <MuiStepper
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
          '&.Mui-completed,&.Mui-active': {
            color: 'secondary.main',
            borderColor: 'secondary.main',
            bgcolor: 'secondary.main',
          },
        },
        '& .MuiStepIcon-text': {
          fill: 'action.disabledBackground',
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
          '&.Mui-completed,.Mui-active': {
            color: 'secondary.main',
          },
        },
        '& .MuiStepLabel-iconContainer': {
          boxSizing: 'border-box',
        },
      }}
      {...props}
    />
  );
};

export default Stepper;
