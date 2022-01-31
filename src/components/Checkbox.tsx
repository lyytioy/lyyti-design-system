import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';

export type CheckboxProps = MuiCheckboxProps;

const Checkbox = (props: CheckboxProps): JSX.Element => {
  return (
    <MuiCheckbox
      sx={{
        color: 'grey.200',
        '&:hover': {
          bgcolor: 'primaryStates.hover',
        },
      }}
      {...props}
    />
  );
};

export default Checkbox;
