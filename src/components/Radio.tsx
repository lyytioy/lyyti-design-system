import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';

export type RadioProps = MuiRadioProps;

const Radio = (props: RadioProps): JSX.Element => {
  return (
    <MuiRadio
      sx={{
        color: 'grey.200',
        '&:hover': { bgcolor: 'primaryStates.hover' },
      }}
      {...props}
    />
  );
};

export default Radio;
