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
    onChange: (event: React.MouseEvent<HTMLElement>, value: ToggleButtonOption['value']) => void;
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
