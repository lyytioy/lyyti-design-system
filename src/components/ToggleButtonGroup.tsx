import { ToggleButtonGroup as MuiToggleButtonGroup, ToggleButton as MuiToggleButton, type SxProps as MuiSxProps, type ToggleButtonGroupProps as MuiToggleButtonGroupProps } from "@mui/material"

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
  return <MuiToggleButtonGroup
    data-testid={testId}
    value={value}
    exclusive
    onChange={onChange}
    aria-label={ariaLabel ?? 'toggle button group'}
    sx={{
      color: theme => theme.palette.primary.main,
      height: '40px',
      border: theme => `1px solid ${theme.palette.primary.main}`,
      '& .MuiToggleButton-root': {
        width: '130px', 
        color: theme => theme.palette.primary.main 
      },
      '& .Mui-selected, & .Mui-selected:hover': {
        bgcolor: theme => `${theme.palette.primary.main} !important`,
        color: 'white !important',
      },
      ...sx
    }}
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
