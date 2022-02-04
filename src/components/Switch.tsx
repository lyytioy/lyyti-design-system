import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material';

export type SwitchProps = MuiSwitchProps;

const Switch = (props: SwitchProps): JSX.Element => {
  return (
    <MuiSwitch
      sx={{
        width: '54px',
        height: '36px',

        '.MuiSwitch-switchBase': {
          padding: '10px',
          color: 'grey.300',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'primaryStates.hover',
            },
          },
          '&.Mui-disabled': {
            color: 'grey.100',
            '+ .MuiSwitch-track': {
              backgroundColor: 'grey.300',
              opacity: 0.5,
            },
          },
          '&.MuiSwitch-sizeSmall &': {
            padding: '5px',
          },
        },
        '.MuiSwitch-track': {
          backgroundColor: 'grey.200',
        },
        '.MuiSwitch-thumb': {
          width: '16px',
          height: '16px',
          boxShadow: 'none',
        },
        '&.MuiSwitch-sizeSmall': {
          width: '36px',
          height: '22px',
          '& .Mui-checked': {
            transform: 'translate(12px)',
          },
          '& .MuiSwitch-thumb': {
            width: '12px',
            height: '12px',
          },
          '.MuiSwitch-switchBase': {
            padding: '5px',
          },
        },
      }}
      {...props}
    />
  );
};

export default Switch;
