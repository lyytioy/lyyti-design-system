import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type SwitchProps = MuiSwitchProps;

const Switch = ({ sx = {}, ...props }: SwitchProps, ref: Ref<HTMLButtonElement>): JSX.Element => {
  return (
    <MuiSwitch
      ref={ref}
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
            '&.MuiSwitch-colorSecondary': {
              color: 'secondary.main',
              '&:hover': {
                backgroundColor: 'secondaryStates.hover',
              },
            },
            '&.MuiSwitch-colorError': {
              color: 'error.main',
              '&:hover': {
                backgroundColor: 'errorStates.hover',
              },
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
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(Switch);
