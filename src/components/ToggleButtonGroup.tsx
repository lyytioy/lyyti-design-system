import { useTheme } from '@mui/material/styles';
import { ToggleButtonGroup as MuiToggleButtonGroup, ToggleButton as MuiToggleButton, type SxProps as MuiSxProps, type ToggleButtonGroupProps as MuiToggleButtonGroupProps } from "@mui/material"

export interface ToggleButtonOption {
    value: number | string;
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
  testId
}: ToggleButtonGroupProps) => {
  const theme = useTheme();

  return <MuiToggleButtonGroup
    data-testid={testId}
    value={value}
    exclusive
    onChange={onChange}
    aria-label={ariaLabel ?? 'toggle button group'}
    sx={{
      color: `${theme.palette.primary.main} !important`,
      height: '40px',
      border: `1px solid ${theme.palette.primary.main}`,
      '& .MuiToggleButton-root': {
        width: '130px', color:theme.palette.primary.main 
      },
      '& .Mui-selected, & .Mui-selected:hover': {
        bgcolor: `${theme.palette.primary.main} !important`,
        color: 'white !important',
      },
      ...sx
    }}
  >
    {options.map(option => <MuiToggleButton 
      data-testid={option.testId} 
      key={option.value} 
      sx={option.sx} 
      value={option.value} 
      aria-label={option.ariaLabel ?? `toggle button ${option.value}`}
    >
      {option.value}
    </MuiToggleButton>
    )}
  </MuiToggleButtonGroup>
}

export default ToggleButtonGroup;