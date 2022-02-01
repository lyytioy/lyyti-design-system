import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

export interface TooltipProps extends MuiTooltipProps {
  arrow: boolean;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  title: NonNullable<React.ReactNode>;
  'data-testid'?: string;
}

const Tooltip = ({
  arrow = false,
  placement = 'bottom',
  children,
  title,
  ...props
}: TooltipProps): JSX.Element => {
  return (
    <MuiTooltip
      title={title}
      arrow={arrow}
      placement={placement}
      componentsProps={{
        tooltip: { sx: { fontSize: '12px', backgroundColor: 'grey.400', borderRadius: '3px' } },
        arrow: { sx: { fontSize: '8px', color: 'grey.400' } },
      }}
      {...props}
    >
      {children}
    </MuiTooltip>
  );
};

export default Tooltip;
