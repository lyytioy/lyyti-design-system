import { ToggleButtonGroup as MuiToggleButtonGroup, ToggleButton as MuiToggleButton, type SxProps as MuiSxProps, type ToggleButtonGroupProps as MuiToggleButtonGroupProps, useTheme } from "@mui/material"

export interface ToggleButtonOption {
    value: string;
    text: string;
    sx?: MuiSxProps;
    ariaLabel?: string;
    testId?: string;
}

export type ToggleButtonGroupProps = MuiToggleButtonGroupProps & {
    options: ToggleButtonOption[],
    sx?: MuiSxProps;
    ariaLabel?: string;
    testId?: string;
    /* 
      value is typed as "any" in MuiToggleButtonGroupProps as it covers both cases 
      for MuiToggleButtonGroup having exclusive prop set to true and false
      we always have it marked as exclusive=true so we can narrow down values, 
      hence the ToggleButtonOption['value'] when selecting new value 
      and null when clicking on already selected value as it does not change
    */ 
    onChange: (event: React.MouseEvent<HTMLElement>, value: ToggleButtonOption['value'] | null) => void;
}

const ToggleButtonGroup = ({ 
  value, 
  onChange, 
  options, 
  sx, 
  ariaLabel, 
  testId,
  ...props
}: ToggleButtonGroupProps) => {
  const theme = useTheme();

  const sxProp = {
    color: theme.palette.primary.main,
    height: '40px',
    border: `1px solid ${theme.palette.primary.main}`,
    '& .MuiToggleButton-root': {
      width: '130px', 
      color: theme.palette.primary.main 
    },
    '& .Mui-selected, & .Mui-selected:hover': {
      bgcolor: `${theme.palette.primary.main} !important`,
      color: 'white !important',
    },
    ...sx
  } as ToggleButtonGroupProps['sx'];
  // We have to explicitly cast it to correct type as typescript-5.3.3 complains about
  // excessive complexity comparing types

  return <MuiToggleButtonGroup
    data-testid={testId}
    value={value}
    exclusive
    onChange={onChange}
    aria-label={ariaLabel ?? 'toggle button group'}
    sx={sxProp}
    {...props}
  >
    {options.map(option => <MuiToggleButton 
      data-testid={option.testId} 
      key={option.value} 
      sx={option.sx} 
      value={option.value} 
      aria-label={option.ariaLabel ?? `toggle button ${option.value}`}
    >
      {option.text}
    </MuiToggleButton>
    )}
  </MuiToggleButtonGroup>
}

export default ToggleButtonGroup;
