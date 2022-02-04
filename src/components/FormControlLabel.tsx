import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material';

export type FormControlLabelProps = MuiFormControlLabelProps;

const FormControlLabel = (props: FormControlLabelProps): JSX.Element => {
  return (
    <MuiFormControlLabel
      sx={{
        color: 'grey.400',
        letterSpacing: '0.15px',
        label: {
          '&.Mui-disabled': {
            color: '#B8BCBF',
          },
        },
      }}
      {...props}
    />
  );
};

export default FormControlLabel;
