import { Tab as MuiTab, TabProps as MuiTabProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type TabProps = MuiTabProps;

const Tab = ({ sx = {}, ...props }: TabProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <MuiTab
      ref={ref}
      sx={{
        fontSize: '16px',
        '& .MuiTab.Mui-disabled': { color: 'text.disabled' },
        '&.MuiTab-wrapped': { fontSize: '13px' },
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(Tab);
